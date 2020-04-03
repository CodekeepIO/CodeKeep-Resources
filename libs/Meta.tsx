import * as React from 'react';
import Head from 'next/head';

interface MetaProps {
	title: string;
	description: string;
	keywords: string;
}

const Meta = ({ title: pageTitleText, description, keywords }: MetaProps): any => {
	const imageUrl: string = 'https://i.imgur.com/ZAlfi73.png';
	const siteName: string = 'CodeKeep';
	const pageTitle: string = `${pageTitleText}`;
	return (
		<Head>
			<title>{pageTitle}</title>
			<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
			<meta name="author" content="Devzstudio" />
			<meta name="author" content="Devzstudio" />
			<link rel="icon" type="image/x-icon" href="https://codekeep.com/favicon.ico" />

			<meta name="theme-color" content="#AD020E" />
			<meta name="msapplication-navbutton-color" content="#AD020E" />
			<meta name="apple-mobile-web-app-status-bar-style" content="#AD020E" />

			<meta name="robots" content="index, follow" />
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />

			<meta itemProp="name" content={pageTitleText} />
			<meta itemProp="description" content={description} />
			<meta itemProp="image" content={imageUrl} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta property="og:title" content={pageTitleText} />
			<meta property="og:type" content="article" />
			<meta property="og:url" content="https://www.codekeep.com/" />
			<meta property="og:image" content={imageUrl} />
			<meta name="twitter:site" content="@codekeep" />
			<meta name="twitter:creator" content="@codekeep" />
			<meta property="og:description" content={description} />

			<meta property="og:title" content={pageTitleText} />
			<meta property="og:type" content="article" />
			<meta property="og:url" content="https://www.codekeep.com/" />
			<meta property="og:image" content={imageUrl} />
			<meta property="og:description" content={description} />
			<meta property="og:site_name" content={siteName} />
			<meta property="article:section" content="Article Section" />
			<meta property="article:tag" content="Article Tag" />
			<meta property="fb:admins" content="1045373609194803" />
		</Head>
	);
};
export default Meta;
