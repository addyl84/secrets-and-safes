input.onButtonPressed(Button.A, function () {
    entry = "" + entry + "a"
})
input.onButtonPressed(Button.AB, function () {
    if (pass == entry) {
        basic.showIcon(IconNames.Yes)
        pins.servoWritePin(AnalogPin.P0, 90)
    } else {
        basic.showIcon(IconNames.No)
    }
    WaitUntilBlocks.waitUntilButtonPressed(Button.AB)
    control.reset()
})
input.onButtonPressed(Button.B, function () {
    entry = "" + entry + "b"
})
let entry = ""
let pass = ""
pass = "aaba"
entry = ""
pins.servoWritePin(AnalogPin.P0, 180)
