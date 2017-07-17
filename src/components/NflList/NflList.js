import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

function NflList(props) {
  const nfl = props.nfl.map((division, index) => {
    const teams = division.teams.map((team, index) => {
      const bgImgStyles = {
        backgroundImage: `url(./img/${team.logo})`
      }; 
      return (
        <Link to={`/${team.team}`} key={index}>
          <div  
          className="team_button" 
          style={bgImgStyles}></div>
        </Link>
      )
    })
    return(
      <div key={index}>
        <h3 className="division_title">{division.division}</h3>
        <div className="division_hr"></div>
        <div className='division_teams'>
          {teams}
        </div>
      </div>
    ) 
  })
  return(
    <div className="team_list">
        {nfl}
    </div>
  )
}


function mapStateToProps(state) {
  return {
    nfl: state.nfl
  }
}
export default connect(mapStateToProps)(NflList);



