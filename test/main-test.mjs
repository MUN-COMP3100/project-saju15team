import { strictEqual, fail } from 'assert';
import { searchCourses } from '../ServerFeatures/courseSearch.mjs';


describe('The Shire University: Course Tool - Tests with Mocha', function(){
    describe('Test Server Features', function(){
        describe('Course Search', async function(){            
            it('Fail 1. GET - Test invalid parameters in the method call', async function(){
                let subject = '';
                let number = 532;
                let msg = await searchCourses(subject,number);
                strictEqual(msg, 'Invalid Parameters!');                
            });

        });        
    });
    
});