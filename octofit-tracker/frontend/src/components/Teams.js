import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://bug-free-lamp-v6g97g69j2xrwr-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="card shadow p-4">
      <h2 className="card-title text-primary mb-4">Teams</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-primary">
            <tr>
              <th>Name</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(team => (
              <tr key={team._id}>
                <td>{team.name}</td>
                <td>{team.members && Array.isArray(team.members) ? team.members.map(m => m.username || m).join(', ') : ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn btn-success mt-3" disabled>Create Team (Coming Soon)</button>
    </div>
  );
}

export default Teams;
