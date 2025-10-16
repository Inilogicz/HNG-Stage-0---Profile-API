// index.js
const express = require('express');
const axios = require('axios'); // Import axios

const app = express();
const PORT = process.env.PORT || 3000;


app.get('/me', async (req, res) => {
  try {
    const catFactResponse = await axios.get('https://catfact.ninja/fact', { timeout: 5000 });
    const catFact = catFactResponse.data.fact;

    const userData = {
      email: "inioluwanimi4sure@gmail.com",
      name: "John Inioluwanimi Ajala",
      track: "Backend",         
      stack: "Node.js/Express"       
    };
    const timestamp = new Date().toISOString();

    const jsonResponse = {
      status: "success",
      user: userData,
      timestamp: timestamp,
      fact: catFact
    };
    
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(jsonResponse);

  } catch (error) {
    console.error("Error fetching cat fact:", error.message);

    res.status(500).json({
      status: "error",
      message: "Could not fetch cat fact from the external API.",
      details: error.message
    });
  }
});



app.get('/', (req, res) => {
  res.send('Stage 0 API is running. Go to /me to see your profile.');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});