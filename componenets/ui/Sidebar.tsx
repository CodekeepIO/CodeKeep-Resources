import React, { useState } from 'react';
import { Check } from 'react-feather';
import { SidebarStyle, FlexEnd } from 'styles';
import { CourseFilters, CourseCategory } from 'data/filter';

const Sidebar = ({ filter, setFilter, clearFilter }) => {
	const [filtered, setFiltered] = useState(false);

	return (
		<SidebarStyle>
			<div>
				<FlexEnd>
					<h4>Filter By:</h4>
					{filtered && (
						<span className="clear-filter" onClick={clearFilter}>
							Clear Filter
						</span>
					)}
				</FlexEnd>
				<ul>
					{CourseFilters.map((courseFilter) => (
						<li
							onClick={() => {
								setFilter(courseFilter.name);
								setFiltered(true);
							}}
							key={courseFilter.name}
						>
							{courseFilter.label}
							<div className="check-box">
								{filter[courseFilter.name] ? <Check color="#0af" size="13" /> : ' '}
							</div>
						</li>
					))}
				</ul>
			</div>

			<div>
				<h4>Category</h4>
				<ul>
					{CourseCategory.map((courseCategory) => (
						<li
							onClick={() => {
								setFilter('category', courseCategory.toLowerCase());
								setFiltered(true);
							}}
							key={courseCategory}
							className={filter.category === courseCategory.toLowerCase() ? 'active' : ''}
						>
							{courseCategory}
						</li>
					))}
				</ul>
			</div>
		</SidebarStyle>
	);
};

export default Sidebar;
