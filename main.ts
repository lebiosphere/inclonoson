let A = 0
let choixOld = 0
let choix = 0
let strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
makerbit.connectSerialMp3(DigitalPin.P0, DigitalPin.P14)
basic.forever(function () {
    A = input.rotation(Rotation.Roll)
    if (0 <= A && A < 20) {
        choix = 0
    }
    if (20 <= A && A < 40) {
        choix = 1
    }
    if (40 <= A && A < 60) {
        choix = 2
    }
    if (60 <= A && A < 80) {
        choix = 3
    }
    if (80 <= A && A < 100) {
        choix = 4
    }
    if (100 <= A && A < 120) {
        choix = 5
    }
    if (choix != choixOld) {
        choixOld = choix
        if (choix == 0) {
            makerbit.runMp3Command(Mp3Command.STOP)
            strip.showColor(neopixel.rgb(0, 0, 0))
        } else {
            makerbit.playMp3TrackFromFolder(choix, 1, Mp3Repeat.Forever)
        }
    }
})
