import { useState } from 'react';

import Meta from 'libs/Meta';
import CourseData from 'data/index';

import Layout from 'componenets/Layout';
import IntroCard from 'componenets/ui/IntroCard';
import CourseCard from 'componenets/ui/CourseCard';
import Search from 'componenets/ui/Search';
import NoResults from 'componenets/ui/NoResults';
import Sidebar from 'componenets/ui/Sidebar';

import { Container, CoursesList, CKLink } from 'styles';

const INITIAL_FILTER = {
	entireWebsite: true,
	specificCourse: true,
	category: null,
};

const applyFilterandSearch = (search, filter, data) => {
	let validationPassed = true;

	if ((filter.entireWebsite !== filter.specificCourse) === true) {
		if (filter.entireWebsite && data.entireWebsite !== true) validationPassed = false;
		if (filter.specificCourse && data.specificCourse !== true) validationPassed = false;
	}

	if (search && !data.name.toLowerCase().includes(search.toLowerCase()) && !data.tags.includes(search.toLowerCase()))
		validationPassed = false;

	if (filter.category && data.category !== filter.category) {
		if (data.category !== 'all') validationPassed = false;
	}

	return validationPassed;
};

const Home = () => {
	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState(INITIAL_FILTER);

	const clearFilter = () => setFilter(INITIAL_FILTER);

	const updateFilter = (name, value = ''): void => {
		if (name === 'category') {
			setFilter({
				...filter,
				category: value,
			});
		} else
			setFilter({
				...filter,
				[name]: filter[name] === 'on' || filter[name] === true ? false : true,
			});
	};

	let results = 0;

	return (
		<Layout>
			<Meta
				title="CodeKeep Free Resources"
				description="#StayHome - Resources to upskill yourself. Curated collection of resources offered for free during
					this COVID-19 crisis."
				keywords="video courses, stay home, skill up,courses,covid19"
			/>

			<IntroCard />
			<CKLink>
				<a href="https://codekeep.io" target="_BLANK" rel="noreferrer noopener">
					CodeKeep - Organize. Discover. Share. Snippets.
				</a>
			</CKLink>
			<Container>
				<Sidebar filter={filter} setFilter={updateFilter} clearFilter={clearFilter} />
				<div className="content">
					<Search search={search} setSearch={setSearch} />

					<CoursesList>
						{CourseData.map((data) => {
							if (applyFilterandSearch(search, filter, data)) {
								results++;
								return <CourseCard {...data} key={data.name} />;
							}
						})}
					</CoursesList>

					{results === 0 && <NoResults />}
				</div>
			</Container>
		</Layout>
	);
};
export default Home;
