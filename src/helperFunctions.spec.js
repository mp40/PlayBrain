const {filterByRegion, totalLikes} = require('./helperFunctions')
const playersMock = require('./playersMock')

describe('filtering players by team',()=>{
    it('should return all the valid Japanese team members if parameter is "jp"',()=>{
        expect(filterByRegion(playersMock, 'Japan').length).toBe(2)
    })
    it('should return all the all the valid team mebers for "zh"',()=>{
        expect(filterByRegion(playersMock, 'Taiwan').length).toBe(13)
    })
})

describe('calculating percentages of votes',()=>{
    it('should sum all the likes passed in',()=>{
        expect(totalLikes(playersMock)).toBe(1699)
    })
})