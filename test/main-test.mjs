import { strictEqual, fail, deepStrictEqual } from 'assert';
import { searchCourses } from '../ServerFeatures/courseSearch.mjs';


describe('The Shire University: Course Tool - Tests with Mocha', function(){
    describe('Test Server Features', function(){
        //Testing Feature 2: Course Search
        describe('Course Search', async function(){            
            it('Fail 1. GET - Test invalid parameters in the method call', async function(){
                let subject = '';
                let number = 101;
                let msg = await searchCourses(subject,number);
                strictEqual(msg, 'Invalid Parameters!');                
            });
            it('Success 2. GET - Test with subject parameter', async function(){
                let arr = [
                    {
                      _id: '6417538a9d7a08526ea2fb72',
                      subject: 'TST',
                      number: 101,
                      section: 'A32',
                      crn: 90786
                    }
                  ]
                let subject = 'TST';
                let res1 = await searchCourses(subject);
                deepStrictEqual(res1.data, arr);                
            });
            it('Success 3. GET - Test with subject and number parameter', async function(){
                let arr = [
                    {
                      _id: '6417538a9d7a08526ea2fb72',
                      subject: 'TST',
                      number: 101,
                      section: 'A32',
                      crn: 90786
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
                      _id: '6417538a9d7a08526ea2fb72',
                      subject: 'TST',
                      number: 101,
                      section: 'A32',
                      crn: 90786
                    }
                  ]
                let crn = 90786;
                let res1 = await searchCourses('','',crn);
                deepStrictEqual(res1.data, arr);                
            });
            

        });        
    });
    
});