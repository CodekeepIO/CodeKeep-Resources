import React, { useEffect } from 'react';
import { initGA, logPageView } from 'libs/analytics';
import Header from './Header';
import Footer from './Footer';

const Layout: React.SFC<React.ReactNode> = ({ children }) => {
	useEffect(() => {
		if (!window.GA_INITIALIZED) {
			initGA();
			window.GA_INITIALIZED = true;
		}
		logPageView();
	}, []);

	return (
		<div>
			<Header />
			<div className="content">{children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
