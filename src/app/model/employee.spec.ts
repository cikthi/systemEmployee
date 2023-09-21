import { Employee } from './employee';

describe('Employee',()=> {
    it ('Should create an instance', ()=> {
        expect ( new Employee()).toBeTruthy();
    });
});