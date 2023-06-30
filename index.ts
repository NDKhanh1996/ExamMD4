import bodyParser from "body-parser";
import express from "express";
import path from "path";
import { Database } from "./src/model/data-source";
import { router} from "./src/controllers/routers/router";
const PORT = 8080;
const app = express();

Database.connectDB()
    .then(() => console.log('DB Connected!'))
    .catch(error => console.log('DB connection error:', error.message));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../src/views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(PORT, () => { console.log(`server is running at ${PORT}`) });