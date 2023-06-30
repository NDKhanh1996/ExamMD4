"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const student_controller_1 = require("../student.controller");
const express_1 = __importDefault(require("express"));
exports.router = express_1.default.Router();
exports.router.get('/', student_controller_1.StudentController.showList);
exports.router.get('/addStudent', student_controller_1.StudentController.showAddStudent);
exports.router.post('/addStudent', student_controller_1.StudentController.addStudent);
exports.router.get('/addStudent/:id', student_controller_1.StudentController.showStudentInfo);
exports.router.get('/edit/:id', student_controller_1.StudentController.showEditStudent);
exports.router.post('/edit/:id', student_controller_1.StudentController.editStudent);
exports.router.get('/delete/:id', student_controller_1.StudentController.delete);
//# sourceMappingURL=router.js.map