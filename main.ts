
enum Write_pin {
    //% block="P0"
    w0 = 1,

    //% block="P16"
    w1 = 2,

    //% block="P1"
    w2 = 3,

    //% block="P12"
    w3 = 4,

    //% block="P2"
    w4 = 5,

    //% block="P8"
    w5 = 6
}

enum Read_pin {
    //% block="P0"
    r0 = 1,

    //% block="P1"
    r1 = 2,

    //% block="P2"
    r2 = 3
}

enum Ultrasonic_pin {
    //% block="(P13,P0)"
    u1 = 13,

    //% block="(P14,P1)"
    u3 = 114,

    //% block="(P9,P12)"
    u4 = 129,

    //% block="(P15,P2)"
    u5 = 215
}


enum PingUnit {
    //% block="centimeters"
    Centimeters,

    //% block="microseconds"
    MicroSeconds,

    //% block="inches"
    Inches
}


enum rocket {
    //% block="X"
    x = 1,

    //% block="Y"
    y = 2
}

enum rock {
    //% block="up"
    orient1 = 2,

    //% block="down"
    orient2 = 1,

    //% block="left"
    orient3 = 4,

    //% block="right"
    orient4 = 3
}

//% color="#272bcf"
//% icon="\uf2db"
namespace Microbit {

    //% blockId=buttonState
    //% weight=27
    //% buttonpin.fieldEditor="gridpicker"
    //% buttonpin.fieldOptions.width=220
    //% buttonpin.fieldOptions.columns=2
    //% block="Button Sensor %buttonpin"
    //% subcategory=Sensor 
    export function buttonState(buttonpin: Write_pin): number {
        let pin16
        if (buttonpin == 1) {
            pin16 = DigitalPin.P0;
        }

        if (buttonpin == 2) {
            pin16 = DigitalPin.P16;
        }

        if (buttonpin == 3) {
            pin16 = DigitalPin.P1;
        }

        if (buttonpin == 4) {
            pin16 = DigitalPin.P12;
        }

        if (buttonpin == 5) {
            pin16 = DigitalPin.P2;
        }

        if (buttonpin == 6) {
            pin16 = DigitalPin.P8;
        }

        return pins.digitalReadPin(pin16);
    }


    //% blockId=hState
    //% weight=27
    //% hallpin.fieldEditor="gridpicker"
    //% hallpin.fieldOptions.width=220
    //% hallpin.fieldOptions.columns=1
    //% block="Hall Sensor %hallpin"
    //% subcategory=Sensor
    export function hState(hallpin: Read_pin): number {
        let pin18
        if (hallpin == 1) {
            pin18 = AnalogPin.P0;
        }

        if (hallpin == 2) {
            pin18 = AnalogPin.P1;
        }

        if (hallpin == 3) {
            pin18 = AnalogPin.P2;
        }

        if (pins.analogReadPin(pin18) < 512)
            return (0);
        else
            return (1);
    }

    //% blockId=farState
    //% weight=38
    //% farStatepin.fieldEditor="gridpicker"
    //% farStatepin.fieldOptions.width=220
    //% farStatepin.fieldOptions.columns=2
    //% block="Long-range Photoelectric Sensor %farStatepin"
    //% subcategory=Sensor
    export function farState(farStatepin: Write_pin): number {
        let pin17
        if (farStatepin == 1) {
            pin17 = DigitalPin.P0;
        }

        if (farStatepin == 2) {
            pin17 = DigitalPin.P16;
        }

        if (farStatepin == 3) {
            pin17 = DigitalPin.P1;
        }

        if (farStatepin == 4) {
            pin17 = DigitalPin.P12;
        }

        if (farStatepin == 5) {
            pin17 = DigitalPin.P2;
        }

        if (farStatepin == 6) {
            pin17 = DigitalPin.P8;
        }

        return pins.digitalReadPin(pin17);
    }



    //% blockId=potentiometerRead
    //% weight=37
    //% potentiometerpin.fieldEditor="gridpicker"
    //% potentiometerpin.fieldOptions.width=220
    //% potentiometerpin.fieldOptions.columns=1
    //% block="Potentiometer %potentiometerpin"
    //% subcategory=Sensor
    export function potentiometerRead(potentiometerpin: Read_pin): number {
        let pin15
        if (potentiometerpin == 1) {
            pin15 = AnalogPin.P0;
        }

        if (potentiometerpin == 2) {
            pin15 = AnalogPin.P1;
        }

        if (potentiometerpin == 3) {
            pin15 = AnalogPin.P2;
        }
        return pins.analogReadPin(pin15);
    }



    //% blockId="ReadGrayLevel" block="Grayscale Sensor %graylevelpin"
    //% weight=36
    //% graylevelpin.fieldEditor="gridpicker"
    //% graylevelpin.fieldOptions.width=220
    //% graylevelpin.fieldOptions.columns=1
    //% subcategory=Sensor
    export function ReadGrayLevel(graylevelpin: Read_pin): number {
        let voltage7 = 0;
        let grayLevel = 0;
        let pin13
        if (graylevelpin == 1) {
            pin13 = AnalogPin.P0;
        }

        if (graylevelpin == 2) {
            pin13 = AnalogPin.P1;
        }

        if (graylevelpin == 3) {
            pin13 = AnalogPin.P2;
        }

        voltage7 = pins.map(
            pins.analogReadPin(pin13),
            0,
            1023,
            80,
            1023
        );
        grayLevel = voltage7;
        return Math.round(grayLevel);
    }


    //% blockId="readlightintensity" block="Photosensitive Sensor %lightintensitypin"
    //% weight=35
    //% lightintensitypin.fieldEditor="gridpicker"
    //% lightintensitypin.fieldOptions.width=220
    //% lightintensitypin.fieldOptions.columns=1
    //% subcategory=Sensor
    export function ReadLightIntensity(lightintensitypin: Read_pin): number {
        let voltage2 = 0;
        let lightintensity = 0;
        let pin2
        if (lightintensitypin == 1) {
            pin2 = AnalogPin.P0;
        }

        if (lightintensitypin == 2) {
            pin2 = AnalogPin.P1;
        }

        if (lightintensitypin == 3) {
            pin2 = AnalogPin.P2;
        }

        voltage2 = pins.map(
            pins.analogReadPin(pin2),
            0,
            1023,
            0,
            1023
        );

        lightintensity = voltage2;
        return Math.round(1023 - lightintensity);
    }


    //% blockId="Readflame" block="Flame Sensor %flamepin"
    //% weight=34
    //% flamepin.fieldEditor="gridpicker"
    //% flamepin.fieldOptions.width=220
    //% flamepin.fieldOptions.columns=1
    //% subcategory=Sensor
    export function Readflame(flamepin: Read_pin): number {
        let voltage6 = 0;
        let flame = 0;
        let pin12
        if (flamepin == 1) {
            pin12 = AnalogPin.P0;
        }

        if (flamepin == 2) {
            pin12 = AnalogPin.P1;
        }

        if (flamepin == 3) {
            pin12 = AnalogPin.P2;
        }
        voltage6 = pins.map(
            pins.analogReadPin(pin12),
            0,
            1023,
            0,
            1023
        );

        flame = voltage6;
        return Math.round(1023 - flame);
    }


    //% blockId="octopus_ReadWaterLevel" block="Water Level Sensor %waterlevelpin"
    //% weight=33
    //% waterlevelpin.fieldEditor="gridpicker"
    //% waterlevelpin.fieldOptions.width=220
    //% waterlevelpin.fieldOptions.columns=1
    //% subcategory=Sensor
    export function ReadWaterLevel(waterlevelpin: Read_pin): number {
        let voltage4 = 0;
        let waterLevel = 0;
        let pin10
        if (waterlevelpin == 1) {
            pin10 = AnalogPin.P0;
        }

        if (waterlevelpin == 2) {
            pin10 = AnalogPin.P1;
        }

        if (waterlevelpin == 3) {
            pin10 = AnalogPin.P2;
        }

        voltage4 = pins.analogReadPin(pin10);
        if (voltage4 > 620) { waterLevel = 100; }
        else if (voltage4 > 618) { waterLevel = 98; }
        else if (voltage4 > 617) { waterLevel = 96; }
        else if (voltage4 > 616) { waterLevel = 94; }
        else if (voltage4 > 614) { waterLevel = 92; }
        else if (voltage4 > 612) { waterLevel = 90; }
        else if (voltage4 > 610) { waterLevel = 88; }
        else if (voltage4 > 609) { waterLevel = 86; }
        else if (voltage4 > 607) { waterLevel = 85; }
        else if (voltage4 > 606) { waterLevel = 83; }
        else if (voltage4 > 605) { waterLevel = 81; }
        else if (voltage4 > 604) { waterLevel = 80; }
        else if (voltage4 > 603) { waterLevel = 78; }
        else if (voltage4 > 602) { waterLevel = 77; }
        else if (voltage4 > 600) { waterLevel = 75; }
        else if (voltage4 > 598) { waterLevel = 73; }
        else if (voltage4 > 596) { waterLevel = 72; }
        else if (voltage4 > 594) { waterLevel = 70; }
        else if (voltage4 > 592) { waterLevel = 68; }
        else if (voltage4 > 590) { waterLevel = 65; }
        else if (voltage4 > 588) { waterLevel = 63; }
        else if (voltage4 > 586) { waterLevel = 62; }
        else if (voltage4 > 583) { waterLevel = 60; }
        else if (voltage4 > 580) { waterLevel = 58; }
        else if (voltage4 > 575) { waterLevel = 56; }
        else if (voltage4 > 574) { waterLevel = 55; }
        else if (voltage4 > 573) { waterLevel = 54; }
        else if (voltage4 > 572) { waterLevel = 53; }
        else if (voltage4 > 570) { waterLevel = 52; }
        else if (voltage4 > 568) { waterLevel = 51; }
        else if (voltage4 > 566) { waterLevel = 50; }
        else if (voltage4 > 563) { waterLevel = 49; }
        else if (voltage4 > 560) { waterLevel = 48; }
        else if (voltage4 > 557) { waterLevel = 47; }
        else if (voltage4 > 554) { waterLevel = 46; }
        else if (voltage4 > 551) { waterLevel = 45; }
        else if (voltage4 > 548) { waterLevel = 44; }
        else if (voltage4 > 545) { waterLevel = 43; }
        else if (voltage4 > 542) { waterLevel = 42; }
        else if (voltage4 > 539) { waterLevel = 41; }
        else if (voltage4 > 536) { waterLevel = 40; }
        else if (voltage4 > 533) { waterLevel = 39; }
        else if (voltage4 > 530) { waterLevel = 38; }
        else if (voltage4 > 527) { waterLevel = 37; }
        else if (voltage4 > 523) { waterLevel = 36; }
        else if (voltage4 > 516) { waterLevel = 35; }
        else if (voltage4 > 510) { waterLevel = 34; }
        else if (voltage4 > 506) { waterLevel = 33; }
        else if (voltage4 > 500) { waterLevel = 32; }
        else if (voltage4 > 497) { waterLevel = 31; }
        else if (voltage4 > 494) { waterLevel = 30; }
        else if (voltage4 > 481) { waterLevel = 29; }
        else if (voltage4 > 478) { waterLevel = 28; }
        else if (voltage4 > 475) { waterLevel = 27; }
        else if (voltage4 > 472) { waterLevel = 26; }
        else if (voltage4 > 469) { waterLevel = 25; }
        else if (voltage4 > 466) { waterLevel = 24; }
        else if (voltage4 > 463) { waterLevel = 23; }
        else if (voltage4 > 460) { waterLevel = 22; }
        else if (voltage4 > 457) { waterLevel = 21; }
        else if (voltage4 > 454) { waterLevel = 19; }
        else if (voltage4 > 451) { waterLevel = 18; }
        else if (voltage4 > 448) { waterLevel = 17; }
        else if (voltage4 > 445) { waterLevel = 16; }
        else if (voltage4 > 442) { waterLevel = 15; }
        else if (voltage4 > 439) { waterLevel = 14; }
        else if (voltage4 > 436) { waterLevel = 13; }
        else if (voltage4 > 433) { waterLevel = 12; }
        else if (voltage4 > 430) { waterLevel = 11; }
        else if (voltage4 > 427) { waterLevel = 10; }
        else if (voltage4 > 424) { waterLevel = 9; }
        else if (voltage4 > 421) { waterLevel = 8; }
        else if (voltage4 > 418) { waterLevel = 7; }
        else if (voltage4 > 415) { waterLevel = 6; }
        else if (voltage4 > 412) { waterLevel = 5; }
        else if (voltage4 > 409) { waterLevel = 4; }
        else if (voltage4 > 406) { waterLevel = 3; }
        else if (voltage4 > 403) { waterLevel = 2; }
        else if (voltage4 > 400) { waterLevel = 1; }
        else { waterLevel = 0; }
        return Math.round(waterLevel);
    }



    //% blockId="ReadGasConcentration" block="MQ-2 Gas Sensor %gasconcentrationpin"
    //% weight=32
    //% gasconcentrationpin.fieldEditor="gridpicker"
    //% gasconcentrationpin.fieldOptions.width=220
    //% gasconcentrationpin.fieldOptions.columns=1
    //% subcategory=Sensor
    export function ReadGasConcentration(gasconcentrationpin: Read_pin): number {
        let voltage5 = 0;
        let gasConcentration = 0;
        let pin11
        if (gasconcentrationpin == 1) {
            pin11 = AnalogPin.P0;
        }

        if (gasconcentrationpin == 2) {
            pin11 = AnalogPin.P1;
        }

        if (gasconcentrationpin == 3) {
            pin11 = AnalogPin.P2;
        }

        voltage5 = pins.map(
            pins.analogReadPin(pin11),
            0,
            1023,
            0,
            1023
        );
        gasConcentration = voltage5;
        return Math.round(gasConcentration);
    }


    //% blockId="readsoilmoisture" block="Soil moisture Sensor %soilhumiditypin"
    //% weight=31
    //% soilmoisturepin.fieldEditor="gridpicker"
    //% soilmoisturepin.fieldOptions.width=220
    //% soilmoisturepin.fieldOptions.columns=1
    //% subcategory=Sensor
    export function ReadSoilHumidity(soilmoisturepin: Read_pin): number {
        let voltage = 0;
        let soilmoisture = 0;
        let pin
        if (soilmoisturepin == 1) {
            pin = AnalogPin.P0;
        }

        if (soilmoisturepin == 2) {
            pin = AnalogPin.P1;
        }

        if (soilmoisturepin == 3) {
            pin = AnalogPin.P2;
        }

        voltage = pins.map(
            pins.analogReadPin(pin),
            0,
            1023,
            0,
            1023
        );
        soilmoisture = voltage;
        return Math.round(soilmoisture);
    }



    //% blockId="readWaterTemp" block="Temperature Sensor %waterproofpin"
    //% weight=30
    //% waterproofpin.fieldEditor="gridpicker"
    //% waterproofpin.fieldOptions.width=220
    //% waterproofpin.fieldOptions.columns=1
    //% subcategory=Sensor
    export function readWaterTemp(waterproofpin: Read_pin): number {
        let voltage22 = 0;
        let waterProofTemp = 0;
        let pin14

        if (waterproofpin == 1) {
            pin14 = AnalogPin.P0;
        }

        if (waterproofpin == 2) {
            pin14 = AnalogPin.P1;
        }

        if (waterproofpin == 3) {
            pin14 = AnalogPin.P2;
        }

        voltage22 = pins.analogReadPin(pin14);//%获得原始值
        if (voltage22 > 1001) { waterProofTemp = 100; }
        else if (voltage22 > 1000) { waterProofTemp = 98; }
        else if (voltage22 > 999) { waterProofTemp = 97; }
        else if (voltage22 > 998) { waterProofTemp = 96; }
        else if (voltage22 > 997) { waterProofTemp = 95; }
        else if (voltage22 > 996) { waterProofTemp = 93; }
        else if (voltage22 > 995) { waterProofTemp = 92; }
        else if (voltage22 > 994) { waterProofTemp = 91; }
        else if (voltage22 > 993) { waterProofTemp = 90; }
        else if (voltage22 > 992) { waterProofTemp = 89; }
        else if (voltage22 > 991) { waterProofTemp = 88; }
        else if (voltage22 > 990) { waterProofTemp = 87; }
        else if (voltage22 > 989) { waterProofTemp = 86; }
        else if (voltage22 > 988) { waterProofTemp = 85; }
        else if (voltage22 > 987) { waterProofTemp = 84; }
        else if (voltage22 > 986) { waterProofTemp = 83; }
        else if (voltage22 > 985) { waterProofTemp = 82; }
        else if (voltage22 > 984) { waterProofTemp = 81; }
        else if (voltage22 > 982) { waterProofTemp = 80; }
        else if (voltage22 > 981) { waterProofTemp = 79; }
        else if (voltage22 > 980) { waterProofTemp = 78; }
        else if (voltage22 > 978) { waterProofTemp = 77; }
        else if (voltage22 > 977) { waterProofTemp = 76; }
        else if (voltage22 > 975) { waterProofTemp = 75; }
        else if (voltage22 > 974) { waterProofTemp = 74; }
        else if (voltage22 > 972) { waterProofTemp = 73; }
        else if (voltage22 > 971) { waterProofTemp = 72; }
        else if (voltage22 > 969) { waterProofTemp = 71; }
        else if (voltage22 > 967) { waterProofTemp = 70; }
        else if (voltage22 > 965) { waterProofTemp = 69; }
        else if (voltage22 > 963) { waterProofTemp = 68; }
        else if (voltage22 > 961) { waterProofTemp = 67; }
        else if (voltage22 > 959) { waterProofTemp = 66; }
        else if (voltage22 > 957) { waterProofTemp = 65; }
        else if (voltage22 > 955) { waterProofTemp = 64; }
        else if (voltage22 > 953) { waterProofTemp = 63; }
        else if (voltage22 > 950) { waterProofTemp = 62; }
        else if (voltage22 > 948) { waterProofTemp = 61; }
        else if (voltage22 > 943) { waterProofTemp = 59; }
        else if (voltage22 > 940) { waterProofTemp = 58; }
        else if (voltage22 > 937) { waterProofTemp = 57; }
        else if (voltage22 > 934) { waterProofTemp = 56; }
        else if (voltage22 > 931) { waterProofTemp = 55; }
        else if (voltage22 > 928) { waterProofTemp = 54; }
        else if (voltage22 > 924) { waterProofTemp = 53; }
        else if (voltage22 > 921) { waterProofTemp = 52; }
        else if (voltage22 > 917) { waterProofTemp = 51; }
        else if (voltage22 > 914) { waterProofTemp = 51; }
        else if (voltage22 > 910) { waterProofTemp = 49; }
        else if (voltage22 > 906) { waterProofTemp = 48; }
        else if (voltage22 > 902) { waterProofTemp = 47; }
        else if (voltage22 > 898) { waterProofTemp = 46; }
        else if (voltage22 > 893) { waterProofTemp = 45; }
        else if (voltage22 > 889) { waterProofTemp = 44; }
        else if (voltage22 > 884) { waterProofTemp = 43; }
        else if (voltage22 > 879) { waterProofTemp = 42; }
        else if (voltage22 > 874) { waterProofTemp = 41; }
        else if (voltage22 > 869) { waterProofTemp = 40; }
        else if (voltage22 > 864) { waterProofTemp = 39; }
        else if (voltage22 > 858) { waterProofTemp = 38; }
        else if (voltage22 > 852) { waterProofTemp = 37; }
        else if (voltage22 > 846) { waterProofTemp = 36; }
        else if (voltage22 > 840) { waterProofTemp = 35; }
        else if (voltage22 > 834) { waterProofTemp = 34; }
        else if (voltage22 > 827) { waterProofTemp = 33; }
        else if (voltage22 > 821) { waterProofTemp = 32; }
        else if (voltage22 > 814) { waterProofTemp = 31; }
        else if (voltage22 > 806) { waterProofTemp = 30; }
        else if (voltage22 > 799) { waterProofTemp = 29; }
        else if (voltage22 > 791) { waterProofTemp = 28; }
        else if (voltage22 > 784) { waterProofTemp = 27; }
        else if (voltage22 > 776) { waterProofTemp = 26; }
        else if (voltage22 > 767) { waterProofTemp = 25; }
        else if (voltage22 > 759) { waterProofTemp = 24; }
        else if (voltage22 > 750) { waterProofTemp = 23; }
        else if (voltage22 > 741) { waterProofTemp = 22; }
        else if (voltage22 > 732) { waterProofTemp = 21; }
        else if (voltage22 > 713) { waterProofTemp = 19; }
        else if (voltage22 > 703) { waterProofTemp = 18; }
        else if (voltage22 > 692) { waterProofTemp = 17; }
        else if (voltage22 > 682) { waterProofTemp = 16; }
        else if (voltage22 > 671) { waterProofTemp = 15; }
        else if (voltage22 > 661) { waterProofTemp = 14; }
        else if (voltage22 > 650) { waterProofTemp = 13; }
        else if (voltage22 > 638) { waterProofTemp = 12; }
        else if (voltage22 > 627) { waterProofTemp = 11; }
        else if (voltage22 > 615) { waterProofTemp = 10; }
        else if (voltage22 > 604) { waterProofTemp = 9; }
        else if (voltage22 > 592) { waterProofTemp = 8; }
        else if (voltage22 > 579) { waterProofTemp = 7; }
        else if (voltage22 > 567) { waterProofTemp = 6; }
        else if (voltage22 > 555) { waterProofTemp = 5; }
        else if (voltage22 > 542) { waterProofTemp = 4; }
        else if (voltage22 > 530) { waterProofTemp = 3; }
        else if (voltage22 > 517) { waterProofTemp = 2; }
        else if (voltage22 > 504) { waterProofTemp = 1; }
        else { waterProofTemp = 0; }
        return waterProofTemp;
    }

    //% blockId=sonarbit
    //% weight=29

    
    //% subcategory=Sensor
    //% blockId=sonar_ping block="Ultrasonic Sensor %ultpins units %unit"
    //% ultpins.fieldEditor="gridpicker"
    //% ultpins.fieldOptions.width=220
    //% ultpins.fieldOptions.columns=2
    export function ping(ultpins: Ultrasonic_pin, unit: PingUnit, maxCmDistance = 500): number {
        let d
        let distance
        let echopin
        let trigpin

        if (ultpins == 13) {
            trigpin = DigitalPin.P0;
            echopin = DigitalPin.P13;
        }

        if (ultpins == 114) {
            trigpin = DigitalPin.P1;
            echopin = DigitalPin.P14;
        }

        if (ultpins == 215) {
            trigpin = DigitalPin.P2;
            echopin = DigitalPin.P15;
        }

        if (ultpins == 87) {
            trigpin = DigitalPin.P8;
            echopin = DigitalPin.P7;
        }

        if (ultpins == 129) {
            trigpin = DigitalPin.P12;
            echopin = DigitalPin.P9;
        }

        if (ultpins == 1610) {
            trigpin = DigitalPin.P16;
            echopin = DigitalPin.P10;
        }

        pins.setPull(trigpin, PinPullMode.PullNone);
        pins.digitalWritePin(trigpin, 0);
        control.waitMicros(2);
        pins.digitalWritePin(trigpin, 1);
        control.waitMicros(10);
        pins.digitalWritePin(trigpin, 0);

        // read pulse
        d = pins.pulseIn(echopin, PulseValue.High, maxCmDistance * 50);
        distance = d * 34 / 2 / 1000 * 3 / 2;
        switch (unit) {
            case PingUnit.Centimeters: return Math.round(distance);
            case PingUnit.Inches: return Math.round(distance / 30.48);
            default: return Math.round(d);
        }
    }



    //////人体红外/////
    //% weight=27
    //% pirpin.fieldEditor="gridpicker"
    //% pirpin.fieldOptions.width=220
    //% pirpin.fieldOptions.columns=2
    //% blockId="PIR" block="PIR Sensor %pirpin detects motion"
    //% subcategory=Sensor 
    export function pir(pirpin: Write_pin): number {
        let pin48
        let rt

        if (pirpin == 1) {
            pin48 = DigitalPin.P0;
        }

        if (pirpin == 2) {
            pin48 = DigitalPin.P16;
        }

        if (pirpin == 3) {
            pin48 = DigitalPin.P1;
        }

        if (pirpin == 4) {
            pin48 = DigitalPin.P12;
        }

        if (pirpin == 5) {
            pin48 = DigitalPin.P2;
        }

        if (pirpin == 6) {
            pin48 = DigitalPin.P8;
        }

        if (pins.digitalReadPin(pin48) == 1) {
            rt = 0
        }else {
            rt = 1
        }
        return rt
    }


    /////////摇杆////////////////////
    //% weight=27
    //% direction.fieldEditor="gridpicker"
    //% direction.fieldOptions.width=220
    //% direction.fieldOptions.columns=2
    //% blockId="ROCKET" block="Joystick %direction moved"
    //% subcategory=Sensor 
    export function rocker(direction: rocket): number {
        let GetBuff = pins.createBuffer(3)
        GetBuff = pins.i2cReadBuffer(97, 3)

        let re = GetBuff.getNumber(NumberFormat.Int8BE, direction)
        if (direction == 2) {
            return -re
        } else {
            return re
        }
    }

    //% weight=27
    //% direction.fieldEditor="gridpicker"
    //% direction.fieldOptions.width=220
    //% direction.fieldOptions.columns=2
    //% blockId="ROCKETORI" block="Joystick detected %orientation "
    //% subcategory=Sensor 
    export function rockerori(orientation: rock): boolean {
        let GetBuff2 = pins.createBuffer(3)

        GetBuff2 = pins.i2cReadBuffer(97, 3)
        let ud = GetBuff2.getNumber(NumberFormat.Int8BE, 2)
        let lr = GetBuff2.getNumber(NumberFormat.Int8BE, 1)
        let flag
        if (orientation == 1) {
            if (ud > 50)
                flag = true
            else
                flag = false
        }
        if (orientation == 2) {
            if (ud < -50)
                flag = true
            else
                flag = false
        }
        if (orientation == 4) {
            if (lr < -50)
                flag = true
            else
                flag = false
        }
        if (orientation == 3) {
            if (lr > 50)
                flag = true
            else
                flag = false
        }
        return flag
    }
}