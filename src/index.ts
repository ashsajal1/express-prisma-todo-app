import express, {Express} from 'express';
import prisma from './libs/prisma';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

const app:Express = express();
app.use(bodyParser.json())
const port = 3000;

app.post('/users', async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    res.json(user);
  } catch (error) {
    console.error('Error creating a user:', error);
    res.status(500).json({ error: 'Error creating a user' });
  }
});

// Create a new todo for a user
app.post('/users/:userId/todos', async (req, res) => {
  try {
    const { userId } = req.params;
    const { title, completed } = req.body;

    const todo = await prisma.todo.create({
      data: {
        title,
        completed,
        userId: parseInt(userId),
      },
    });

    res.json(todo);
  } catch (error) {
    console.error('Error creating a todo:', error);
    res.status(500).json({ error: 'Error creating a todo' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});