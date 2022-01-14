import React, { useEffect, useRef, useState } from 'react';

export default function DropdownSearch() {
	const data = [
		{
			id: 1,
			country: 'United States',
		},
		{
			id: 2,
			country: 'Indonesia',
		},
		{
			id: 3,
			country: 'Japan',
		},
		{
			id: 4,
			country: 'India',
		},
		{
			id: 5,
			country: 'Rusia',
		},
		{
			id: 6,
			country: 'Belgia',
		},
		{
			id: 7,
			country: 'Malaysia',
		},
		{
			id: 8,
			country: 'Philipina',
		},
	];

	const [open, setOpen] = useState(false);
	const [query, setQuery] = useState('');
	const [selected, setSelected] = useState(null);
	const ref = useRef();

	useEffect(() => {
		['click', 'touchend'].forEach((e) => {
			document.addEventListener(e, toggleClose);
		});

		return () =>
			['click', 'touchend'].forEach((e) => {
				document.removeEventListener('click', toggleClose);
			});
	}, []);

	const toggleClose = (e) => {
		setOpen(e && e.target === ref.current);
	};

	function filter(options) {
		return options.filter(
			(option) => option.country.toLowerCase().indexOf(query.toLowerCase()) > -1
		);
	}

	function displayValue() {
		if (query.length >= 0) return query;
		if (selected) return selected;
		return '';
	}

	function selectOption(option) {
		setQuery('');
		setSelected(option.country);
		setOpen(false);
	}

	return (
		<div className='dropdown-search'>
			<div
				className='control'
				// onClick={() => setOpen((prev) => !prev)}
			>
				<div className='selected-value'>
					{/* {selected ? selected : 'select'} */}
					<input
						ref={ref}
						placeholder={selected ? selected : 'select'}
						value={displayValue()}
						onChange={(e) => {
							setQuery(e.target.value);
							// onChange(null)
						}}
						// onClick={() => setOpen((prev) => !prev)}
						onClick={toggleClose}
						// onTouchEnd={}
					/>
				</div>
				<div className={`arrow ${open ? 'open' : null}`}></div>
			</div>
			<div className={`options ${open ? 'open' : null}`}>
				{filter(data).map((item) => (
					<div
						className={`option ${
							selected === item.country ? 'selected' : null
						}`}
						key={item.id}
						onClick={() => {
							selectOption(item);
						}}
					>
						{item.country}
					</div>
				))}
				<div className='option'></div>
			</div>
		</div>
	);
}
