import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout: React.SFC<React.ReactNode> = ({ children }) => {
	return (
		<div>
			<Header />
			<div className="content">{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
