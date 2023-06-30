"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const data_source_1 = require("./src/model/data-source");
const router_1 = require("./src/controllers/routers/router");
const PORT = 8080;
const app = (0, express_1.default)();
data_source_1.Database.connectDB()
    .then(() => console.log('DB Connected!'))
    .catch(error => console.log('DB connection error:', error.message));
app.set('view engine', 'ejs');
app.set('views', path_1.default.join(__dirname, '../src/views'));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(router_1.router);
app.listen(PORT, () => { console.log(`server is running at ${PORT}`); });
//# sourceMappingURL=index.js.map