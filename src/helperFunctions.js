function filterByRegion(players, region) {
    return players.filter((player)=>{
        return player.teams === region
    })
}

module.exports = filterByRegion