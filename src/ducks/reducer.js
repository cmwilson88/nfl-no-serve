const initialState = {
	nfl: 
	[
		{
			division: 'AFC North',
			teams: 
			[
				{
					team: 'BAL',
					name: 'Baltimore Ravens',
					logo: 'bal.png'
				},
				{
					team: 'CIN',
					name: 'Cincinnati Bengals',
					logo: 'cin.gif'
				},
				{
					team: 'CLE',
					name: 'Cleveland Browns',
					logo: 'cle.png'
				},
				{
					team: 'PIT',
					name: 'Pittsburgh Steelers',
					logo: 'pit.png'
				}
			]
		},
		{
			division: 'AFC East',
			teams: 
			[
				{
					team: 'BUF',
					name: 'Buffalo Bills',
					logo: 'buf.png'
				},
				{
					team: 'MIA',
					name: 'Miami Dolphins',
					logo: 'mia.png'
				},
				{
					team: 'NE',
					name: 'New England Patriots',
					logo: 'ne.gif'
				},
				{
					team: 'NYJ',
					name: 'New York Jets',
					logo: 'nyj.png'
				}
			]
		},
		{
			division: 'AFC South',
			teams: 
			[
				{
					team: 'HOU',
					name: 'Houston Texans',
					logo: 'hou.png'
				},
				{
					team: 'IND',
					name: 'Indianapolis Colts',
					logo: 'ind.png'
				},
				{
					team: 'JAX',
					name: 'Jacksonville Jaguars',
					logo: 'jax.png'
				},
				{
					team: 'TEN',
					name: 'Tennessee Titans',
					logo: 'ten.png'
				}
			]
		},
		{
			division: 'AFC West',
			teams: 
			[
				{
					team: 'DEN',
					name: 'Denver Broncos',
					logo: 'den.png'
				},
				{
					team: 'KC',
					name: 'Kansas City Chiefs',
					logo: 'kc.png'
				}, 
				{
					team: 'LAC',
					name: 'Los Angeles Chargers',
					logo: 'lac.png'
				},
				{
					team: 'OAK',
					name: 'Oakland Raiders',
					logo: 'oak.png'
				} 
			]
		},
		{
			division: 'NFC North',
			teams: 
			[
				{
					team: 'CHI',
					name: 'Chicago Bears',
					logo: 'chi.png'
				},
				{
					team: 'DET',
					name: 'Detroit Lions',
					logo: 'det.png'
				},
				{
					team: 'GB',
					name: 'Green Bay Packers',
					logo: 'gb.png'
				},
				{
					team: 'MIN',
					name: 'Minnesota Vikings',
					logo: 'min.png'
				}
			]
		},
		{
			division: 'NFC East',
			teams: 
			[
				{
					team: 'DAL',
					name: 'Dallas Cowboys',
					logo: 'dal.gif'
				},
				{
					team: 'NYG',
					name: 'New York Giants',
					logo: 'nyg.gif'
				},
				{
					team: 'PHI',
					name: 'Philadelphia Eagles',
					logo: 'phi.png'
				},
				{
					team: 'WAS',
					name: 'Washington Redskins',
					logo: 'was.png'
				}

			]
		},
		{
			division: 'NFC South',
			teams: 
			[
				{
					team: 'ATL',
					name: 'Atlanta Falcons',
					logo: 'atl.png'
				},
				{
					team: 'CAR',
					name: 'Carolina Panthers',
					logo: 'car.png'
				},

				{
					team: 'NO',
					name: 'New Orleans Saints',
					logo: 'no.png'
				},
				{
					team: 'TB',
					name: 'Tampa Bay Buccaneers',
					logo: 'tb.png'
				}
			]
		},
		{
			division: 'NFC West',
			teams: 
			[
				{
					team: 'ARI',
					name: 'Arizona Cardinals',
					logo: 'ari.png'
				},
				{
					team: 'LAR',
					name: 'Los Angeles Rams',
					logo: 'lar.png'
				},
				{
					team: 'SEA',
					name: 'Seattle Seahawks',
					logo: 'sea.png'
				},
				{
					team: 'SF',
					name: 'San Francisco 49ers',
					logo: 'sf.png'
				},
			]
		}



	]
}

export default function reducer(state=initialState, action) {
	switch(action.type) {
		default: 
			return state;
	}
}

