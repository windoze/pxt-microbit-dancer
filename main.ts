let noise = 0
let angle = 90
powerbrick.Servo(powerbrick.Servos.S5, angle)
powerbrick.Servo(powerbrick.Servos.S6, angle)
powerbrick.Servo(powerbrick.Servos.S7, angle)
powerbrick.Servo(powerbrick.Servos.S8, angle)
basic.showLeds(`
    . # . # .
    # . # . #
    # . . . #
    . # . # .
    . . # . .
    `)
powerbrick.Servo(powerbrick.Servos.S5, 0)
powerbrick.Servo(powerbrick.Servos.S6, 0)
powerbrick.Servo(powerbrick.Servos.S7, 0)
powerbrick.Servo(powerbrick.Servos.S8, 0)
basic.forever(function () {
    noise = powerbrick.SoundSensor(powerbrick.PortsA.PORT1)
    serial.writeLine("" + (noise))
    angle = randint(90, 180)
    if (noise > 100) {
        if (Math.randomBoolean()) {
            powerbrick.Servo(powerbrick.Servos.S5, angle)
        }
        if (Math.randomBoolean()) {
            powerbrick.Servo(powerbrick.Servos.S6, angle)
        }
        if (Math.randomBoolean()) {
            powerbrick.Servo(powerbrick.Servos.S7, angle)
        }
        if (Math.randomBoolean()) {
            powerbrick.Servo(powerbrick.Servos.S8, angle)
        }
        basic.showLeds(`
            . . . . .
            . # . # .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.pause(200)
        basic.showLeds(`
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            `)
        powerbrick.Servo(powerbrick.Servos.S5, 0)
        powerbrick.Servo(powerbrick.Servos.S6, 0)
        powerbrick.Servo(powerbrick.Servos.S7, 0)
        powerbrick.Servo(powerbrick.Servos.S8, 0)
    }
    basic.pause(200)
})
