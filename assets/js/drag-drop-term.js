/**
 * Drag-and-drop reordering functionality for taxonomies.
 * Uses SortableJS to handle drag-drop on WordPress term list tables.
 *
 * @package WpCptOrdering
 */

(function ($) {
    'use strict';

    /**
     * Initialize drag-and-drop functionality.
     */
    $(document).ready(function () {
        const $termsTable = $('#the-list');

        // Exit if no terms table found
        if (!$termsTable.length) {
            return;
        }

        const taxonomy = wpCptOrderingTerm.taxonomy;
        const $feedback = $('#reorder-feedback');

        // Initialize SortableJS on the table tbody
        const sortable = new Sortable($termsTable[0], {
            animation: 150,
            handle: 'tr',  // Entire row is draggable
            ghostClass: 'wp-cpt-ordering-ghost',
            chosenClass: 'wp-cpt-ordering-chosen',
            dragClass: 'wp-cpt-ordering-drag',
            onEnd: function (evt) {
                saveOrder();
            }
        });

        /**
         * Save term order via AJAX.
         */
        function saveOrder() {
            // Get current order of term IDs from table rows
            const order = [];
            $termsTable.find('tr').each(function () {
                const termId = $(this).attr('id');
                if (termId && termId.startsWith('tag-')) {
                    order.push(termId.replace('tag-', ''));
                }
            });

            // Show loading feedback
            showFeedback('Saving order...', 'info');

            // Send AJAX request
            $.ajax({
                url: wpCptOrderingTerm.ajaxUrl,
                type: 'POST',
                data: {
                    action: 'wp_cpt_ordering_save_term',
                    nonce: wpCptOrderingTerm.nonce,
                    taxonomy: taxonomy,
                    order: order
                },
                success: function (response) {
                    if (response.success) {
                        showFeedback(response.data.message, 'success');
                    } else {
                        showFeedback(response.data.message || 'Failed to save order.', 'error');
                    }
                },
                error: function (xhr, status, error) {
                    console.error('AJAX error:', status, error);
                    showFeedback('Failed to save order. Please try again.', 'error');
                }
            });
        }

        /**
         * Display feedback message to user.
         *
         * @param {string} message Message to display.
         * @param {string} type    Message type: 'success', 'error', or 'info'.
         */
        function showFeedback(message, type) {
            // Remove previous classes
            $feedback.removeClass('notice-success notice-error notice-info');

            // Add appropriate class
            let noticeClass = 'notice-info';
            if (type === 'success') {
                noticeClass = 'notice-success';
            } else if (type === 'error') {
                noticeClass = 'notice-error';
            }

            $feedback
                .addClass('notice ' + noticeClass)
                .html('<p>' + escapeHtml(message) + '</p>')
                .fadeIn(200);

            // Auto-hide success messages after 3 seconds
            if (type === 'success') {
                setTimeout(function () {
                    $feedback.fadeOut(200);
                }, 3000);
            }
        }

        /**
         * Escape HTML to prevent XSS.
         *
         * @param {string} text Text to escape.
         * @return {string} Escaped text.
         */
        function escapeHtml(text) {
            const map = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            };
            return text.replace(/[&<>"']/g, function (m) {
                return map[m];
            });
        }
    });

})(jQuery);
