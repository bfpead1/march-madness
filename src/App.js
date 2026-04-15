import './App.css';
import teamsData from './CollegeBasketballTeams.json';

function Heading() {
  return (
    <div className="heading">
      <h1>NCAA Basketball Teams</h1>
      <p>Browse all college basketball teams competing in the NCAA. Find your favorite school, mascot, and location below.</p>
    </div>
  );
}

function TeamCard({ team }) {
  return (
    <div className="team-card">
      <h2>{team.school}</h2>
      <p className="mascot">{team.name}</p>
      <p className="location">{team.city}, {team.state}</p>
    </div>
  );
}

function TeamList({ teams }) {
  return (
    <div className="team-list">
      {teams.map((team) => (
        <TeamCard key={team.tid} team={team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Heading />
      <TeamList teams={teamsData.teams} />
    </div>
  );
}

export default App;
