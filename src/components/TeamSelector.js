import React from 'react';

const TeamSelector = (props) => {

  const options = props.teams.map((team, index)=> {
    return <option value={index} key={index}>{team.caption}</option>
  })

  function handleChange(event){
    props.onTeamSelected(event.target.value)
  }

  return (
    <select id="team-selector" defaultValue="default" onChange={handleChange}>
        <option disabled value="default">Choose a team...</option>
        {options}
    </select>
  )



}

export default TeamSelector;
