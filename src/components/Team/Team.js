import React, { Component } from 'react';
import { getTeamTopCrimes, getTeamTopPlayers } from '../../services/teamstats'; 
import {connect} from 'react-redux';
import TeamTopCrime from './TeamTopCrime/TeamTopCrime';
import TeamTopPlayers from './TeamTopPlayers/TeamTopPlayers';


class Team extends Component {
	constructor() {
		super();

		this.state = {
			topCrimes: [],
			topPlayers: []
		}
	}

	componentDidMount() {
		const currentTeam = this.props.match.params.teamName
		getTeamTopCrimes(currentTeam).then(res=> {
			this.setState({
				topCrimes: [...res]
			})
		});
		getTeamTopPlayers(currentTeam).then(res=> {
			this.setState({
				topPlayers: [...res]
			})
		});
	}

	render() {
		const nfl = this.props.nfl
		let matchedTeam = null;
		nfl.forEach(obj => {
			obj.teams.forEach(item => {
				return( item.team === this.props.match.params.teamName 
				? matchedTeam = item 
				: null
				)
			})
		})
		const bgImgStyles = {
        	backgroundImage: `url(./img/${matchedTeam.logo})`
      	}; 
		return (
			<div className="team_page">
				<h1> {matchedTeam.name} </h1>
				<div style={bgImgStyles} className="team_display_image"></div>
				<TeamTopCrime topCrimes={this.state.topCrimes} />
				<TeamTopPlayers team={matchedTeam} topPlayers={this.state.topPlayers} />
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		nfl: state.nfl
	}
}

export default connect(mapStateToProps)(Team);