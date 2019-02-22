function filterByRegion(players, region) {
    const place = lookUpRegion(region)
    return players.filter((player)=>{
        return player.teams === place
    })
}

function lookUpRegion(region){
    const regions = {
        'Japan': 'jp',
        'Taiwan': 'zh',
        'Hong Kong': 'hk',
        'South East Asia': 'es'
    }
    return regions[region]
}

const dekkiOrange = '255,125,8'

module.exports = {filterByRegion, dekkiOrange, lookUpRegion}