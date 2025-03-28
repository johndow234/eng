basic.forever(function () {
    fwdMotors.rightServo.run(100)
    fwdMotors.leftServo.run(100)
    basic.showLeds(`
        . # . # .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
