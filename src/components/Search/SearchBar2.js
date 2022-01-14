import { useState } from 'react';
import DropdownSearch from '../dropdown/DropdownSearch';

const SearchBar2 = () => {
	const [filterIsOpen, setFilterIsOpen] = useState(true);
	return (
		<div className='container-Searchbar2'>
			<div className='container-searchbar'>
				<div className='wrapper-searchbar'>
					<button className='btn-src'></button>
					<input />
				</div>
				<button
					className='btn-filter'
					onClick={() => setFilterIsOpen(!filterIsOpen)}
				>
					{filterIsOpen ? 'Hide' : 'Show'} Filter
				</button>
				<button className='btn-filter'>filter</button>
			</div>
			<div className={`${filterIsOpen ? '' : 'hide'} container-adv-filter`}>
				<div style={{ width: 200 }}>
					<DropdownSearch />
				</div>
			</div>
		</div>
	);
};

export default SearchBar2;
