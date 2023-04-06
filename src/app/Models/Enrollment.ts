import { Course } from "./Course";
import { User } from "./User";

export interface Enrollment{
    enrollmentId:number,
    studentId:number,
    courseId:number,
    enrollmentDate:Date,
    isCreditsModified:boolean,
    course?:Course,
    student?:User
}