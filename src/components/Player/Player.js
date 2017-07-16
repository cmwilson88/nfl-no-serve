import React, {Component} from 'react';
import {getPlayerArrests} from '../../services/playerstats';

class Player extends Component {
	constructor(props) {
		super(props);

		this.state = {
			playerDetails: [],
			currentPlayer: props.match.params.playerName
		}
		
	}

	componentDidMount() {
		getPlayerArrests(this.props.match.params.playerName).then(res=> {
			this.setState({
				playerDetails: [...res]
			})
		});
	}
	render() {
		if( this.state.playerDetails[0] === undefined) {
			return <div>Loading...</div>;
		} else if (this.state.playerDetails[0]) {
			const arrests = this.state.playerDetails.map((arrest, i) => {
				return(	
					<div className="arrest_wrapper" key={i}>
						<div className="arrest_first_row">
							<div className="arrest_date">{`Arrest Date: ${arrest.Date}`}</div>
							<div className="arrest_season_state">{`Season State: ${arrest.ArrestSeasonState}`}</div>
						</div>
						<div className="offense">{`Offense: ${arrest.Category} / ${arrest.crime_category}`}</div>
						<div className="arrest_description">{`Description: ${arrest.Description}`}</div>
						<div className="arrest_outcome">{`Outcome: ${arrest.Outcome}`}</div>
					</div>
				)
			
			})


			return (
				<div>
					<div className="general_player_info">
						<h1>{this.state.currentPlayer}</h1>
						<p>{`Position: ${this.state.playerDetails[0].Position_name}`}</p>
						<p>{`Latest Team: ${this.state.playerDetails[0].Team_preffered_name}`}</p>
						<h2>Arrest Record</h2>
						{arrests}
					</div>
				</div>
			) 
		};
	}
}


export default Player