<?php

$plugin = array(
  'single' => TRUE,
  'title' => t('Opening Hours: Opened libraries'),
  'description' => t('Pane which contains simplified Opening Hours block.'),
  'category' => t('Ding!'),
  'render callback' => 'dhoh_pane_render',
  'all contexts' => TRUE,
);

/**
 * Pane renderer.
 */
function dhoh_pane_render() {
  $block = array();

  $block['title'] = t('Opened today');

  // First (permanent) block.
  $main_lib = block_load('ding_header_opening_hours', 'ding_header_opened_today');
  $render_array = _block_get_renderable_array(_block_render_blocks(array($main_lib)));

  // Toggled block.
  $all_libs = block_load('ding_header_opening_hours', 'ding_header_opened_today_all');
  $render_array2 = _block_get_renderable_array(_block_render_blocks(array($all_libs)));

  // Render the block element.
  $output = render($render_array);
  $output .= render($render_array2);

  $block['content'] = array(
    '#markup' => $output,
  );

  return (object) $block;
}
