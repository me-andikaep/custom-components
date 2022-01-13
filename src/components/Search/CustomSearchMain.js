import { useEffect, useRef, useState } from 'react';

const CustomSearchMain = () => {
	const [isFocus, setIsFocus] = useState(false);
	const [inputExtendLoc, setInputExtendLoc] = useState({
		width: 0,
		height: 0,
	});

	// console.log('isFocus', isFocus);

	const inputRef = useRef(null);

	useEffect(() => {
		if (isFocus === true) {
			setInputExtendLoc({
				width: inputRef?.current?.clientWidth + 32,
				height: inputRef?.current?.clientTop + 5,
			});
		}

		console.log('inputRef?.current?.', inputRef?.current.clientTop);
	}, [inputRef, isFocus]);

	return (
		<div className='container-search-main'>
			<div className='search-main-wrapper'>
				<div className={`${isFocus ? 'focused' : ''} search-main`}>
					<input
						ref={inputRef}
						name='input-main'
						onClick={() => setIsFocus(true)}
						onBlur={() => setIsFocus(false)}
					/>
					<button className='btn-src'></button>
				</div>
			</div>

			{isFocus && (
				<div
					className='extend'
					style={{
						width: `${inputExtendLoc.width}px`,
						top: `${inputExtendLoc.height}px`,
					}}
				>
					<ul>
						<li>tesasdasd</li>
						<li>tesasdasd</li>
						<li>tesasdasd</li>
						<li>tesasdasd</li>
						<li>tesasdasd</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default CustomSearchMain;
