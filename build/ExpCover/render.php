<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

 $styleString = '';

 $minSize = $attributes['minSize'];
 $styleString .= "--minSize: $minSize; ";

 $alignItems = $attributes['alignItems'];
 $styleString .= "--alignItems: $alignItems; ";

 $justifyContent = $attributes['justifyContent'];
 $styleString .= "--justifyContent: $justifyContent; ";

 $contentGrow = $attributes['contentGrow'];
 $styleString .= "--contentGrow: $contentGrow; ";

 $collapsedEm = $attributes['collapsedEm'];
 $styleString .= "--collapsedEm:" . $collapsedEm . "em; ";

 $wrapper_attributes = get_block_wrapper_attributes([
	'style' => $styleString
 ]);
?>


<div <?php echo $wrapper_attributes ?>>
	<div class="exp-cover-content">
		<?php echo $content ?>
	</div>
</div>
