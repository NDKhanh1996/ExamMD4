"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const mongoose_1 = require("mongoose");
const studentSchema = new mongoose_1.Schema({
    name: String,
    studentCode: String,
    theoryScore: String,
    practiceScore: String,
    describe: String,
    assessment: String,
    StudentClass: String,
});
exports.Student = (0, mongoose_1.model)("Student", studentSchema);
//# sourceMappingURL=student.model.js.map