import React, { Component } from 'react';
import TeamSelector from '../components/TeamSelector';
import TeamDetail from '../components/TeamDetail';

class TeamContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      teams: [],
      currentTeam: null

    };

    this.handleTeamSelected = this.handleTeamSelected.bind(this);

}

componentDidMount(){
  var url = 'http://api.football-data.org/v1/soccerseasons/';
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.setRequestHeader("X-Auth-Token", "6352d787452d470c96c9d545699b036e");
  request.onload = () => {
    this.setState({teams: JSON.parse(request.responseText)})
    console.log(JSON.parse(request.responseText));
  }
  request.send(null);

};

handleTeamSelected(index){
  const selectedTeam = this.state.teams[index]
  this.setState({currentTeam: selectedTeam})
}

  render(){
  return (
    <div>
      <h1>Champions League 2017/18</h1>
      <TeamSelector
        teams ={this.state.teams}
        onTeamSelected={this.handleTeamSelected}/>
      <TeamDetail
        team={this.state.currentTeam}
      />
    </div>

  );
}

}



















export default TeamContainer;
