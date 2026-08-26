//声光其他类型的
enum Record_list {
    //% block="machine gun burst"
    rl1 = 1,

    //% block="laser fire"
    rl2 = 2,

    //% block="racing acceleration"
    rl3 = 3,

    //% block="battle start"
    rl4 = 4,

    //% block="countdown"
    rl5 = 5,

    //% block="recorded audio"
    rl6 = 6
}

namespace Kidzmicrobit {

    /////////////////激光模块///////////////////
    //% blockId="laser_controller" block="Laser %laserpin switch %laserState || Laser %intensity"
    //% laserState.shadow="toggleOnOff"
    //% weight=25
    //% laserpin.fieldEditor="gridpicker"
    //% laserpin.fieldOptions.width=220
    //% laserpin.fieldOptions.columns=2
    //% intensity.min=0 intensity.max=1023
    //% expandableArgumentMode="toggle"
    //% subcategory="Audio-visual" group="Laser Module"
    export function laserController(laserpin: Write_pin, laserState: boolean, intensity: number = 1023): void {
        let pin79

        if (laserpin == 1) {
            pin79 = AnalogPin.P0;
        }

        if (laserpin == 2) {
            pin79 = AnalogPin.P16;
        }

        if (laserpin == 3) {
            pin79 = AnalogPin.P1;
        }

        if (laserpin == 4) {
            pin79 = AnalogPin.P12;
        }

        if (laserpin == 5) {
            pin79 = AnalogPin.P2;
        }

        if (laserpin == 6) {
            pin79 = AnalogPin.P8;
        }

        if (laserState) {
            pins.analogSetPeriod(pin79, 1023);
            pins.analogWritePin(pin79, Math.map(intensity, 0, 1023, 0, 1023));
        }else {
            pins.analogWritePin(pin79, 0);
            intensity = 0;
        }
    }

    /////////////////录音模块///////////////////
    //% blockId="record_id" block="Recording Module play %recordID "
    //% magState.shadow="toggleOnOff"
    //% weight=2
    //% recordID.fieldEditor="gridpicker"
    //% recordID.fieldOptions.width=220
    //% recordID.fieldOptions.columns=2
    //% expandableArgumentMode="toggle"
    //% group="Recording Module" subcategory="Audio-visual"
    export function Record_id(recordID: Record_list): void {
        pins.i2cWriteNumber(0x18, recordID, NumberFormat.UInt8BE)
    }
}
