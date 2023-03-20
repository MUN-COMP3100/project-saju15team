import { strictEqual, fail, deepStrictEqual } from 'assert';
import { searchCourses } from '../ServerFeatures/courseSearch.mjs';
import { getProfDetails } from '../ServerFeatures/profDetail.mjs';
import { login } from '../ServerFeatures/login.mjs';
import { Register } from '../ServerFeatures/Registration.mjs';
import { getSchedule } from '../ServerFeatures/courseSchedule.mjs';


describe('The Shire University: Course Tool - Tests with Mocha', function(){
    describe('Test Server Features', function(){
        //Testing Feature 1: Login
        describe('Login', async function(){ 
            it('Fail 1. GET - Test invalid inputs.', async function(){
                let msg = await login();
                strictEqual(msg, 'Inputs cannot be blank.');                
            });
            it('Fail 2. GET - Incorrect password.', async function(){
                let msg = await login('triddle@hogwarts.ca','avada');
                strictEqual(msg, 'Password does not match.');                
            });
            it('Success 3. GET - Valid email and password.', async function(){
                let msg = await login('triddle@hogwarts.ca','avadaKEDavra');
                strictEqual(msg, 'Login Successful!');                
            });
        });
        //Testing Feature 2: Course Search
        describe('Course Search', async function(){            
            it('Fail 1. Test invalid parameters in the method call', async function(){
                let subject = '';
                let number = 101;
                let msg = await searchCourses(subject,number);
                strictEqual(msg, 'Invalid Parameters!');                
            });
            it('Success 2. GET - Test with subject parameter', async function(){
                let arr = [
                    {
                        _id: '64179c5c5310ab00c15cb9bf',
                        subject: "TST",
                        number: 101,
                        name: "",
                        description: "",
                        credit_hours: "",
                        crn: 90786,
                        section: "A32",
                        enrollment_status: "",
                        type: "",
                        type_code: "",
                        start_time: "",
                        end_time: "",
                        days:"",
                        room:"",
                        building:"",
                        instructors:""
                    }
                  ]
                let subject = 'TST';
                let res1 = await searchCourses(subject);
                deepStrictEqual(res1.data, arr);                
            });
            it('Success 3. GET - Test with subject and number parameter', async function(){
                let arr = [
                    {
                        _id: '64179c5c5310ab00c15cb9bf',
                        subject: "TST",
                        number: 101,
                        name: "",
                        description: "",
                        credit_hours: "",
                        crn: 90786,
                        section: "A32",
                        enrollment_status: "",
                        type: "",
                        type_code: "",
                        start_time: "",
                        end_time: "",
                        days:"",
                        room:"",
                        building:"",
                        instructors:""
                    }
                  ]
                let subject = 'TST';
                let number = 101;
                let res1 = await searchCourses(subject,number);
                deepStrictEqual(res1.data, arr);                
            });
            it('Success 4. GET - Test with crn parameter', async function(){
                let arr = [
                    {
                        _id: '64179c5c5310ab00c15cb9bf',
                        subject: "TST",
                        number: 101,
                        name: "",
                        description: "",
                        credit_hours: "",
                        crn: 90786,
                        section: "A32",
                        enrollment_status: "",
                        type: "",
                        type_code: "",
                        start_time: "",
                        end_time: "",
                        days:"",
                        room:"",
                        building:"",
                        instructors:""
                    }
                  ]
                let crn = 90786;
                let res1 = await searchCourses('','',crn);
                deepStrictEqual(res1.data, arr);                
            });
        }); 
        //Testing Feature 3: Registration
        describe('PRegistration', async function(){ 
            it('Fail 1. Test No parameter(studentId,RegType,crn)', async function(){
                let msg = await Register();
                strictEqual(msg, 'Invalid Parameters!');                
            });
            it('Fail 2. Test invalid parameter - Registration type', async function(){
                let msg = await Register(202333445,'wrong',51248);
                strictEqual(msg, 'Invalid registration type.');                
            });
            it('Success 3. Add Course', async function(){
                let msg = await Register(202333445,'add',51248);
                strictEqual(msg, 'Registration Successful.');                
            });
            it('Success 4. Drop previously added course.', async function(){
                let msg = await Register(202333445,'drop',51248);
                strictEqual(msg, 'Dropped Successfuly.');                
            });
        });
        //Testing Feature 5: Course Schedule
        describe('Course Schedule', async function(){
            it('FAIL 1. Test student id', async function(){
                let studentId = 202333446;
                let msg = await getSchedule(studentId);
                strictEqual(msg, 'Invalid Student Id');                
            });
            it('SUCCESS 2. GET - Student schedule', async function(){
                let studentId = 202333445;
                let schedule = [
                    { subject: 'AAS', number: 300, days: 'TR', time: '14:00 - 15:20' },
                    { subject: 'AAS', number: 100, days: 'F', time: '10:00 - 10:50' }
                  ];
                let res = await getSchedule(studentId);
                deepStrictEqual(res, schedule);                
            });

         });
        //Testing Feature 6: Detail Button for professors
        describe('Professor Detail', async function(){     
            it('Fail 1. GET - Test invalid employee Id', async function(){
                let msg = await getProfDetails(12345);
                strictEqual(msg, 'Not Found!');                
            });
            it('SUCCESS 2. GET - Test valid employee Id', async function(){
                let arr = [
                    'Minerva Mcgonagall',
                    'mmcgonagall@hogwarts.ca',
                    'Education',
                    'WIZ 2001'
                ]
                let res = await getProfDetails(18900611);
                deepStrictEqual(res, arr);                
            });
        });
    });
    
});