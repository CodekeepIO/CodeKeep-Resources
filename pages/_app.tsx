import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';

import ProgressBar from 'libs/ProgressBar';
import { GlobalStyle } from 'styles/basic.styles';

const theme = {
	primary: 'green'
};

export default class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<ThemeProvider theme={theme}>
				<link
					href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;500;700&display=swap"
					rel="stylesheet"
				/>
				<ProgressBar color="#000" startPosition={0.3} stopDelayMs={200} height={3} />
				<Component {...pageProps} />
				<GlobalStyle />
			</ThemeProvider>
		);
	}
}
