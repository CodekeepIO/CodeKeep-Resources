import React, { useEffect } from 'react';
import Meta from 'libs/Meta';
import CourseData from 'data/index';
import Layout from 'componenets/Layout';
import { useRouter } from 'next/router';

import { Hash, ArrowLeft, Facebook, Twitter } from 'react-feather';
import { CourseFullpageCard, ErrorPage, BreadCrumb, CourseWrapperList, FlexSb } from 'styles';
import CourseCard from 'componenets/ui/CourseCard';
import { isEmpty, getParameterByName } from 'libs/helpers';

const CourseDetails = ({ query }: { query: any }) => {
	const router = useRouter();

	useEffect(() => {
		const url = window.location.href;
		query.post = getParameterByName('post', url);
	}, []);

	console.log(query);

	const courseSlug = query.post;
	const data = CourseData.filter((data) => data.name.toLowerCase().replace(' ', '_') === courseSlug);

	const otherCourses = CourseData.filter((data) => data.name.toLowerCase().replace(' ', '_') !== courseSlug).splice(
		0,
		4
	);

	const URL = `https://resources.codekeep.io/course?post=${courseSlug}`;

	if (!data[0]) {
		return (
			<Layout>
				<ErrorPage>
					<p>Invalid Course URL</p>
					<button onClick={() => router.push('/')}>Go to home</button>
				</ErrorPage>
			</Layout>
		);
	}

	const { name, tags, cover, logo, description, link } = data[0];
	return (
		<Layout>
			<Meta
				title={`${name} Free Course`}
				image={cover}
				description={description}
				keywords={`${name} free courses, ${name} covid offer ,video courses, stay home, skill up,courses,covid19"`}
			/>
			<BreadCrumb onClick={() => router.push('/')}>
				<ArrowLeft size="16" /> Back To HomePage
			</BreadCrumb>
			<CourseFullpageCard>
				<div className="cover-image">
					<img src={cover} className="cover-pic" width="100%" loading="lazy" alt="logo" />
					{logo !== '' && <img src={logo} width="100%" className="logo" loading="lazy" alt="cover" />}
				</div>
				<div className="course-description">
					<h3>
						<a target="_BLANK" rel="noreferrer noopener" href={`${link}?ref=codekeep.io`}>
							{name}
						</a>
					</h3>
					<span className="tag">
						<Hash size="12" />
						{tags[0]}
					</span>

					<p>{description}</p>
					<FlexSb>
						<div className="share">
							Share{' '}
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
						</div>
						<div className="redirect">
							<a
								href={`${link}?ref=codekeep.io`}
								target="_BLANK"
								className="redirectLink"
								rel="noreferrer noopener"
							>
								Visit
							</a>
						</div>
					</FlexSb>
				</div>
			</CourseFullpageCard>

			<h4>Other Courses</h4>
			<CourseWrapperList>
				{otherCourses.map((course) => (
					<CourseCard {...course} key={course.name} />
				))}
			</CourseWrapperList>
		</Layout>
	);
};

CourseDetails.getInitialProps = ({ query }: { query: any }) => {
	return { query };
};

export default CourseDetails;
