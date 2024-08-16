/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InnerBlocks, useInnerBlocksProps, InspectorControls } from '@wordpress/block-editor';
import {Panel, PanelBody, PanelHeader, PanelRow, SelectControl, RangeControl} from '@wordpress/components' 

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes, setAttributes}) {

	setAttributes({minSize:`${attributes.minSizeValue}${attributes.minSizeUnit}`})

	const styleVars = {
		'--minSize':attributes.minSize,
		'--alignItems':attributes.alignItems,
		'--justifyContent':attributes.justifyContent,
		'--contentGrow':attributes.contentGrow,
	}

	const blockProps = useBlockProps();
	// const innerBlocksProps = useInnerBlocksProps({ ...blockProps }, {});
	
	return (
		<div { ...useBlockProps({style: styleVars}) }>
			<InspectorControls>
				<Panel>
					<PanelBody title="collapsed min size" initialOpen={true}>
						<PanelRow >
							<RangeControl
								label="min collapse size"
								value={attributes.minSizeValue}
								onChange={ ( newValue ) => setAttributes({minSizeValue:newValue}) }
							/>
							<SelectControl
								value={attributes.minSizeType}
								options={[
									{label:'px', value:'px'},
									{label:'rem', value:'rem'},
									{label:'em', value:'em'},
									{label:'vh', value:'vh'},
									{label:'vw', value:'vw'},
									{label:'%', value:'%'},
								]}
								onChange={ ( newUnit ) => setAttributes({minSizeUnit:newUnit}) }
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody title="content grow" initialOpen={false}>
						<PanelRow >
							<RangeControl
								value={attributes.contentGrow}
								onChange={ ( newValue ) => setAttributes({contentGrow:newValue}) }
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody title="item alignment" initialOpen={false}>
						<PanelRow >
							<SelectControl
								value={attributes.alignItems}
								options={[
									{label:'start', value:'start'},
									{label:'end', value:'end'},
									{label:'center', value:'center'},
									{label:'stretch', value:'stretch'}
								]}
								onChange={ ( newAlign ) => setAttributes({alignItems:newAlign}) }
							/>
						</PanelRow>
					</PanelBody>
					<PanelBody title="content justification" initialOpen={false}>
						<PanelRow >
							<SelectControl
								value={attributes.justifyContent}
								options={[
									{label:'start', value:'start'},
									{label:'end', value:'end'},
									{label:'space-between', value:'space-between'},
									{label:'space-around', value:'space-around'},
									{label:'center', value:'center'},
								]}
								onChange={ ( newJustify ) => setAttributes({justifyContent:newJustify}) }
							/>
						</PanelRow>
					</PanelBody>
				</Panel>
			</InspectorControls>
				<InnerBlocks
					// {...innerBlocksProps}
				/>
		</div>
	);
}
