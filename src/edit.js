import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit() {
	return (
		<div { ...useBlockProps({ className: 'formo-contact-form-switcher'}) }>
      <p className='formo-contact-form-switcher-title'>Add content for each subject here:</p>
      <div className='formo-contact-form-switcher-forms'>
        <InnerBlocks
          allowedBlocks={['create-block/formo-contact-form']}
        />
      </div>
		</div>
	);
}
