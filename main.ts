/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Nathan Tesfaye
 * Created on: Jan 2025
 * This program comunicates with another microbit to scroll on phone
*/

const servoNumber1 = robotbit.Servos.S1
radio.setGroup(1)
let stringNumber = 180

// setup
basic.showIcon(IconNames.Happy)

//turns the servo to 0 degrees
    radio.onReceivedString(function(receivedString: string) {
        robotbit.Servo(servoNumber1, 45)
        basic.showIcon(IconNames.Sad)
        basic.clearScreen()
})
//turns the servo to 180 degrees
radio.onReceivedNumber(function(receivedNumber: number) {
    robotbit.Servo(servoNumber1, 0)
    basic.showIcon(IconNames.Sad)
})
