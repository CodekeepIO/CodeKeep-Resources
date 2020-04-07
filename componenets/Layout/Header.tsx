import React from 'react';
import { Logo, HeaderStyle, Nav } from 'styles';
import { GitHub, Twitter } from 'react-feather';
import Link from 'next/link';

const Header = () => {
	return (
		<HeaderStyle>
			<Link as="/" href="/">
				<Logo>
					<img src="https://codekeep.io/assets/icon.svg" />
					Codekeep
				</Logo>
			</Link>
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
