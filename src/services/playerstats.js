import axios from 'axios'

export function getPlayerArrests(player) {
	return axios.get(`http://nflarrest.com/api/v1/player/arrests/${player}`)
	.then(res => res.data)
	.catch(err => console.log(err))
}

