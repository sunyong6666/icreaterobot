//LED模块
namespace Kidzmicrobit {
    //% blockId=LEDR block="Red LED %pin swicth $ledstate "
    //% ledstate.shadow="toggleOnOff"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=220
    //% pin.fieldOptions.columns=2
    //% expandableArgumentMode="toggle"
    //% subcategory="Audio-visual" group="LED"
    export function ledRBrightness(pin: Write_pin, ledstate: boolean): void {
        let myPin; // 直接将 pin 赋值给 myPin

        switch (pin) {
            case 1:
                myPin = DigitalPin.P0;
                break;
            case 2:
                myPin = DigitalPin.P16;
                break;
            case 3:
                myPin = DigitalPin.P1;
                break;
            case 4:
                myPin = DigitalPin.P12;
                break;
            case 5:
                myPin = DigitalPin.P2;
                break;
            case 6:
                myPin = DigitalPin.P8;
                break;
        }
        if (ledstate) {
            pins.digitalWritePin(myPin, 0)
        }
        else {
            pins.digitalWritePin(myPin, 1)
        }
    }



    //% blockId=LEDG block="Green LED %pin switch $ledstate "
    //% ledstate.shadow="toggleOnOff"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=220
    //% pin.fieldOptions.columns=2
    //% expandableArgumentMode="toggle"
    //% subcategory="Audio-visual" group="LED"
    export function ledGBrightness(pin: Write_pin, ledstate: boolean): void {
        let myPin2; // 直接将 pin 赋值给 myPin

        switch (pin) {
            case 1:
                myPin2 = DigitalPin.P0;
                break;
            case 2:
                myPin2 = DigitalPin.P16;
                break;
            case 3:
                myPin2 = DigitalPin.P1;
                break;
            case 4:
                myPin2 = DigitalPin.P12;
                break;
            case 5:
                myPin2 = DigitalPin.P2;
                break;
            case 6:
                myPin2 = DigitalPin.P8;
                break;
        }

        if (ledstate) {
            pins.digitalWritePin(myPin2, 0)
        }
        else {
            pins.digitalWritePin(myPin2, 1)
        }
    }


    //% blockId=LEDB block="Blue LED %pin switch $ledstate "
    //% ledstate.shadow="toggleOnOff"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=220
    //% pin.fieldOptions.columns=2
    //% expandableArgumentMode="toggle"
    //% subcategory="Audio-visual" group="LED"
    export function ledBBrightness(pin: Write_pin, ledstate: boolean): void {
        let myPin3; // 直接将 pin 赋值给 myPin

        switch (pin) {
            case 1:
                myPin3 = DigitalPin.P0;
                break;
            case 2:
                myPin3 = DigitalPin.P16;
                break;
            case 3:
                myPin3 = DigitalPin.P1;
                break;
            case 4:
                myPin3 = DigitalPin.P12;
                break;
            case 5:
                myPin3 = DigitalPin.P2;
                break;
            case 6:
                myPin3 = DigitalPin.P8;
                break;
        }
        if (ledstate) {
            pins.digitalWritePin(myPin3, 0)
        }
        else {
            pins.digitalWritePin(myPin3, 1)
        }
    }


    //% blockId=LEDY block="Yellow LED %pin swicth $ledstate "
    //% ledstate.shadow="toggleOnOff"
    //% pin.fieldEditor="gridpicker"
    //% pin.fieldOptions.width=220
    //% pin.fieldOptions.columns=2
    //% expandableArgumentMode="toggle"
    //% subcategory="Audio-visual" group="LED"
    export function ledYBrightness(pin: Write_pin, ledstate: boolean): void {
        let myPin4; // 直接将 pin 赋值给 myPin

        switch (pin) {
            case 1:
                myPin4 = DigitalPin.P0;
                break;
            case 2:
                myPin4 = DigitalPin.P16;
                break;
            case 3:
                myPin4 = DigitalPin.P1;
                break;
            case 4:
                myPin4 = DigitalPin.P12;
                break;
            case 5:
                myPin4 = DigitalPin.P2;
                break;
            case 6:
                myPin4 = DigitalPin.P8;
                break;
        }

        if (ledstate) {
            pins.digitalWritePin(myPin4, 0)
        }
        else {
            pins.digitalWritePin(myPin4, 1)
        }
    }
}
