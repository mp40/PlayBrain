const filterByRegion = require('./helperFunctions')

describe('filtering players by region',()=>{
    it('should return an array',()=>{
        expect(Array.isArray(filterByRegion())).toEqual(true)
    })
})