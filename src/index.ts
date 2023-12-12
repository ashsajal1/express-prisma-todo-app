import express, {Express} from 'express';

const app:Express = express();
const port = 3000;

// Routes
app.get('/', (req, res) => {
  res.send('Hello, Express with TypeScript!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});