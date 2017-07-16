import axios from 'axios'

export function getTeamTopCrimes(team) {
	return axios.get(`http://nflarrest.com/api/v1/team/topCrimes/${team}`)
	.then(res => res.data)
	.catch(err => console.log(err))
}

export function getTeamTopPlayers(team) {
	return axios.get(`http://nflarrest.com/api/v1/team/topPlayers/${team}`)
	.then(res => res.data)
	.catch(err => console.log(err))
}
