import React from 'react';
import PieChart from '../../Charts/PieChart';

function TeamTopCrime(props) {
	console.log(props.topCrimes);
	const topCrimes = props.topCrimes.map((item, i) => {
		return (
			<div className="crime" key={i}>
				<div className="crime_category">{item.Category}</div>
				<div className="crime_count">{item.arrest_count}</div>
			</div>
		)
	})
	return (
		<div className="team_section">
			<h2 className="team_section_header">Top Crimes</h2>
			<div className="crime_wrapper">
				{topCrimes}
			</div>
			<div className="pieChart">
				<PieChart data={props.topCrimes} currentTeam={props.currentTeam} />
			</div>
		</div>
	) 
}

export default TeamTopCrime;