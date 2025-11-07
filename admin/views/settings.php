// admin/views/settings.php
<div id="plottos-cpt-ordering-settings-root">
  <form method="post" action="options.php" class="plottos-settings-fallback">
    <?php
      settings_fields('plottos_ordering');
      do_settings_sections('plottos_ordering');
      submit_button();
    ?>
  </form>
</div>
