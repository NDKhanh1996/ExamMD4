import { StudentController } from '../student.controller';

import express from "express";
export const router = express.Router();

router.get('/', StudentController.showList);

router.get('/addStudent', StudentController.showAddStudent);
router.post('/addStudent', StudentController.addStudent);

router.get('/addStudent/:id', StudentController.showStudentInfo);

router.get('/edit/:id', StudentController.showEditStudent);
router.post('/edit/:id', StudentController.editStudent);

router.get('/delete/:id', StudentController.delete)