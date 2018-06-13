import React from 'react';

const TeamDetail = (props) => {

  if(!props.team) return null //GIVE ME A BLANK CANVAS
  return (
    <div>
      <h3>Number of Teams: {props.team.numberOfTeams}</h3>
    </div>
  )
}

export default TeamDetail;
