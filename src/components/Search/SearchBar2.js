import { useState } from 'react';

const SearchBar2 = () => {
	const [filterIsOpen, setFilterIsOpen] = useState(true);
	return (
		<div className='container-Searchbar2'>
			<div className='container-searchbar'>
				<div className='wrapper-searchbar'>
					<button className='btn-src'></button>
					<input />
				</div>
				<button className='btn-filter'>Hide Filter</button>
				<button className='btn-filter'>filter</button>
			</div>
			{filterIsOpen && <div className='container-adv-filter'></div>}
		</div>
	);
};

export default SearchBar2;
