const tail = require('../src/tail');

describe('Tail',() => {

    it('should return 2 and 3',()=>{
        expect(tail([1,2,3])).toEqual([2,3]);
    });

    it('should return empty array',()=>{
        expect(tail([])).toEqual([]);
    });
})