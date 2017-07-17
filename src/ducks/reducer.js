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
					logo: 'bal.png',
					colorScheme: ['#280353', '#D0B240', '#000', ]
				},
				{
					team: 'CIN',
					name: 'Cincinnati Bengals',
					logo: 'cin.gif',
					colorScheme: ["#FB4F14", "#000"]
				},
				{
					team: 'CLE',
					name: 'Cleveland Browns',
					logo: 'cle.png',
					colorScheme: ['#EB3300', '#301F10']
				},
				{
					team: 'PIT',
					name: 'Pittsburgh Steelers',
					logo: 'pit.png',
					colorScheme: ['#ffb81c', '#101820', '#fff']
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
					logo: 'buf.png',
					colorScheme: ['#C60C30', '#FFF', '#00338d']
				},
				{
					team: 'MIA',
					name: 'Miami Dolphins',
					logo: 'mia.png',
					colorScheme: ['#008D97', '#FFF', '#F5811F']
				},
				{
					team: 'NE',
					name: 'New England Patriots',
					logo: 'ne.gif',
					colorScheme: ['#0C2340', '#A2AAAD', '#c8102E']
				},
				{
					team: 'NYJ',
					name: 'New York Jets',
					logo: 'nyj.png',
					colorScheme: ['#0C371D', '#FFF']
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
					logo: 'hou.png',
					colorScheme: ['#02253A', '#FFF', '#B31B34']
				},
				{
					team: 'IND',
					name: 'Indianapolis Colts',
					logo: 'ind.png',
					colorScheme: ['#003B7B', '#FFF']
				},
				{
					team: 'JAC',
					name: 'Jacksonville Jaguars',
					logo: 'jax.png',
					colorScheme: ['#006778', '#D7A22A', '#000', '#9F792C']
				},
				{
					team: 'TEN',
					name: 'Tennessee Titans',
					logo: 'ten.png',
					colorScheme: ['#648fcc', '#0d254c']
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
					logo: 'den.png',
					colorScheme: ['#FB4F14', '#002244']
				},
				{
					team: 'KC',
					name: 'Kansas City Chiefs',
					logo: 'kc.png',
					colorScheme: ['#B20032', '#F2C800']
				}, 
				{
					team: 'LAC',
					name: 'Los Angeles Chargers',
					logo: 'lac.png',
					colorScheme: ['#0C2340', '#FFB81C', '#0072CE']
				},
				{
					team: 'OAK',
					name: 'Oakland Raiders',
					logo: 'oak.png',
					colorScheme: ['#000', '#C4C8CB']
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
					logo: 'chi.png',
					colorScheme: ['#03202F', '#DD4814']
				},
				{
					team: 'DET',
					name: 'Detroit Lions',
					logo: 'det.png',
					colorScheme: ['#006DB0', '#C5C7CF', '#0000', '#FFF']
				},
				{
					team: 'GB',
					name: 'Green Bay Packers',
					logo: 'gb.png',
					colorScheme: ['#203731', '#FFB612']
				},
				{
					team: 'MIN',
					name: 'Minnesota Vikings',
					logo: 'min.png',
					colorScheme: ['#582C81', '#F0BF00']
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
					logo: 'dal.gif',
					colorScheme: ['#0D254C', '#87909B', '#FFF']
				},
				{
					team: 'NYG',
					name: 'New York Giants',
					logo: 'nyg.gif',
					colorScheme: ['#192F6B', '#FFF', '#CA001A', '#A2AAAD']
				},
				{
					team: 'PHI',
					name: 'Philadelphia Eagles',
					logo: 'phi.png',
					colorScheme: ['#003B48', '#C0C0C0', '#000', '#708090']
				},
				{
					team: 'WAS',
					name: 'Washington NFL Team',
					logo: 'was.png',
					colorScheme: ['#773141', '#ffb612', '#fff']
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
					logo: 'atl.png',
					colorScheme: ['#A6192D', '#FFF', '#000']
				},
				{
					team: 'CAR',
					name: 'Carolina Panthers',
					logo: 'car.png',
					colorScheme: ['#0085CA', '#101820', '#A5ACAF']
				},

				{
					team: 'NO',
					name: 'New Orleans Saints',
					logo: 'no.png',
					colorScheme: ['#D2B887', '#000']
				},
				{
					team: 'TB',
					name: 'Tampa Bay Buccaneers',
					logo: 'tb.png',
					colorScheme: ['#d60a0b','#89765f', '#ff7900' ]
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
					logo: 'ari.png',
					colorScheme: ['#9B2743', '#FFF', '#000']
				},
				{
					team: 'LA',
					name: 'Los Angeles Rams',
					logo: 'lar.png',
					colorScheme: ['#13264B', '#FFF', '#C9AF74']
				},
				{
					team: 'SEA',
					name: 'Seattle Seahawks',
					logo: 'sea.png',
					colorScheme: ['#001433', '#4dff00', '#a5acaf', '#245998']
				},
				{
					team: 'SF',
					name: 'San Francisco 49ers',
					logo: 'sf.png',
					colorScheme: ['#AF132c', '#e6BE8a']
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

