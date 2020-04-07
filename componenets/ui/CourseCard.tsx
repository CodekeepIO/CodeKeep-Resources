import React from 'react';
import { CourseCardStyle } from 'styles';
import { Hash, ArrowLeft, Facebook, Twitter } from 'react-feather';

type CourseCardType = {
	name: string;
	cover?: string;
	logo: string;
	tags: string[];
	description: string;
	link: string;
};

const CourseCard = ({ name, tags, cover, logo, description, link }: CourseCardType) => {
	const courseSlug = name.toLowerCase().replace(' ', '_');
	const URL = `https://resources.codekeep.io/course?post=${courseSlug}`;

	return (
		<CourseCardStyle>
			<div className="cover-image">
				<img src={cover} className="cover-pic" width="100%" loading="lazy" alt="logo" />
				{logo !== '' && <img src={logo} width="100%" className="logo" loading="lazy" alt="cover" />}
			</div>
			<div className="course-description">
				<span className="tag">
					<Hash size="12" />
					{tags[0]}
				</span>
				<h3>
					<a target="_BLANK" rel="noreferrer noopener" href={`${link}?ref=codekeep.io`}>
						{name}
					</a>
				</h3>
				<p>{description}</p>
				<div className="redirect">
					<span>
						<a
							target="_BLANK"
							href={`http://facebook.com/sharer/sharer.php?u=${URL}`}
							rel="noreferrer noopener"
						>
							<Facebook size={16} />
						</a>
						<a
							target="_BLANK"
							href={`https://twitter.com/intent/tweet?&url=${URL}&hashtags=codekeep`}
							rel="noreferrer noopener"
						>
							<Twitter size={16} />
						</a>
					</span>
					<a
						href={`${link}?ref=codekeep.io`}
						target="_BLANK"
						className="redirectLink"
						rel="noreferrer noopener"
					>
						Visit
					</a>
				</div>
			</div>
		</CourseCardStyle>
	);
};

export default CourseCard;
