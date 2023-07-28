const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const port = 3000; // Choose an available port for your server

app.use(bodyParser.json());
app.post('/slack/events', (req, res) => {
  const event = req.body;
  console.log('Received event:', event);

  // Add your logic to handle the event and respond to Slack messages here

  res.sendStatus(200);
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const slackApiUrl = 'https://slack.com/api/chat.postMessage';
const botToken = 'xapp-1-A05JFN4M04S-5652004620064-de14d2753d62be38751908b57318cda8229d6def74d55ae2d39622e476cc6f3f';

// Function to send a message back to Slack
const sendSlackMessage = (channel, text) => {
  axios.post(slackApiUrl, {
    token: botToken,
    channel: channel,
    text: text,
  })
  .then(response => {
    console.log('Message sent:', response.data);
  })
  .catch(error => {
    console.error('Error sending message:', error.message);
  });
};
