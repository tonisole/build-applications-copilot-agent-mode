import React, { useEffect, useState } from 'react';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://bug-free-lamp-v6g97g69j2xrwr-8000.app.github.dev/api/leaderboard/')
      .then(response => response.json())
      .then(data => setLeaderboard(data))
      .catch(error => console.error('Error fetching leaderboard:', error));
  }, []);

  return (
    <div className="card shadow p-4">
      <h2 className="card-title text-primary mb-4">Leaderboard</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="table-primary">
            <tr>
              <th>User</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map(entry => (
              <tr key={entry._id}>
                <td>{entry.user && entry.user.username ? entry.user.username : entry.user}</td>
                <td>{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="btn btn-outline-primary mt-3" disabled>Challenge (Coming Soon)</button>
    </div>
  );
}

export default Leaderboard;
