import React from 'react';
import { SearchInput } from 'styles';
import { Search } from 'react-feather';

const SearchBar = ({ search, setSearch }) => {
	return (
		<SearchInput>
			<input type="text" onChange={e => setSearch(e.target.value)} value={search} placeholder="Seach" />{' '}
			<Search size="16" />
		</SearchInput>
	);
};

export default SearchBar;
