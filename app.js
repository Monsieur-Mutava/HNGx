const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    // Get query parameters from the request
    const slackName = req.query.slack_name;
    const track = req.query.track;

    // Check if required parameters are present
    if (!slackName || !track) {
        return res.status(400).json({ error: 'slack_name and track are required parameters.' });
    }

    // Get the current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = daysOfWeek[new Date().getDay()];

    // Get the current UTC time within +/-2 minutes
    const now = new Date();
    const utcTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60000)).toISOString();

    // Construct the response object
    const response = {
        slackName,
        currentDay,
        utcTime,
        track,
        githubFileUrl: 'YOUR_GITHUB_REPO_URL/blob/master/PATH_TO_YOUR_FILE',
        githubRepoUrl: 'https://github.com/Monsieur-Mutava/HNGx.git',
        statusCode: 200,
    };

    res.json(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});