enum Oled {

    //% block=" "

    oled1 = 0,

    //% block=" "

    oled2 = 1,

    //% block=" "

    oled3 = 2,

    //% block=" "

    oled4 = 3,

    //% block=" "

    oled5 = 4,

    //% block=" "

    oled6 = 5,

    //% block=" "

    oled7 = 6,

    //% block=" "

    oled8 = 7,

    //% block=" "

    oled9 = 8,

    //% block=" "

    oled10 = 9,

    //% block=" "

    oled11 = 10,

    //% block=" "

    oled12 = 11,

    //% block=" "

    oled13 = 12,

    //% block=" "

    oled14 = 13,

    //% block=" "

    oled15 = 14,

    //% block=" "

    oled16 = 15,

    //% block=" "

    oled17 = 16,

    //% block=" "

    oled18 = 17,

    //% block=" "

    oled19 = 18,

    //% block=" "

    oled20 = 19,

    //% block=" "

    oled21 = 20,

    //% block=" "

    oled22 = 21,

    //% block=" "

    oled23 = 22,

    //% block=" "

    oled24 = 23,

    //% block=" "

    oled25 = 24,

    //% block=" "

    oled26 = 25,

    //% block=" "

    oled27 = 26,

    //% block=" "

    oled28 = 27,

    //% block=" "

    oled29 = 28,

    //% block=" "

    oled30 = 29,

    //% block=" "

    oled31 = 30,

    //% block=" "

    oled32 = 31,

    //% block=" "

    oled33 = 32,

    //% block=" "

    oled34 = 33,

    //% block=" "

    oled35 = 34,

    //% block=" "

    oled36 = 35,

    //% block=" "

    oled37 = 36,

    //% block=" "

    oled38 = 37,

    //% block=" "

    oled39 = 38,

    //% block=" "

    oled40 = 39,

    //% block=" "

    oled41 = 40,

    //% block=" "

    oled42 = 41,

    //% block=" "

    oled43 = 42,

    //% block=" "

    oled44 = 43,

    //% block=" "

    oled45 = 44,

    //% block=" "

    oled46 = 45,

    //% block=" "

    oled47 = 46,

    //% block=" "

    oled48 = 47,

    //% block=" "

    oled49 = 48,

    //% block=" "

    oled50 = 49,

    //% block=" "

    oled51 = 50,

    //% block=" "

    oled52 = 51,





}
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
enum Recodpin {

    //% block="(P0,P13)"

    rc1 = 13,
    //% block="(P1,P14)"

    rc2 = 114,

    //% block="(P2,P15)"

    rc3 = 215

}

enum Record_list {//

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
enum PingUnit {

    //% block="centimeters"

    Centimeters,

    //% block="microseconds"

    MicroSeconds,



    //% block="inches"

    Inches

}
enum Grayscale_pin {

    //% block="P13"

    g0 = 1,

    //% block="P16"

    g1 = 2,

    //% block="P0"

    g2 = 3,

    //% block="P10"

    g3 = 4,

    //% block="P14"

    g4 = 5,

    //% block="P12"

    g5 = 6,

    //% block="P1"

    g6 = 7,

    //% block="P9"

    g7 = 8,

    //% block="P15"

    g8 = 9,

    //% block="P8"

    g9 = 10,

    //% block="P2"

    g10 = 11,

    //% block="P7"

    g11 = 12

}
enum gs {

    //% block="up"

    g0 = 1,

    //% block="down"

    g1 = 2,

    //% block="left"

    g2 = 3,

    //% block="right"

    g3 = 4



}
enum PINs {

    P0,

    P1,

    P2,

    P3,

    P4,

    P5,

    P6,

    P7,

    P8,

    P9,

    P10,

    P11,

    P12,

    P13,

    P14,

    P15,

    P16,

    P19,

    P20

}
enum TMP36Type {

    //% block="(℃)" enumval=0

    TMP36_temperature_C,



    //% block="(℉)" enumval=1

    TMP36_temperature_F,

}
enum RGB {

    //% block="red"

    RED,

    //% block="green"

    GREEN,

    //% block="blue"

    BLUE,

    //% block="clear"

    CLEAR

}
enum NeoPixelColors {

    //% block=red

    Red = 0xFF0000,

    //% block=orange

    Orange = 0xFFA500,

    //% block=yellow

    Yellow = 0xFFFF00,

    //% block=green

    Green = 0x00FF00,

    //% block=blue

    Blue = 0x0000FF,

    //% block=indigo

    Indigo = 0x4b0082,

    //% block=violet

    Violet = 0x8a2be2,

    //% block=purple

    Purple = 0xFF00FF,

    //% block=white

    White = 0xFFFFFF,

    //% block=black

    Black = 0x000000

}
enum NeoPixelMode {

    //% block="GRB"

    RGB = 1,

    //% block="RGB+W"

    RGBW = 2,

    //% block="RGB"

    RGB_RGB = 3

}
namespace Microbit {



    export enum DHT11_state {

        //% block="temperature(℃)" enumval=0

        DHT11_temperature_C,



        //% block="humidity(0~100)" enumval=1

        DHT11_humidity,

    }



    export enum Distance_Unit_List {

        //% block="centimeters" 

        Distance_Unit_cm,



        //% block="inches"

        Distance_Unit_inch,

    }



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

        // send pulse



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

        }

        else {

            rt = 1

        }
        return rt

    }


    /////////摇杆////////////////////

    export enum rocket {
        //% block="X"

        x = 1,

        //% block="Y"

        y = 2
    }
    export enum rock {
        //% block="up"

        orient1 = 2,

        //% block="down"

        orient2 = 1,

        //% block="left"

        orient3 = 4,

        //% block="right"

        orient4 = 3
    }

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
        // re = -re


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



    ////////////////执行器/////////////////////////////////////

    export enum enPos {

        //% blockId="forward" block="forward"

        forward = 1,

        //% blockId="stop" block="back"

        stop = 2

    }

    export enum enMotorcolor {
        //% block="red"

        red = 81,

        //% block="green"

        blue = 82,

        //% block="blue"

        green = 83,

        //% block="yellow"

        yellow = 84

    }

    export enum enServo {
        S1 = 0,
        S2,
        S3,
        S4
    }



    export enum enMotors {



        M2 = 10,

        M3 = 12,

        M1 = 8,

        M4 = 14

    }


    const PCA9685_ADD = 0x40

    const MODE1 = 0x00

    const SUBADR1 = 0x02

    const SUBADR2 = 0x03

    const SUBADR3 = 0x04

    const PRESCALE = 0xFE

    const LED0_ON_L = 0x06

    const LED0_ON_H = 0x07

    const LED0_OFF_L = 0x08

    const LED0_OFF_H = 0x09

    const ALL_LED_ON_L = 0xFA

    const ALL_LED_ON_H = 0xFB

    const ALL_LED_OFF_L = 0xFC

    const ALL_LED_OFF_H = 0xFD



    const STP_CHA_L = 2047

    const STP_CHA_H = 4095



    const STP_CHB_L = 1

    const STP_CHB_H = 2047



    const STP_CHC_L = 1023

    const STP_CHC_H = 3071


    const STP_CHD_L = 3071

    const STP_CHD_H = 1023



    let initialized = false

    let caraddress1 = 81
    let caraddress2 = 82



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

        }

        else {

            if (speed >= 0) {

                setPwm(b, 0, speed)

                setPwm(a, 0, 0)

            } else {

                setPwm(b, 0, 0)

                setPwm(a, 0, -speed)

            }

        }

    }
    //% blockId=SuperBit_runMotor block="|%motoraddress|Motor rotate at|%speed|"

    //% speed.min=-100 speed.max=100

    //% parts="SuperBit_runMotor" subcategory=Movement group="Servo Motor"

    export function runMotor(motoraddress: enMotorcolor, speed: number): void {
        speed = speed / 2

        let speed_Buff

        if (speed < 0) {

            speed = -speed

            speed_Buff = (~speed) + 1

            speed_Buff = speed_Buff | 0x80

        }

        else {

            speed_Buff = speed

        }

        let SetBuff = pins.createBuffer(4)

        SetBuff.setNumber(NumberFormat.UInt8BE, 0, 0x11)

        SetBuff.setNumber(NumberFormat.UInt8BE, 1, speed_Buff)

        SetBuff.setNumber(NumberFormat.UInt8BE, 2, 0)

        SetBuff.setNumber(NumberFormat.UInt8BE, 3, 0)

        pins.i2cWriteBuffer(motoraddress, SetBuff)


    }
    //% blockId="writemotorlocation" block="|%motoraddress|Motor is turned at|%speed|to|%location|degrees"

    //% speed.min=0 speed.max=100

    //% location.min=-360 location.max=360

    //% parts="writemotorlocation" subcategory=Movement group="Servo Motor"

    export function Writemotorlocation(motoraddress: enMotorcolor, speed: number, location: number): void {
        if (speed == 0) {
            return
        }

        speed = speed / 2
        let speed_Buff2

        if (speed < 0) {
            speed = -speed
            speed_Buff2 = (~speed) + 1
            speed_Buff2 = speed_Buff2 | 0x80
        }
        else {
            speed_Buff2 = speed
        }

        let location_Buff2

        if (location < 0) {
            location = -location
            location_Buff2 = (~location) + 1
            location_Buff2 = location_Buff2 | 0x8000
        }
        else {
            location_Buff2 = location
        }

        let GetBuff3 = pins.createBuffer(6)
        GetBuff3 = pins.i2cReadBuffer(motoraddress, 6)

        if (((location - 5) <= getMotorLocation(GetBuff3)) && (getMotorLocation(GetBuff3) <= (location + 5))) {
            return;
        }
        let SetBuff2 = pins.createBuffer(4)

        SetBuff2.setNumber(NumberFormat.UInt8BE, 0, 0x3)
        SetBuff2.setNumber(NumberFormat.UInt8BE, 1, speed_Buff2)
        SetBuff2.setNumber(NumberFormat.UInt8BE, 2, location_Buff2 >> 8)
        SetBuff2.setNumber(NumberFormat.UInt8BE, 3, location_Buff2)


        pins.i2cWriteBuffer(motoraddress, SetBuff2)

        let flag2 = GetBuff3.getNumber(NumberFormat.Int8BE, 5);
        while (true) {//如果没有在运行，则一直读取
            GetBuff3 = pins.i2cReadBuffer(motoraddress, 6)
            flag2 = GetBuff3.getNumber(NumberFormat.Int8BE, 5)
            if ((flag2 == 3)) break;//当有一个Servo Motor转动起来的时候，就退出死循环
        }
        while (true) {//如果没有在运行，则一直读取
            GetBuff3 = pins.i2cReadBuffer(motoraddress, 6)
            flag2 = GetBuff3.getNumber(NumberFormat.Int8BE, 5)
            if ((flag2 == 11) || (flag2 == 10)) break;//当结束任务的时候，就退出死循环
        }
    }

    //% blockId="writemotorrelativelocation" block="|%motoraddress|Motor rotate at|%speed|in|%location|degrees"
    //% speed.min=-100 speed.max=100
    //% location.min=0 
    //% parts="writemotorrelativelocation" subcategory=Movement group="Servo Motor"
    export function Writemotorrelativelocation(motoraddress: enMotorcolor, speed: number, location: number): void {
        if (((location <= 5) && (location >= 0)) || ((location >= -5) && (location <= 0))) {
            return;
        }
        speed = speed / 2

        let location_Buff22

        if (speed < 0) {
            speed = -speed
            location_Buff22 = (~location) + 1
            location_Buff22 = location_Buff22 | 0x8000
        }
        else {
            speed = speed
            location_Buff22 = location
        }

        let SetBuff22 = pins.createBuffer(4)

        SetBuff22.setNumber(NumberFormat.UInt8BE, 0, 0x4)
        SetBuff22.setNumber(NumberFormat.UInt8BE, 1, speed)
        SetBuff22.setNumber(NumberFormat.UInt8BE, 2, location_Buff22 >> 8)
        SetBuff22.setNumber(NumberFormat.UInt8BE, 3, location_Buff22)

        let GetBuff4 = pins.createBuffer(6)
        let flag3 = 0

        if (speed != 0) {
            pins.i2cWriteBuffer(motoraddress, SetBuff22)
        } else {
            location = 0;
        }


        if (location != 0) {
            while (true) {//如果没有在运行，则一直读取
                GetBuff4 = pins.i2cReadBuffer(motoraddress, 6)
                flag3 = GetBuff4.getNumber(NumberFormat.Int8BE, 5)
                if ((flag3 == 4)) break;//等待电机执行指令，跳出循环
            }
            while (true) {//如果没有在运行，则一直读取
                GetBuff4 = pins.i2cReadBuffer(motoraddress, 6)
                flag3 = GetBuff4.getNumber(NumberFormat.Int8BE, 5)
                if ((flag3 == 11) || (flag3 == 10)) break;//等待电机执行完指令或堵转时，跳出循环
            }
        }


    }
    //% blockId="writemotorrelativetime" block="|%motoraddress|Motor rotate at|%speed|in|%time|seconds"

    //% speed.min=-100 speed.max=100

    //% parts="writemotorrelativetime" subcategory=Movement group="Servo Motor"

    export function Writemotorrelativetime(motoraddress: enMotorcolor, speed: number, time: number): void {

        speed = speed / 2

        if (time > 0 && time < 0.1) {
            time = 0.1;
        }
        time = time * 10

        let speed_Buff3

        if (speed < 0) {
            speed = -speed
            speed_Buff3 = (~speed) + 1
            speed_Buff3 = speed_Buff3 | 0x80
        }
        else {
            speed_Buff3 = speed
        }

        let SetBuff222 = pins.createBuffer(4)

        SetBuff222.setNumber(NumberFormat.UInt8BE, 0, 0x12)
        SetBuff222.setNumber(NumberFormat.UInt8BE, 1, speed_Buff3)
        SetBuff222.setNumber(NumberFormat.UInt8BE, 2, time >> 8)
        SetBuff222.setNumber(NumberFormat.UInt8BE, 3, time)

        let flag4 = 0
        pins.i2cWriteBuffer(motoraddress, SetBuff222)

        if (time != 0) {
            if (speed <= 0) {
                let waitFalg = (control.millis() + (time * 100));
                while (control.millis() <= waitFalg) { }

            } else {
                let GetBuff5 = pins.createBuffer(6)
                while (true) {//如果没有在运行，则一直读取
                    GetBuff5 = pins.i2cReadBuffer(motoraddress, 6)
                    flag4 = GetBuff5.getNumber(NumberFormat.Int8BE, 5)
                    // serial.writeLine("read1:[" + GetBuff.getNumber(NumberFormat.Int8BE, 0) + "," + GetBuff.getNumber(NumberFormat.Int8BE, 1) + "," + GetBuff.getNumber(NumberFormat.Int8BE, 2) + "," + GetBuff.getNumber(NumberFormat.Int8BE, 3) + "," + GetBuff.getNumber(NumberFormat.Int8BE, 4) + "," + GetBuff.getNumber(NumberFormat.Int8BE, 5) + "," + GetBuff.getNumber(NumberFormat.Int8BE, 6) + "]");
                    if ((flag4 == 0x7)) break;//等待电机执行指令，跳出循环
                }
                while (true) {//如果没有在运行，则一直读取
                    GetBuff5 = pins.i2cReadBuffer(motoraddress, 6)
                    flag4 = GetBuff5.getNumber(NumberFormat.Int8BE, 5)
                    // serial.writeLine("read2:" + flag);
                    if ((flag4 == 11)) break;//等待电机执行完指令或堵转时，跳出循环
                }
            }
        }
    }

    //% blockId=SuperBit_runDMotor block="Dual motors rotate at|%speed1| |%speed2|"

    //% speed1.min=-100 speed1.max=100

    //% speed2.min=-100 speed2.max=100

    //% parts="SuperBit_runDMotor" subcategory=Movement group="Servo Motor"

    export function runDMotor(speed1: number, speed2: number): void {

        speed1 = -speed1 / 2
        speed2 = speed2 / 2

        let speed_Buff1
        if (speed1 < 0) {
            speed1 = -speed1
            speed_Buff1 = (~speed1) + 1
            speed_Buff1 = speed_Buff1 | 0x80
        }
        else {
            speed_Buff1 = speed1
        }

        let speed_Buff23
        if (speed2 < 0) {
            speed2 = -speed2
            speed_Buff23 = (~speed2) + 1
            speed_Buff23 = speed_Buff23 | 0x80
        }
        else {
            speed_Buff23 = speed2
        }

        let SetBuff3 = pins.createBuffer(4)
        let SetBuffc = pins.createBuffer(4)


        SetBuff3.setNumber(NumberFormat.UInt8BE, 0, 0x11)
        SetBuff3.setNumber(NumberFormat.UInt8BE, 1, speed_Buff1)
        SetBuff3.setNumber(NumberFormat.UInt8BE, 2, 0)
        SetBuff3.setNumber(NumberFormat.UInt8BE, 3, 0)

        SetBuffc.setNumber(NumberFormat.UInt8BE, 0, 0x11)
        SetBuffc.setNumber(NumberFormat.UInt8BE, 1, speed_Buff23)
        SetBuffc.setNumber(NumberFormat.UInt8BE, 2, 0)
        SetBuffc.setNumber(NumberFormat.UInt8BE, 3, 0)

        pins.i2cWriteBuffer(caraddress1, SetBuff3)
        pins.i2cWriteBuffer(caraddress2, SetBuffc)

    }
    //% blockId="writeDmotorlocation" block="Dual motors at|%speed1| |%speed2|in|%location|degrees"

    //% speed1.min=-100 speed1.max=100

    //% speed2.min=-100 speed2.max=100
    //% location.min=0 
    //% parts="writeDmotorlocation" subcategory=Movement group="Servo Motor"

    export function WriteDmotorlocation(speed1: number, speed2: number, location: number): void {
        if (((location <= 5) && (location >= 0)) || ((location >= -5) && (location <= 0))) {
            return;
        }
        speed1 = -speed1 / 2
        speed2 = speed2 / 2

        let location1
        let location_Buff1

        let location2
        let location_Buff23

        location2 = ~location
        location1 = ~location

        if (speed2 < 0) {
            speed2 = -speed2
            location_Buff23 = location2 + 1
        }
        else {
            location_Buff23 = location
        }

        if (speed1 < 0) {
            speed1 = -speed1
            location_Buff1 = location1 + 1
        }
        else {
            location_Buff1 = location
        }

        if (speed1 == 0) {
            location_Buff1 = 0
        }

        if (speed2 == 0) {
            location_Buff23 = 0
        }

        let SetBuff23 = pins.createBuffer(4)
        let SetBuff2c = pins.createBuffer(4)


        SetBuff2c.setNumber(NumberFormat.UInt8BE, 0, 0x4)
        SetBuff2c.setNumber(NumberFormat.UInt8BE, 1, speed2)
        SetBuff2c.setNumber(NumberFormat.UInt8BE, 2, location_Buff23 >> 8)
        SetBuff2c.setNumber(NumberFormat.UInt8BE, 3, location_Buff23)


        SetBuff23.setNumber(NumberFormat.UInt8BE, 0, 0x4)
        SetBuff23.setNumber(NumberFormat.UInt8BE, 1, speed1)
        SetBuff23.setNumber(NumberFormat.UInt8BE, 2, location_Buff1 >> 8)
        SetBuff23.setNumber(NumberFormat.UInt8BE, 3, location_Buff1)

        if ((location != 0) && ((speed1 != 0) || (speed2 != 0))) {


            let GetBuff6 = pins.createBuffer(7)
            let GetBuff1 = pins.createBuffer(7)

            //发送控制参数并获取运动状态
            pins.i2cWriteBuffer(caraddress1, SetBuff23)
            GetBuff1 = pins.i2cReadBuffer(caraddress1, 6)
            pins.i2cWriteBuffer(caraddress2, SetBuff2c)
            GetBuff6 = pins.i2cReadBuffer(caraddress2, 6)

            let flag5 = GetBuff6.getNumber(NumberFormat.Int8BE, 5)//获取了第6位
            let flag1 = GetBuff1.getNumber(NumberFormat.Int8BE, 5)//获取了第6位
            //4为正在运行
            while (true) {//如果没有在运行，则一直读取

                GetBuff6 = pins.i2cReadBuffer(caraddress2, 6)
                GetBuff1 = pins.i2cReadBuffer(caraddress1, 6)
                flag5 = GetBuff6.getNumber(NumberFormat.Int8BE, 5)
                flag1 = GetBuff1.getNumber(NumberFormat.Int8BE, 5)
                if ((flag1 == 4) || (flag5 == 4)) break;//当有一个电机转动起来的时候，就退出死循环


            }
            //11为运行结束
            while (true) {
                GetBuff6 = pins.i2cReadBuffer(caraddress2, 6)
                GetBuff1 = pins.i2cReadBuffer(caraddress1, 6)
                flag5 = GetBuff6.getNumber(NumberFormat.Int8BE, 5)
                flag1 = GetBuff1.getNumber(NumberFormat.Int8BE, 5)
                // 11：结束运动，10：堵转停止
                if (((flag1 == 11) || (flag1 == 10)) && ((flag5 == 11) || (flag5 == 10))) break;//当有两个电机都执行完毕的时候，就退出死循环
            }
        }
    }

    //% blockId="writeDmotortime" block="Dual motors rotate at |%speed1| |%speed2|in|%time|seconds"

    //% speed1.min=-100 speed1.max=100

    //% speed2.min=-100 speed2.max=100
    //% time.min=0 
    //% parts="writeDmotortime" subcategory=Movement group="Servo Motor"

    export function writeDmotortime(speed1: number, speed2: number, time: number): void {

        speed1 = -speed1 / 2
        speed2 = speed2 / 2
        // serial.writeLine("read1:" + time + "," + (time > 0 && time < 0.1));
        if (time > 0 && time < 0.1) {
            time = 0.1;
        }
        time = time * 10
        let speed_Buff32
        let speed_Buff4

        if (speed1 < 0) {
            speed1 = -speed1
            speed_Buff32 = (~speed1) + 1
            speed_Buff32 = speed_Buff32 | 0x80
        }
        else {
            speed_Buff32 = speed1
        }

        if (speed2 < 0) {
            speed2 = -speed2
            speed_Buff4 = (~speed2) + 1
            speed_Buff4 = speed_Buff4 | 0x80
        }
        else {
            speed_Buff4 = speed2
        }

        let SetBuff32 = pins.createBuffer(4)
        let SetBuff4 = pins.createBuffer(4)

        SetBuff32.setNumber(NumberFormat.UInt8BE, 0, 0x12)
        SetBuff32.setNumber(NumberFormat.UInt8BE, 1, speed_Buff32)
        SetBuff32.setNumber(NumberFormat.UInt8BE, 2, time >> 8)
        SetBuff32.setNumber(NumberFormat.UInt8BE, 3, time)

        SetBuff4.setNumber(NumberFormat.UInt8BE, 0, 0x12)
        SetBuff4.setNumber(NumberFormat.UInt8BE, 1, speed_Buff4)
        SetBuff4.setNumber(NumberFormat.UInt8BE, 2, time >> 8)
        SetBuff4.setNumber(NumberFormat.UInt8BE, 3, time)
        // serial.writeLine("read1:" + SetBuff4.getNumber(NumberFormat.UInt8BE, ));

        if (speed1 != 0) {
            pins.i2cWriteBuffer(caraddress1, SetBuff32)
        }
        if (speed2 != 0) {
            pins.i2cWriteBuffer(caraddress2, SetBuff4)
        }



        if ((time !== 0) && ((speed1 !== 0) || (speed2 !== 0))) {
            let GetBuff7 = pins.createBuffer(6)
            let GetBuff12 = pins.createBuffer(6)

            GetBuff7 = pins.i2cReadBuffer(caraddress2, 6)
            GetBuff12 = pins.i2cReadBuffer(caraddress1, 6)

            let flag6 = GetBuff7.getNumber(NumberFormat.Int8BE, 5)//获取了第6位
            let flag12 = GetBuff12.getNumber(NumberFormat.Int8BE, 5)//获取了第6位

            while (true) {//如果没有在运行，则一直读取

                GetBuff7 = pins.i2cReadBuffer(caraddress2, 6)
                GetBuff12 = pins.i2cReadBuffer(caraddress1, 6)
                flag6 = GetBuff7.getNumber(NumberFormat.Int8BE, 5)
                flag12 = GetBuff12.getNumber(NumberFormat.Int8BE, 5)
                // serial.writeLine("read2:[" + flag1 + "," + flag+"]");
                if ((flag12 == 0x7) || (flag6 == 0x7)) break;//当有一个电机转动起来的时候，就退出死循环


            }
            //11为运行结束
            while (true) {
                GetBuff7 = pins.i2cReadBuffer(caraddress2, 6)
                GetBuff12 = pins.i2cReadBuffer(caraddress1, 6)
                flag6 = GetBuff7.getNumber(NumberFormat.Int8BE, 5)
                flag12 = GetBuff12.getNumber(NumberFormat.Int8BE, 5)
                // serial.writeLine("read3:[" + flag1 + "," + flag + "]");
                if (((flag12 == 11)) && ((flag6 == 11))) break;//当有两个电机都执行完毕的时候，就退出死循环

            }
        }

    }

    //% blockId=SuperBit_DMotor block="Set left motor to|%motoraddress1|and right motor to|%motoraddress2|"

    //% parts="SuperBit_DMotor" subcategory=Movement group="Servo Motor"

    export function DMotor(motoraddress1: enMotorcolor, motoraddress2: enMotorcolor): void {
        caraddress1 = motoraddress1

        caraddress2 = motoraddress2

    }


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

    //% blockId="readmotorspeed" block="Read speed of the |%motoraddress|motor"

    //% parts="readmotorspeed" subcategory=Movement group="Servo Motor"

    export function Readmotorspeed(motoraddress: enMotorcolor): number {

        let GetBuff8 = pins.createBuffer(6)
        GetBuff8 = pins.i2cReadBuffer(motoraddress, 6)
        return GetBuff8.getNumber(NumberFormat.Int8BE, 0);

    }

    function getMotorLocation(buffer: Buffer) {

        let location_Buff = (buffer.getNumber(NumberFormat.Int8BE, 1) << 8) + buffer.getNumber(NumberFormat.Int8BE, 2)
        let This_location;
        if (location_Buff & 0x0080) {
            This_location = location_Buff + 0x0100
        }
        else {
            This_location = location_Buff
        }
        return This_location;
    }
    function getMotorSpeed(buffer: Buffer) {

        let location_Buff3 = (buffer.getNumber(NumberFormat.Int8BE, 0) << 8) + buffer.getNumber(NumberFormat.Int8BE, 1)
        let This_speed;
        if (location_Buff3 & 0x0080) {
            This_speed = location_Buff3 + 0x0100
        }
        else {
            This_speed = location_Buff3
        }
        return This_speed;
    }

    //% blockId="readmotorlocation" block="Read position of the |%motoraddress|motor"

    //% parts="readmotorlocation" subcategory=Movement group="Servo Motor"

    export function Readmotorlocation(motoraddress: enMotorcolor): number {

        let GetBuff22 = pins.createBuffer(6)

        GetBuff22 = pins.i2cReadBuffer(motoraddress, 6)
        let This_location2 = getMotorLocation(GetBuff22);
        return This_location2;

    }
    




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

        }

        else {

            pins.analogWritePin(pin3, 0);

            speed = 0;

        }



    }



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

        }

        else {

            pins.analogWritePin(pin8, 0)

            force = 0

        }

    }



    ////////////////////////////////////////////

    









    





    





    

}
