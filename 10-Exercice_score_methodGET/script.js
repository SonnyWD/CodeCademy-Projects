const team = {
    _players : [
     {firstName: 'Pete', lastName: 'Davidson',age: 25},
     {firstName: 'Anna', lastName: 'Maria',age: 18},
     {firstName: 'Tom',lastName: 'Bob',age: 26}
    ],
    _games : [
      {opponent: 'Jaguars', teamPoints: 50, opponentPoints: 47},
      {opponent: 'Barbars', teamPoints: 40, opponentPoints: 67},
      {opponent: 'Wolf', teamPoints: 31, opponentPoints: 20}
    ],
    get players () {
      return this._players;
    },
    get games () {
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge) {
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      }
      this.players.push(player);
    },
   addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    }
    this.games.push(game);
  }
  };
  team.addGame('Titans', 100, 98);
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  console.log(team.games);