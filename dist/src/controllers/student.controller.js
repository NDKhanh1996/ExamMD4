"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const student_model_1 = require("../model/schemas/students/student.model");
class StudentController {
    static async showList(req, res) {
        try {
            const students = await student_model_1.Student.find();
            res.render('StudentList', { students: students });
        }
        catch (error) {
            res.render(error);
        }
    }
    static showAddStudent(req, res) {
        res.render('AddStudent');
    }
    static async showStudentInfo(req, res) {
        const student = await student_model_1.Student.findById(req.params.id);
        console.log(student);
        res.render('StudentInfo', { student: student });
    }
    static addStudent(req, res) {
        const { name, studentCode, theoryScore, practiceScore, describe, assessment, StudentClass } = req.body;
        student_model_1.Student.create({
            name: name,
            studentCode: studentCode,
            theoryScore: theoryScore,
            practiceScore: practiceScore,
            describe: describe,
            assessment: assessment,
            StudentClass: StudentClass
        });
        res.redirect('/');
    }
    static async showEditStudent(req, res) {
        const student = await student_model_1.Student.findById(req.params.id);
        res.render('edit', { student });
    }
    static async editStudent(req, res) {
        let student = await student_model_1.Student.findById(req.params.id);
        const { name, studentCode, theoryScore, practiceScore, describe, assessment, StudentClass } = req.body;
        student.name = name;
        student.studentCode = studentCode;
        student.theoryScore = theoryScore;
        student.practiceScore = practiceScore;
        student.describe = describe;
        student.assessment = assessment;
        student.StudentClass = StudentClass;
        await student.save();
        res.redirect('/');
    }
    static async delete(req, res) {
        await student_model_1.Student.deleteOne({ _id: req.params.id });
        res.redirect('/');
    }
}
exports.StudentController = StudentController;
//# sourceMappingURL=student.controller.js.map