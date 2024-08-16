<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

$wrapper_attributes = get_block_wrapper_attributes([
	'class' => $attributes['layoutDirection'] . ' ' . $attributes['contentJustify']
])

?>

<div <?php echo $wrapper_attributes; ?>>
	<?php echo $content ?>
</div>
