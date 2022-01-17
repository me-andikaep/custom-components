import moment from 'moment';
import { useEffect, useState } from 'react';
import buildCalendar from './build';
import CalendarHeader from './header';
import dayStyles, { beforeToday } from './styles';

const CustomCalendar = () => {
	const [calendar, setCalendar] = useState([]);
	const [value, setValue] = useState(moment());

	useEffect(() => {
		setCalendar(buildCalendar(value));
		return () => {};
	}, [value]);

	return (
		<div className='calendar'>
			<CalendarHeader value={value} setValue={setValue} />
			<div className='body'>
				<div className='day-names'>
					{['s', 'm', 't', 'w', 't', 'f', 's'].map((d) => (
						<div className='week'>{d}</div>
					))}
				</div>
				{calendar.map((week, i) => (
					<div key={i}>
						{week.map((day, idx) => (
							<div
								className='day'
								key={idx}
								onClick={() => !beforeToday(day) && setValue(day)}
							>
								<div className={dayStyles(day, value)}>
									{day.format('D').toString()}
								</div>
							</div>
						))}
					</div>
				))}
			</div>

			<div>Calendar Here</div>

			<div>{/* {startDay.format('MM/DD')} - {endDay.format('MM/DD')} */}</div>
		</div>
	);
};

export default CustomCalendar;
