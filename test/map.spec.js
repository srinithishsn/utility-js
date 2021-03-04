const map = require('../src/map')
describe( 'Map',()=> {

    const cube = (x) => x*x*x 
    const identity = (x) => x
    it('map([1,2,3], cube) should give [1,8,27]',()=>{
        expect(map([1,2,3] , cube )).toEqual([1,8,27]);
    });
     it('map([1,2,3], identity) should give [1,2,3]',()=>{
        expect(map([1,2,3] , identity )).toEqual([1,2,3]);
    });
    it('map([], cube) should give []',()=>{
        expect(map([] , cube )).toEqual([]);
    }); 
    it('map([a{x : 10}],someObject => someObject.x + 1)',()=>{
        expect(map([{x : 10}],someObject=>someObject.x+1)).toEqual([11]);
    });
})