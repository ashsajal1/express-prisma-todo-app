import express, { Express } from "express";
import prisma from "./libs/prisma";
import bodyParser from "body-parser";
import todoRouter from "./routers/todoRouter";

const app: Express = express();

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/api', todoRouter)
app.get('/', (req, res) => {
  res.render('index.ejs')
})

// Start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

