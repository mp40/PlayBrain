const {filterByRegion, totalLikes, mapPercentage} = require('./helperFunctions')
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
    it('should map a percentage to each player',()=>{
        const playerList = [
            {'likes': 100},
            {'likes': 50},
            {'likes': 50}
        ]
        expect(mapPercentage(200, playerList)[0]['percent']).toEqual(50)
    })
})