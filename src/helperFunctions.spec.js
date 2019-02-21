const filterByRegion = require('./helperFunctions')
const playersMock = require('./playersMock')

describe('filtering players by region',()=>{
    it('should return an array',()=>{
        expect(Array.isArray(filterByRegion())).toEqual(true)
    })
    it('should return all the Japanese players if parameter is "jp"',()=>{
        expect(filterByRegion(playersMock).length).toBe(15)
    })
})