# Web Chat App

## 👨‍💻 Tech stack

- React (Functional components, Hooks, Redux)
- Typescript
- Socket<span></span>.io
- Jest
- Express
- Winston
- Heroku & Netlify

## 🧪 Testing

The frontend is deployed on Netlify and the server is deployed at Heroku. 
You can view the live version oft he app @: https://lwears-chat-app.netlify.app/. 
You can also run the app locally by cloning this repo and the [Backend](https://github.com/lwears/webchat-server) repo and following the below instructions

## Client

- TypeScript
- ReactJS
- Material UI

```
$ npm install
$ npm start
```

### Linting
- AirBnb

## Server

- TypeScript
- Express
- NodeJS

## To run

```
$ npm install
$ npm start
```

### Run tests
Unit Testing for UserService API with Jest

```
$ npm test
```

## 🧰 Functionality

### Server

- Sends received messages to all connected clients.
- If a client is silent for more than a certain (configurable) amount of time, it is
  disconnected; a message about the event (e.g. "John was disconnected due to
  inactivity") is sent to all connected clients.
- If a client is disconnected, but not due to inactivity, a different message is sent (e.g.
  "John left the chat, connection lost" instead.)
- Doesn't allow multiple active users with the same nickname.
- Validates data received over the network.
- Terminates gracefully upon receiving SIGINT or SIGTERM signals.
- Logs all activity with Winston.

### Client

- Has two pages - landing page (shown when not connected to the server) and chat
  (shown only when connected to the server).
- Landing page displays feedback like 'Failed to connect. Nickname already taken.', 'Server unavailable.' or 'Disconnected by the server due to inactivity.’ as a pop up.
- Chat page displays messages from the server together with the sender's nickname (but
  no messages from before the user's current session started).
- Displays landing page if it's disconnected from the server.