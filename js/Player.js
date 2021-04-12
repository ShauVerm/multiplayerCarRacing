class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank = null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }

  //reading value from the db - database.ref().on()
  getCarsAtEnd(){
    database.ref('carsAtEnd').on("value", (data)=>{
      this.rank = data.val();
      //this.rank = 0(value that carsAtEnd has in firebase)
    })
  }

  //to make it common for all the object of Player class (1,2,3,4)
  // json - information in js is updated in json format { 'key': value}
  static updateCarsAtEnd(rank){
    database.ref('carsAtEnd').update(
      {
        'carsAtEnd': rank
      }
    )
  }
}
