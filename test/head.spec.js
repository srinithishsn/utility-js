const head = require('../src/head');
describe('Head', () => {

    it('Should return the first element',()=>{
        expect(head([1,2,3])).toEqual(1);
    });

    it('Should return null',()=>{
        expect(head([])).toBeNull();
    });
})