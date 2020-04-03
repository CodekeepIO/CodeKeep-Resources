import React from 'react';
import { FooterStyle } from 'styles';

const Footer = () => {
	return (
		<FooterStyle>
			Made with <img src="https://twemoji.maxcdn.com/2/svg/1f499.svg" width="20px" /> by{' '}
			<a href="https://codekeep.io" rel="noreferrer noopener" target="_blank">
				CodeKeep
			</a>
		</FooterStyle>
	);
};

export default Footer;
