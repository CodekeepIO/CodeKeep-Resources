import React from 'react';
import { Logo, HeaderStyle, Nav } from 'styles';
import { GitHub, Twitter } from 'react-feather';

const Header = () => {
	return (
		<HeaderStyle>
			<Logo>
				<img src="https://codekeep.io/assets/icon.svg" />
				Codekeep
			</Logo>
			<Nav>
				<a href="https://github.com/CodekeepIO/CodeKeep-Resources" target="_BLANK" rel="noreferrer noopener">
					<GitHub size={16} /> Github
				</a>
				<a
					href="https://github.com/CodekeepIO/CodeKeep-Resources#add-new-course"
					target="_BLANK"
					rel="noreferrer noopener"
				>
					Add Course
				</a>
				<a href="https://twitter.com/codekeepio" target="_BLANK" rel="noreferrer noopener">
					<Twitter size="16" />
				</a>
			</Nav>
		</HeaderStyle>
	);
};

export default Header;
