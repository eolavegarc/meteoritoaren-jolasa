input.onButtonPressed(Button.A, function () {
    jokalari.move(-1)
})
input.onButtonPressed(Button.B, function () {
    jokalari.move(1)
})
let meteoritoa: game.LedSprite = null
let jokalari: game.LedSprite = null
jokalari = game.createSprite(2, 4)
basic.forever(function () {
    basic.pause(1000)
    meteoritoa = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        meteoritoa.change(LedSpriteProperty.Y, 1)
        basic.pause(200)
    }
    if (meteoritoa.isTouching(jokalari)) {
        game.gameOver()
    }
    if (meteoritoa.isTouchingEdge()) {
        game.setScore(1)
        meteoritoa.delete()
    }
})
