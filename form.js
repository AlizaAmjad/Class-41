class Form{
    constructor() {
        this.title = createElement("h1")
        this.input=createInput("Name")
        this.button = createButton("Play")
        this.greeting = createElement("h2")
        this.reset = createButton("reset")
    }

    display() {
        this.title.html("Car Racing Game")
        this.title.position(width/2-70,0)
        this.reset.position(width-100,20)

        this.input.position(width/2-30,height/2-50)
        
        this.button.position(width/2+40,height/2)
        this.button.mousePressed(()=>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount+=1
            player.index=playerCount
            player.updateCount(playerCount)
            player.updateInfo()
            this.greeting.html("Welcome "+player.name)
            this.greeting.position(width/2-30,height/2-50)
        })

        this.reset.mousePressed(()=>{
            game.updateState(0)
            player.updateCount(0)
            Player.updateCarsAtEnd(0)
            location.reload()
        })
    }

    hidden() {
        this.title.hide()
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
}