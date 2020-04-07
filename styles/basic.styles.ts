import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const breakpoints = [576, 768, 992, 1200];

const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

export const GlobalStyle = createGlobalStyle`
	::selection {
		background-color: #000;
		color: #fff;
	}

	::-webkit-scrollbar-track {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		background-color: #fafafa;
	}

	::-webkit-scrollbar {
		width: 5px;
		background-color: #fafafa;
	}

	::-webkit-scrollbar-thumb {
		-webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
		background-color: #555;
	}


	html,body{
		margin: 0;
		padding: 0;
	}
	body{
		font-family: 'Quicksand', sans-serif;
		margin:2rem;
	}
	a{
		text-decoration:none;
	}
`;

export const FlexSb = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const FlexEnd = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
export const Container = styled.div`
	box-sizing: border-box;
	margin-left: auto;
	margin-right: auto;
	width: 100%;
	display: flex;
	.content {
		flex-grow: 1;
	}

	${mq[0]} {
		flex-wrap: wrap;
	}
`;

export const CKLink = styled.p`
	text-align: center;
	a {
		color: #000;
	}
	span {
		color: #0af;
	}
`;
export const HeaderStyle = styled.header`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
`;

export const Nav = styled.nav`
	${mq[0]} {
		margin-top: 2rem;
	}

	a {
		color: #474c5f;
		padding: 0 1rem;
		:hover {
			color: #000;
		}
	}
`;

export const SidebarStyle = styled.div`
	margin-right: 1rem;
	min-width: 300px;

	.clear-filter {
		cursor: pointer;
		font-size: 12px;
		color: #737373;
		:hover {
			color: #000;
		}
	}
	ul {
		padding: 0;
		list-style: none;
		li {
			display: flex;
			justify-content: space-between;

			border-radius: 4px;
			cursor: pointer;
			font-size: 13px;
			color: #737373;
			padding: 10px 6px;
			font-size: 13px;

			.check-box {
				padding: 3px;
				width: 14px;
				height: 14px;
				background: #f0f0f0;
				border-radius: 6px;
				overflow: hidden;
			}

			:hover {
				color: #000;
			}
		}
		.active {
			background: #f0f0f0;
			border-left: 3px solid #0af;
		}
	}
`;
export const Logo = styled.div`
	display: flex;
	cursor: pointer;
	align-items: center;
	img {
		margin-right: 10px;
	}
`;

export const HeroSection = styled.div`
	display: flex;
	flex-wrap: wrap;
	background: #f7f7f7;
	border-radius: 2rem;
	align-items: center;
	justify-content: space-between;
	padding: 1rem;
	position: relative;
	margin: 2rem 0;

	background: url(https://images.pexels.com/photos/943096/pexels-photo-943096.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260);
	background-size: cover;
	color: white;

	> div {
		margin-left: 3rem;

		${mq[0]} {
			margin-left: unset;
		}

		.description {
			max-width: 400px;
			line-height: 1.7rem;
			font-size: 14px;
			color: #7b7b7b;
		}
	}

	img {
		${mq[0]} {
			display: none;
		}
	}

	.share {
		color: #fff;
		margin: 1rem 0;
		a {
			:hover {
				transform: translateY(-3px);
				background: #0091da;
			}
			svg {
				position: relative;
				top: 3px;
			}
			box-sizing: border-box;
			text-decoration: none;
			margin: 0 5px;
			display: inline-block;
			margin-bottom: 0;
			font-weight: 500;
			text-align: center;
			white-space: nowrap;
			vertical-align: middle;
			touch-action: manipulation;
			cursor: pointer;
			background-image: none;
			border: 1px solid transparent;
			user-select: none;
			border-radius: 5px;
			line-height: 2rem;
			transition-duration: 0.35s;
			font-size: 0.8rem;
			padding: 0 10px;
			color: #fff;
			background-color: #0af;
			border-color: transparent;
		}
	}
`;

export const SearchInput = styled.div`
	position: relative;
	input {
		padding: 11px;
		padding-left: 40px;
		border: 0px;
		font-size: 12px;
		width: 95%;
		border: 0px;
		background: #f0f0f0;
		border-radius: 0.4rem;
		outline: 0;
		margin: 1rem 0;
		margin-left: 1rem;
		border: 1px solid #f0f0f0;

		${mq[0]} {
			width: unset;
		}

		:hover,
		:focus {
			border: 1px solid #474c5f;
		}
	}

	svg {
		position: absolute;
		top: 26px;
		left: 28px;
	}
`;

export const CoursesList = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const ErrorPage = styled.div`
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	align-items: center;
	height: 80vh;
	button {
		color: #fff;
		background: #118cf0;
		padding: 10px 20px;
		border-radius: 0.4rem;
		border: 0px;
		cursor: pointer;
		:hover {
			background: #000;
		}
	}
`;

export const BreadCrumb = styled.div`
	display: flex;
	align-items: center;
	color: #737373;
	margin: 2rem 0;
	cursor: pointer;
	:hover {
		color: #000;
	}
`;

export const CourseWrapperList = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

export const CourseFullpageCard = styled.div`
	display: flex;
	margin-top: 2rem;
	box-shadow: 4px 12px 47px 0 rgba(0, 0, 0, 0.1);

	${mq[0]} {
		flex-wrap: wrap;
	}
	.share {
		color: #737373;
		a {
			padding: 0 10px;
			:hover {
				color: #118cf0;
			}
		}
	}
	.cover-image {
		position: relative;
		max-width: 300px;
		.cover-pic {
			border-radius: 4px 4px 0 0;
			height: 188px;
			background: #f0f0f0;
		}
	}
	.course-description {
		padding: 2rem;
		h3 {
			z-index: 9;
			position: relative;
		}
		.tag {
			line-height: 0;
			padding: 0;
			margin: 0;
			color: #737373;
			font-size: 12px;
			display: flex;
			align-items: center;
		}
		a {
			word-break: break-word;
			color: #474c5f;
			:hover {
				color: #000;
			}
		}
		p {
			color: #737373;
			min-height: 107px;
			font-size: 13px;
			line-height: 1.4rem;
			text-align: justify;
		}
		.redirect {
			display: flex;
			justify-content: flex-end;
			.redirectLink {
				background: none;
				border: 1px solid #118cf0;
				background: none;
				color: #474c5e;
				padding: 0.5rem 1rem;
				display: inline-block;
				border-radius: 0.4rem;
				font-size: 14px;
				text-align: center;

				:hover {
					transform: translateY(-3px);
					background: #118cf0;
					color: #fff;
				}
			}
		}
	}
	.logo {
		position: absolute;
		top: 130px;
		right: 93px;
		border-radius: 230px;
		width: 100px;
		border: 5px solid #fff;
		border-radius: 100px;
	}
`;

export const CourseCardStyle = styled.div`
	box-sizing: border-box;
	text-decoration: none;
	border-radius: 0.625rem;
	padding: 1rem;
	margin: 1rem;
	line-height: 1.5;
	box-shadow: 4px 12px 47px 0 rgba(0, 0, 0, 0.1);
	transition: all 0.25s ease-in;

	width: 380px;

	${mq[0]} {
		width: unset;
		margin: unset;
	}

	:hover {
		transform: translateY(-3px);
	}

	.cover-image {
		position: relative;
		.cover-pic {
			border-radius: 4px 4px 0 0;
			height: 188px;
			background: #f0f0f0;
		}
	}
	.course-description {
		h3 {
			z-index: 9;
			position: relative;
		}
		.tag {
			line-height: 0;
			padding: 0;
			margin: 0;
			color: #737373;
			font-size: 12px;
			display: flex;
			align-items: center;
		}
		a {
			word-break: break-word;
			color: #474c5f;
			:hover {
				color: #000;
			}
		}
		p {
			color: #737373;
			min-height: 107px;
			font-size: 13px;
			line-height: 1.4rem;
			text-align: justify;
		}
		.redirect {
			display: flex;
			justify-content: space-between;
			align-items: center;

			span {
				a {
					padding: 0 10px;
					:hover {
						color: #000;
					}
				}
			}

			.redirectLink {
				background: none;
				border: 1px solid #118cf0;
				background: none;
				color: #474c5e;
				padding: 0.5rem 1rem;
				display: inline-block;
				border-radius: 0.4rem;
				font-size: 14px;
				text-align: center;

				:hover {
					transform: translateY(-3px);
					background: #118cf0;
					color: #fff;
				}
			}
		}
	}
	.logo {
		position: absolute;
		bottom: -50px;
		right: 20px;
		border-radius: 230px;
		width: 100px;
		border: 5px solid #fff;
		border-radius: 100px;
	}
`;

export const TextMuted = styled.div`
	color: #737373;
	padding-left: 1.2rem;
	font-size: 13px;
`;

export const FooterStyle = styled.footer`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 2rem 0;
	color: #737373;
	img,
	a {
		padding: 0 0.4rem;
	}

	a {
		color: #000;
	}
`;
