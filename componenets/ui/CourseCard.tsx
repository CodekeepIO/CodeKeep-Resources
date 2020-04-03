import React from 'react';
import { CourseCardStyle } from 'styles';

type CourseCardType = {
	name: string;
	cover?: string;
	logo: string;
	description: string;
	link: string;
};

const CourseCard = ({ name, cover, logo, description, link }: CourseCardType) => {
	return (
		<CourseCardStyle>
			<div className="cover-image">
				<img src={cover} className="cover-pic" width="100%" />
				{logo && <img src={logo} width="100%" className="logo" />}
			</div>
			<div className="course-description">
				<h3>
					<a target="_BLANK" rel="noreferrer noopener" href={`${link}?ref=codekeep.io`}>
						{name}
					</a>
				</h3>
				<p>{description}</p>
				<div className="redirect">
					<a href={`${link}?ref=codekeep.io`} target="_BLANK" rel="noreferrer noopener">
						Visit
					</a>
				</div>
			</div>
		</CourseCardStyle>
	);
};

export default CourseCard;
