/**
 * Drag-and-drop reordering functionality.
 * Uses SortableJS to handle drag-drop and saves order via AJAX.
 *
 * @package PlottOs
 */

(function ($) {
    'use strict';

    /**
     * Initialize drag-and-drop functionality.
     */
    $(document).ready(function () {
        const $sortableList = $('#sortable-posts');

        // Exit if no sortable list found
        if (!$sortableList.length) {
            return;
        }

        const postType = $sortableList.data('post-type');
        const $feedback = $('#reorder-feedback');

        // Initialize SortableJS
        const sortable = new Sortable($sortableList[0], {
            animation: 150,
            handle: '.dashicons-menu',
            ghostClass: 'sortable-ghost',
            chosenClass: 'sortable-chosen',
            dragClass: 'sortable-drag',
            onEnd: function (evt) {
                saveOrder();
            }
        });

        /**
         * Save post order via AJAX.
         */
        function saveOrder() {
            // Get current order of post IDs
            const order = [];
            $sortableList.find('.sortable-item').each(function () {
                order.push($(this).data('id'));
            });

            // Show loading feedback
            showFeedback('Saving order...', 'info');

            // Send AJAX request
            $.ajax({
                url: wpCptOrdering.ajaxUrl,
                type: 'POST',
                data: {
                    action: 'wp_cpt_ordering_save',
                    nonce: wpCptOrdering.nonce,
                    post_type: postType,
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
