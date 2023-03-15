import { getDb } from '../utils/db.mjs';

async function _get_professors_collection (){
    let db = await getDb();
    return await db.collection('professors');
};

/**
 * The class CaseDetail, with a main constructor and two methods
 * to add more fields retrieved with the third-party APIs
 */

export class Professor{
    constructor(firstname, lastname,employeeId, department, office, email){
        this.firstname = firstname;
        this.lastname = lastname;
        this.employeeId = employeeId;
        this.department = department;
        this.office = office;
        this.email = email;
    }


}
