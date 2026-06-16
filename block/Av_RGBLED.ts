//彩灯模块

enum HueInterpolationDirection {
    Clockwise,
    CounterClockwise,
    Shortest
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

    export class Strip {
        buf: Buffer;
        lastrgb: number;
        pin: DigitalPin;
        // TODO: encode as bytes instead of 32bit
        brightness: number;
        start: number; // start offset in LED strip
        _length: number; // number of LEDs
        _mode: NeoPixelMode;
        _matrixWidth: number; // number of leds in a matrix - if any

        /**
         * Shows all LEDs to a given color (range 0-255 for r, g, b).
         * @param rgb RGB color of the LED
         */
        //% blockId="neopixel_set_strip_color" block="%strip|display Color %rgb=neopixel_colors"
        //% strip.defl=strip
        //% weight=12
        //% parts="neopixel" subcategory="Audio-visual" group="RGB LED Module"
        //% blockGap=10
        showColor(rgb: number) {
            rgb = rgb >> 0;
            this.lastrgb = rgb;
            this.setAllRGB(rgb);
            this.show();
        }



        /**
         * Shows a rainbow pattern on all LEDs.
         * @param startHue the start hue value for the rainbow, eg: 1
         * @param endHue the end hue value for the rainbow, eg: 360
         */
        //% blockId="neopixel_set_strip_rainbow" block="%strip|Display rainbow from start %startHue|to %endHue"
        //% strip.defl=strip
        //% weight=13
        //% parts="neopixel" subcategory="Audio-visual" group="RGB LED Module"
        //% blockGap=10
        showRainbow(startHue: number = 1, endHue: number = 360) {
            if (this._length <= 0) return;
            startHue = startHue >> 0;
            endHue = endHue >> 0;
            const saturation = 100;
            const luminance = 50;
            const steps = this._length + 1;
            const direction = HueInterpolationDirection.Clockwise;

            //hue
            const h1 = startHue;
            const h2 = endHue;
            const hDistCW = ((h2 + 360) - h1) % 360;
            const hStepCW = Math.idiv((hDistCW * 100), steps);
            const hDistCCW = ((h1 + 360) - h2) % 360;
            const hStepCCW = Math.idiv(-(hDistCCW * 100), steps);
            let hStep: number;
            if (direction === HueInterpolationDirection.Clockwise) {
                hStep = hStepCW;
            } else if (direction === HueInterpolationDirection.CounterClockwise) {
                hStep = hStepCCW;
            } else {
                hStep = hDistCW < hDistCCW ? hStepCW : hStepCCW;
            }
            const h1_100 = h1 * 100; //we multiply by 100 so we keep more accurate results while doing interpolation

            //sat
            const s1 = saturation;
            const s2 = saturation;
            const sDist = s2 - s1;
            const sStep = Math.idiv(sDist, steps);
            const s1_100 = s1 * 100;

            //lum
            const l1 = luminance;
            const l2 = luminance;
            const lDist = l2 - l1;
            const lStep = Math.idiv(lDist, steps);
            const l1_100 = l1 * 100

            //interpolate
            if (steps === 1) {
                this.setPixelColor(0, hsl(h1 + hStep, s1 + sStep, l1 + lStep))
            } else {
                this.setPixelColor(0, hsl(startHue, saturation, luminance));
                for (let t = 1; t < steps - 1; t++) {
                    const u = Math.idiv((h1_100 + t * hStep), 100) + 360;
                    const v = Math.idiv((s1_100 + t * sStep), 100);
                    const w = Math.idiv((l1_100 + t * lStep), 100);
                    this.setPixelColor(t, hsl(u, v, w));
                }
                this.setPixelColor(steps - 1, hsl(endHue, saturation, luminance));
            }
            this.show();
        }


        setPixelColor(pixeloffset: number, rgb: number): void {
            this.setPixelRGB((pixeloffset - 1) >> 0, rgb >> 0);
        }


        /**
         * Set the brightness of the strip. This flag only applies to future operation.
         * @param brightness a measure of LED brightness in 0-255. eg: 255
         */
        //% blockId="neopixel_set_brightness" block="%strip|set brightness %brightness"
        //% strip.defl=strip
        //% weight=17
        //% parts="neopixel" subcategory="Audio-visual" group="RGB LED Module"
        //% blockGap=10
        setBrightness(brightness: number): void {
            this.brightness = brightness & 0xff;
            this.setAllRGB(this.lastrgb);
            this.show();
        }

        show() {
            // only supported in beta
            // ws2812b.setBufferMode(this.pin, this._mode);
            ws2812b.sendBuffer(this.buf, this.pin);
        }


        /**
         * Set the pin where the neopixel is connected, defaults to P0.
         */
        //% parts="neopixel" subcategory="Audio-visual" group="RGB LED Module"
        //% blockGap=10
        setPin(pin: DigitalPin): void {
            this.pin = pin;
            pins.digitalWritePin(this.pin, 0);
            // don't yield to avoid races on initialization
        }


        private setBufferRGB(offset: number, red: number, green: number, blue: number): void {
            if (this._mode === NeoPixelMode.RGB_RGB) {
                this.buf[offset + 0] = red;
                this.buf[offset + 1] = green;
            } else {
                this.buf[offset + 0] = green;
                this.buf[offset + 1] = red;
            }
            this.buf[offset + 2] = blue;
        }

        private setAllRGB(rgb: number) {
            let red = unpackR(rgb);
            let green = unpackG(rgb);
            let blue = unpackB(rgb);

            const br3 = this.brightness;
            if (br3 < 255) {
                red = (red * br3) >> 8;
                green = (green * br3) >> 8;
                blue = (blue * br3) >> 8;
            }
            const end3 = this.start + this._length;
            const stride6 = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            for (let i5 = this.start; i5 < end3; ++i5) {
                this.setBufferRGB(i5 * stride6, red, green, blue)
            }
        }

        private setAllW(white: number) {
            if (this._mode !== NeoPixelMode.RGBW)
                return;
            let br4 = this.brightness;
            if (br4 < 255) {
                white = (white * br4) >> 8;
            }
            let buf8 = this.buf;
            let end4 = this.start + this._length;
            for (let i6 = this.start; i6 < end4; ++i6) {
                let ledoffset3 = i6 * 4;
                buf8[ledoffset3 + 3] = white;
            }
        }

        private setPixelRGB(pixeloffset: number, rgb: number): void {
            if (pixeloffset < 0|| pixeloffset >= this._length)
                return;

            let stride7 = this._mode === NeoPixelMode.RGBW ? 4 : 3;
            pixeloffset = (pixeloffset + this.start) * stride7;

            let red2 = unpackR(rgb);
            let green2 = unpackG(rgb);
            let blue2 = unpackB(rgb);

            let br5 = this.brightness;
            if (br5 < 255) {
                red2 = (red2 * br5) >> 8;
                green2 = (green2 * br5) >> 8;
                blue2 = (blue2 * br5) >> 8;
            }
            this.setBufferRGB(pixeloffset, red2, green2, blue2)
        }

        private setPixelW(pixeloffset: number, white: number): void {
            if (this._mode !== NeoPixelMode.RGBW)
                return;
            if (pixeloffset < 0|| pixeloffset >= this._length)
                return;
            pixeloffset = (pixeloffset + this.start) * 4;
            let br6 = this.brightness;
            if (br6 < 255) {
                white = (white * br6) >> 8;
            }

            let buf9 = this.buf;
            buf9[pixeloffset + 3] = white;
        }
    }


    /**
     * Create a new NeoPixel driver for `numleds` LEDs.
     * @param pin the pin where the neopixel is connected.
     * @param numleds number of leds in the strip, eg: 8,30,60,64
     */
    //% blockId="neopixel_create" block="Set color to using the LED ring-light port %neopixelpin "
    //% parts="neopixel" subcategory="Audio-visual" group="RGB LED Module"
    //% neopixelpin.fieldEditor="gridpicker"
    //% neopixelpin.fieldOptions.width=220
    //% neopixelpin.fieldOptions.columns=2
    //% weight=18
    //% trackArgs=0,2
    //% blockSetVariable=strip
    //% blockGap=10
    //% weight=51
    export function create(neopixelpin: Write_pin): Strip {
        let strip2 = new Strip();
        let stride8 = NeoPixelMode.RGBW ? 4 : 3;
        strip2.buf = pins.createBuffer(8 * stride8);
        strip2.start = 0;
        strip2._length = 8;
        strip2._mode = NeoPixelMode.RGB;
        strip2._matrixWidth = 0;
        strip2.brightness = 10;
        strip2.lastrgb = 16777215;
        if (neopixelpin == 1) {
            strip2.setPin(DigitalPin.P0);
        }

        if (neopixelpin == 2) {
            strip2.setPin(DigitalPin.P16);
        }

        if (neopixelpin == 3) {
            strip2.setPin(DigitalPin.P1);
        }

        if (neopixelpin == 4) {
            strip2.setPin(DigitalPin.P12);
        }

        if (neopixelpin == 5) {
            strip2.setPin(DigitalPin.P2);
        }

        if (neopixelpin == 6) {
            strip2.setPin(DigitalPin.P8);
        }

        return strip2;
    }



    /**
     * Converts red, green, blue channels into a RGB color
     * @param red value of the red channel between 0 and 255. eg: 255
     * @param green value of the green channel between 0 and 255. eg: 255
     * @param blue value of the blue channel between 0 and 255. eg: 255
     */
    //% blockId="neopixel_rgb" block="red %red|green %green|blue %blue"
    //% parts="neopixel" subcategory="Audio-visual" group="RGB LED Module"
    //% weight=12
    //% blockGap=10
    export function rgb(red: number, green: number, blue: number): number {
        return packRGB(red, green, blue);
    }

    /**
     * Gets the RGB value of a known color
    */
    //% blockId="neopixel_colors" block="%color"
    //% parts="neopixel" subcategory="Audio-visual" group="RGB LED Module"
    //% weight=13
    //% blockGap=10
    export function colors(color: NeoPixelColors): number {
        return color;
    }

    function packRGB(a: number, b: number, c: number): number {
        return ((a & 0xFF) << 16) | ((b & 0xFF) << 8) | (c & 0xFF);
    }

    function unpackR(rgb: number): number {
        let r3 = (rgb >> 16) & 0xFF;
        return r3;
    }

    function unpackG(rgb: number): number {
        let g3 = (rgb >> 8) & 0xFF;
        return g3;
    }

    function unpackB(rgb: number): number {
        let b3 = (rgb) & 0xFF;
        return b3;
    }

    export function hsl(h: number, s: number, l: number): number {
        h = Math.round(h);
        s = Math.round(s);
        l = Math.round(l);

        h = h % 360;
        s = Math.clamp(0, 99, s);
        l = Math.clamp(0, 99, l);

        let c2 = Math.idiv((((100 - Math.abs(2 * l - 100)) * s) << 8), 10000); //chroma, [0,255]
        let h12 = Math.idiv(h, 60);//[0,6]
        let h22 = Math.idiv((h - h12 * 60) * 256, 60);//[0,255]
        let temp = Math.abs((((h12 % 2) << 8) + h22) - 256);
        let x = (c2 * (256 - (temp))) >> 8;//[0,255], second largest component of this color
        let r$: number;
        let g$: number;
        let b$: number;
        if (h12 == 0) {
            r$ = c2; g$ = x; b$ = 0;
        } else if (h12 == 1) {
            r$ = x; g$ = c2; b$ = 0;
        } else if (h12 == 2) {
            r$ = 0; g$ = c2; b$ = x;
        } else if (h12 == 3) {
            r$ = 0; g$ = x; b$ = c2;
        } else if (h12 == 4) {
            r$ = x; g$ = 0; b$ = c2;
        } else if (h12 == 5) {
            r$ = c2; g$ = 0; b$ = x;
        }

        let m2 = Math.idiv((Math.idiv((l * 2 << 8), 100) - c2), 2);
        let r4 = r$ + m2;
        let g4 = g$ + m2;
        let b4 = b$ + m2;
        return packRGB(r4, g4, b4);
    }
}