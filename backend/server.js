const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const candidates = [
  { name: 'Nikhil', skills: 'React, Node.js', yearsOfExperience: 5 },
  { name: 'kul ', skills: 'JavaScript, Python', yearsOfExperience: 3 },
  { name: 'chandra ', skills: 'Java, Spring Boot', yearsOfExperience: 7 },
  { name: 'Atul ', skills: 'C++, Qt', yearsOfExperience: 2 },
  { name: 'Michael ', skills: 'Management, Sales', yearsOfExperience: 10 },
  { name: 'Pam', skills: 'Design, UI/UX', yearsOfExperience: 4 },
  { name: 'Jim ', skills: 'Marketing, Analytics', yearsOfExperience: 6 },
  { name: 'Bibek ', skills: 'Agriculture, Security', yearsOfExperience: 8 },
  { name: 'Angela ', skills: 'Accounting, Administration', yearsOfExperience: 9 },
  { name: 'Kevin ', skills: 'Finance, Communication', yearsOfExperience: 5 },
];

app.get('/api/candidates', (req, res) => {
  res.json(candidates);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
