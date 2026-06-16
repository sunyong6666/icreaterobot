// 运动其他模块

enum enServo {
    S1 = 0,
    S2,
    S3,
    S4
}

enum enMotors {
    M2 = 10,
    M3 = 12,
    M1 = 8,
    M4 = 14
}

namespace Microbit {

    const PCA9685_ADD = 0x40
    const MODE1 = 0x00
    const PRESCALE = 0xFE
    const LED0_ON_L = 0x06

    let initialized = false


    function i2cwrite(addr: number, reg: number, value: number) {
        let buf6 = pins.createBuffer(2)
        buf6[0] = reg
        buf6[1] = value
        pins.i2cWriteBuffer(addr, buf6)
    }


    function i2cread(addr: number, reg: number) {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
        return val;
    }


    function initPCA9685(): void {
        i2cwrite(PCA9685_ADD, MODE1, 0x00)
        setFreq(50);
        initialized = true
    }

    function setFreq(freq: number): void {
        // Constrain the frequency
        let prescaleval = 25000000;
        prescaleval /= 4096;
        prescaleval /= freq;
        prescaleval -= 1;
        let prescale = prescaleval; //Math.Floor(prescaleval + 0.5);
        let oldmode = i2cread(PCA9685_ADD, MODE1);
        let newmode = (oldmode & 0x7F) | 0x10; // sleep
        i2cwrite(PCA9685_ADD, MODE1, newmode); // go to sleep
        i2cwrite(PCA9685_ADD, PRESCALE, prescale); // set the prescaler
        i2cwrite(PCA9685_ADD, MODE1, oldmode);
        control.waitMicros(5000);
        i2cwrite(PCA9685_ADD, MODE1, oldmode | 0xa1);
    }


    function setPwm(channel: number, on: number, off: number): void {
        if (channel < 0 || channel > 15)
            return;
        if (!initialized) {
            initPCA9685();
        }
        let buf22 = pins.createBuffer(5);
        buf22[0] = LED0_ON_L + 4 * channel;
        buf22[1] = on & 0xff;
        buf22[2] = (on >> 8) & 0xff;
        buf22[3] = off & 0xff;
        buf22[4] = (off >> 8) & 0xff;
        pins.i2cWriteBuffer(PCA9685_ADD, buf22);
    }
    

    /////////////////舵机///////////////////
    //% blockId=SuperBit_Servo4 block="Servo| %num|angle %value"
    //% num.min=1 num.max=4 value.min=0 value.max=300
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=20
    //%  subcategory=Movement
    export function Servo4(num: enServo, value: number): void {
        // 50hz: 20,000 us
        let us = (value * 1800 * 0.6 / 180 + 600); // 0.6 ~ 2.4
        let pwm = us * 4096 / 20000;
        setPwm(num, 0, pwm);
    }

    /////////////////DC电机///////////////////
    //% blockId=SuperBit_MotorRun 
    //% weight=27
    //% index.fieldEditor="gridpicker"
    //% index.fieldOptions.width=220
    //% index.fieldOptions.columns=2
    //% block="DC Motor|%index|speed(-255~255) %speed"
    //% speed.min=-255 speed.max=255
    //% subcategory=Movement
    export function MotorRun(index: enMotors, speed: number): void {
        if (!initialized) {
            initPCA9685()
        }
        speed = speed * 16; // map 255 to 4096
        if (speed >= 4096) {
            speed = 4095
        }

        if (speed <= -4096) {
            speed = -4095
        }

        let a = index
        let b = index + 1

        if (a > 10) {
            if (speed >= 0) {
                setPwm(a, 0, speed)
                setPwm(b, 0, 0)
            } else {
                setPwm(a, 0, 0)
                setPwm(b, 0, -speed)
            }
        } else {
            if (speed >= 0) {
                setPwm(b, 0, speed)
                setPwm(a, 0, 0)
            } else {
                setPwm(b, 0, 0)
                setPwm(a, 0, -speed)
            }
        }
    }
    
    /////////////////风扇///////////////////
    //% blockId=fans block="Fan %fanpin switch $fanstate || speed %speed"
    //% fanstate.shadow="toggleOnOff"
    //% weight=24
    //% fanpin.fieldEditor="gridpicker"
    //% fanpin.fieldOptions.width=220
    //% fanpin.fieldOptions.columns=1
    //% speed.min=0 speed.max=1023
    //% expandableArgumentMode="toggle"
    //% subcategory=Movement
    export function motorFan(fanpin: Read_pin, fanstate: boolean, speed: number = 1023): void {
        let pin3

        if (fanpin == 1) {
            pin3 = AnalogPin.P0;
        }

        if (fanpin == 2) {
            pin3 = AnalogPin.P1;
        }

        if (fanpin == 3) {
            pin3 = AnalogPin.P2;
        }

        if (fanstate) {
            pins.analogSetPeriod(pin3, 1023);
            pins.analogWritePin(pin3, Math.map(speed, 0, 1023, 0, 1023));
        } else {
            pins.analogWritePin(pin3, 0);
            speed = 0;
        }
    }


    /////////////////电磁铁///////////////////
    //% blockId="elecmagnet" block="Electromagnet %elecpin switch %magState || electromagnet %force"
    //% magState.shadow="toggleOnOff"
    //% weight=23
    //% elecpin.fieldEditor="gridpicker"
    //% elecpin.fieldOptions.width=220
    //% elecpin.fieldOptions.columns=2
    //% force.min=0 force.max=1023
    //% expandableArgumentMode="toggle"
    //% subcategory=Movement
    export function elecmagnet(elecpin: Write_pin, magState: boolean, force: number = 1023): void {
        let pin8
        if (elecpin == 1) {
            pin8 = AnalogPin.P0;
        }

        if (elecpin == 2) {
            pin8 = AnalogPin.P16;
        }

        if (elecpin == 3) {
            pin8 = AnalogPin.P1;
        }

        if (elecpin == 4) {
            pin8 = AnalogPin.P12;
        }

        if (elecpin == 5) {
            pin8 = AnalogPin.P2;
        }

        if (elecpin == 6) {
            pin8 = AnalogPin.P8;
        }

        if (magState == true) {
            pins.analogSetPeriod(pin8, 1023)
            pins.analogWritePin(pin8, Math.map(force, 0, 1023, 0, 1023))
        } else {
            pins.analogWritePin(pin8, 0)
            force = 0
        }
    }
}