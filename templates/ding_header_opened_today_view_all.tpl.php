<?php

/**
 * @file
 * Template for block with all libraries hours.
 */
?>

<div class="ohs-wrapper">
  <?php foreach ($libraries as $library): ?>
    <div class="oh-row-wrapper">
    <?php if (!empty($library['opening_hours'])): ?>
      <?php $opening_hours = array_values($library['opening_hours']); ?>
      <?php foreach ($opening_hours as $key => $value): ?>
        <div class="oh-row">
          <?php if ($key == 0): ?>
            <div class="left"><?php print $library['title']; ?></div>
          <?php else: ?>
            <div class="left"><?php print $value['notice']; ?></div>
          <?php endif; ?>
          <div class="right"><?php print $value['start_time']; ?> - <?php print $value['end_time']; ?></div>
        </div>
      <?php endforeach; ?>
    <?php else: ?>
      <div class="oh-row">
        <div class="left"><?php print $library['title']; ?></div>
        <div class="right"><?php print t('Closed'); ?></div>
      </div>
    <?php endif; ?>
    </div>
  <?php endforeach; ?>
</div>
