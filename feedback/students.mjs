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
    constructor(firstname, lastname,studentID, email, address, mobile, password, creditsReceived, creditsAvail, regCourses = []){
        this.firstname = firstname;
        this.lastname = lastname;
        this.studentID = studentID;
        this.email = email;
        this.address = address;
        this.mobile = mobile;
        this.password = password;
        this.creditsReceived = creditsReceived;
        this.creditsAvail = creditsAvail;
        this.regCourses = regCourses;
    }
    /**
     * This method will retrieve a Student with the studentID passed
     * as a parameter
     * @param {String} studentID - the studentID of the student to be retrieved
     * @returns {Student} - An object Student with all student's data
     */
    static async findStudentByID(studentID){
        let collection = await _get_students_collection();
        // console.log(name)
        let obj = await collection.find({"studentID": studentID}); //_id should be blue
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
      // console.log(name)
      let obj = await collection.find({"email": email}); //_id should be blue
      return obj;
      }
    
    
    /**
     * This method will add courses to student object
     * @param {Number} crn - The crn of the course to be added
     * @returns {String} A message if registration was successful or not
     */
    async addCourse(crn){
    let collection = await _get_students_collection();
    let courseObj = Course.find(crn);
    this.regCourses.push(courseObj);
    let new_vals = {$set: {'regCourses': regCourses}};
    let obj = await collection.updateOne({'studentID': this.studentID}, new_vals)
    if (obj.modifiedCount > 0){
        return 'Registration Successful.';
    }else{
        return 'Registration Error.'
        }        
    }
    /**
     * This method will drop a course with the specified
     * crn.
     * @param {Number} crn - the crn of a course to be dropped
     * @returns {String} A message if the course was dropped or not
     */
    async drop(crn){
        let collection = await _get_students_collection();
        courseObj = Course.find(crn);
        this.regCourses.pop(courseObj);
        let new_vals = {$set: {'regCourses': regCourses}};
        let obj = await collection.updateOne({'studentID': this.studentID},new_vals)
        if (obj.deletedCount > 0){
            return 'Course was dropped successfully.'
        }else{
            return 'Error, course not found.'
        }
    }

     async getSchedule(studentID){
        let collection = await _get_students_collection();
        // console.log(name)
        let obj = await collection.find({"studentID": studentID}).toArray(); //_id should be blue
        return obj.regCourses;

    }
}
