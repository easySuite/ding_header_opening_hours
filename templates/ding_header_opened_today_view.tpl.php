<?php

/**
 * @file
 * Template for visible block with single library.
 */
?>

<div class="ohs-wrapper">
<?php foreach ($libraries as $library): ?>
  <?php if (!empty($library['opening_hours'])): ?>
    <?php foreach ($library['opening_hours'] as $key => $value): ?>
      <div class="oh-wrapper">
        <?php if ($key == 0): ?>
          <div class="left"><?php print $library['title']; ?>:</div>
        <?php else: ?>
          <div class="left"><?php print $value['notice']; ?>:</div>
        <?php endif; ?>
        <div class="right"><?php print $value['start_time']; ?> - <?php print $value['end_time']; ?></div>
      </div>
    <?php endforeach; ?>
  <?php else: ?>
    <div class="oh-wrapper">
        <div class="left"><?php print $library['title']; ?></div>
        <div class="right"><?php print t('Closed'); ?></div>
    </div>
  <?php endif; ?>
<?php endforeach; ?>
</div>
