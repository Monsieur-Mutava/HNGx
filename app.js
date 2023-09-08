const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    // Get query parameters from the request
    const slack_name = req.query.slack_name;
    const track = req.query.track;

    // Check if required parameters are present
    if (!slack_name || !track) {
        return res.status(400).json({ error: 'slack_name and track are required parameters.' });
    }

    // Get the current day of the week
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const current_day = daysOfWeek[new Date().getDay()];

    // Get the current UTC time within +/-2 minutes
    const now = new Date();
    const utc_time = const utc_time = now.toISOString().replace(/\.\d{3}Z$/, 'Z');

    // Construct the response object
    const response = {
        slack_name,
        current_day,
        utc_time,
        track,
        github_file_url: 'https://github.com/Monsieur-Mutava/HNGx/blob/main/app.js',
        github_repo_url: 'https://github.com/Monsieur-Mutava/HNGx.git',
        status_code: 200,
    };

    res.json(response);
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
