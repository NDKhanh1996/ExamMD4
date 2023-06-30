import {Schema, model} from 'mongoose';

interface IStudent {
    name: string;
    studentCode: string;
    theoryScore: string;
    practiceScore: string;
    describe : string;
    assessment: string;
    StudentClass: string;
}

const studentSchema = new Schema<IStudent>({
    name: String,
    studentCode: String,
    theoryScore: String,
    practiceScore: String,
    describe: String,
    assessment: String,
    StudentClass: String,
});

export const Student = model<IStudent>("Student", studentSchema);