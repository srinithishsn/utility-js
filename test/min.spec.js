const min = require('../src/min')

describe('min',()=>{

    it('min([1,2,3,4]) should be 1',()=>{
        expect(min([1,2,3,4])).toEqual(1)
    })
})