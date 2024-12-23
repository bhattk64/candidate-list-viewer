import React, { useState, useEffect } from 'react';

const App = () => {
  const [candidates, setCandidates] = useState([]);
  const [search, setSearch] = useState('');
  const [sortDesc, setSortDesc] = useState(false);

  // Fetch data from API
  useEffect(() => {
    fetch('http://localhost:5000/api/candidates') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch candidates');
        }
        return response.json();
      })
      .then((data) => setCandidates(data))
      .catch((error) => console.error('Error fetching candidates:', error));
  }, []);

  // Filter and sort candidates
  const filteredCandidates = candidates.filter((candidate) =>
    candidate.name.toLowerCase().includes(search.toLowerCase()) ||
    candidate.skills.toLowerCase().includes(search.toLowerCase())
  );

  const sortedCandidates = [...filteredCandidates].sort((a, b) =>
    sortDesc ? b.yearsOfExperience - a.yearsOfExperience : a.yearsOfExperience - b.yearsOfExperience
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Candidate List Viewer</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Search by Name or Skills"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button onClick={() => setSortDesc(!sortDesc)}>
          Sort by Experience ({sortDesc ? 'Descending' : 'Ascending'})
        </button>
      </div>
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skills</th>
            <th>Years of Experience</th>
          </tr>
        </thead>
        <tbody>
          {sortedCandidates.map((candidate, index) => (
            <tr key={index}>
              <td>{candidate.name}</td>
              <td>{candidate.skills}</td>
              <td>{candidate.yearsOfExperience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
