import { error } from "console";
import { Student } from "../model/schemas/students/student.model";

export class StudentController {
    static async showList(req: any, res: any) {
        try {
            const students = await Student.find();
            res.render('StudentList', { students: students });
        } catch (error) {
            res.render(error);
        }
    }
    static showAddStudent(req: any, res: any) {
        res.render('AddStudent');
    }
    static async showStudentInfo(req: any, res: any) {
        const student = await Student.findById(req.params.id);
        console.log(student);

        res.render('StudentInfo', { student: student });
    }
    static addStudent(req: any, res: any) {
        const { name, studentCode, theoryScore, practiceScore, describe, assessment, StudentClass } = req.body;
        Student.create({
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
    static async showEditStudent(req: any, res: any) {
        const student = await Student.findById(req.params.id);
        res.render('edit', { student });
    }
    static async editStudent(req: any, res: any) {
        let student = await Student.findById(req.params.id);
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
    static async delete (req: any, res: any){
         await Student.deleteOne({ _id: req.params.id })
        res.redirect('/');
    }
}