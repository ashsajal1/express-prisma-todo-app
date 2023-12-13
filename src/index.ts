import express, { Express } from "express";
import bodyParser from "body-parser";

import router from "./routers";

const app: Express = express();

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use('/api', router)

app.get('/', (req, res) => {
  res.render('index.ejs')
})

// Start the server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});

