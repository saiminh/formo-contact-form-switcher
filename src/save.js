import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save() {
	return (
		<div { ...useBlockProps.save({
      className: 'formo-contact-form-switcher',
    }) }>
      <select className='formo-contact-form-switcher-switch'>
      </select>
      <div className='formo-contact-form-switcher-forms'>
        <InnerBlocks.Content />
      </div>
		</div>
	);
}
