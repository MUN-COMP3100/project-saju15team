import { Course } from './course.mjs';
import { getDb } from '../utils/db.mjs';

async function _get_students_collection (){
    let db = await getDb();
    return await db.collection('students');
};

/**
 * The class CaseDetail, with a main constructor and two methods
 * to add more fields retrieved with the third-party APIs
 */

export class Student{
    constructor(first_name, last_name,student_id, email, address, mobile, password, total_credits_received, credits_available, registered_courses = []){
        this.first_name = first_name;
        this.last_name = last_name;
        this.student_id = student_id;
        this.email = email;
        this.address = address;
        this.mobile = mobile;
        this.password = password;
        this.total_credits_received = total_credits_received;
        this.credits_available = credits_available;
        this.registered_courses = registered_courses;
    }
    /**
     * This method will retrieve a Student with the student_id passed
     * as a parameter
     * @param {String} student_id - the student_id of the student to be retrieved
     * @returns {Student} - An object Student with all student's data
     */
    static async findStudentByID(student_id){
        let collection = await _get_students_collection();
        let obj = await collection.find({"student_id": student_id}).toArray(); //_id should be blue
        return obj;
    }
    /**
     * This method will retrieve a Student with the email passed
     * as a parameter
     * @param {String} email - the email of the student to be retrieved
     * @returns {Student} - An object Student with all student's data
     */
      static async findStudentByEmail(email){
        let collection = await _get_students_collection();
        let obj = await collection.find({"email": email}).toArray(); 
        return obj;
      }
    
    
    /**
     * This method will add courses to student object
     * @param {Number} crn - The crn of the course to be added
     * @returns {String} A message if registration was successful or not
     */
    static async addCourse(student_id,crn){
        let collection = await _get_students_collection();
        let courseObj = await Course.get_crn(crn);
        let studentObj = await Student.findStudentByID(student_id);
        let creditsAvailable = studentObj[0].credits_available;
        console.log(courseObj);
        let courseCredit = courseObj[0].credit_hours;
        if (creditsAvailable >= courseCredit){
            let courses = studentObj[0].registered_courses;
            if (courses == "" || courses == null) {
                courses = [];
            }
            courses.push(courseObj[0]);
            let remainingCredits = creditsAvailable - courseCredit;
            let new_vals = {$set: {'registered_courses': courses, 'credits_available': remainingCredits}};
            let obj = await collection.updateOne({'student_id': student_id}, new_vals)
            if (obj.modifiedCount > 0){
                return 'Registration Successful.';
            }else{
                return 'Registration Failed';
            }
        }else {
            return 'You do not have enough credits to register for this course!';
        }    
    }
    /**
     * This method will drop a course with the specified
     * crn.
     * @param {Number} crn - the crn of a course to be dropped
     * @returns {String} A message if the course was dropped or not
     */
    static async drop(student_id,crn){
        let collection = await _get_students_collection();
        let studentObj = await Student.findStudentByID(student_id);
        let courseObj = await Course.get_crn(crn);
        let courseCredit = courseObj[0].credit_hours;
        let studentCredit = studentObj[0].credits_available + courseCredit;
        let courses = studentObj[0].registered_courses;
        let index = -1;
        for(let i = 0; i < courses.length; i++){
            if(courses[i].crn == crn){
                index = i;
                break;
            }
        }
        if (index > -1){
            let newCourses = courses.splice(index,1);
        }
        let new_vals = {$set: {'registered_courses': courses,'credits_available': studentCredit}};
        let obj = await collection.updateOne({'student_id': student_id}, new_vals)
        if (obj.modifiedCount > 0){
            return 'Dropped Successfuly.';
        }else{
            return 'Course not dropped';
        }
    }

    /**
     * This method will return a student's personal info given a student number
     * @param {String} student_id - the student_id of the student
     * @returns {Array} An array containing the student's name, stufentID, email, address and 
     * phone number
     */
    static async getStudentInfo(student_id){
        let collection = await _get_students_collection();
        // console.log(name)
        let obj = await collection.find({"student_id": student_id});
        return [obj.first_name, obj.last_name,obj.student_id, obj.email, obj.address, obj.mobile];

    }

}
