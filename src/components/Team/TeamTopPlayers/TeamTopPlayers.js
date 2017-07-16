import React from 'react';
import {Link} from 'react-router-dom';

export default function TeamTopPlayers(props) {
	console.log(props);
	const topPlayers = props.topPlayers.map((player, i) => {
		return (
			<Link to={`./${props.team.team}/${player.Name}`} key={i}>
				<div className="team_player_item" >
					<div className="player_name">{player.Name}</div>
					<div className="arrest_count">{player.arrest_count}</div>
				</div>
			</Link>
		)
	})
	return (
		<div className="team_section">
			<h2 className="team_section_header">Players</h2>
			<div className="player_wrapper">
				{topPlayers}
			</div>
		</div>
	)
}