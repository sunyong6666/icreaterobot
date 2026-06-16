## Introduction
Coding Kit for BBC micro:bit is based on the micro:bit main control board and includes sensors, actuators, and other accessories. The set is perfectly designed to integrate with LEGO parts, making it ideal for students to create micro:bit-based technology and creative projects. This document focuses on the main control board, sensors, actuators, and related software extensions.

Product link https://www.icrobot.com/www/cn/index.html#/product/detail?id=4

Tutorials link https://icreaterobot-microbit-docs.readthedocs.io/en/latest/docs/Microbit/index.html

## Code Example

input.onButtonPressed(Button.A, function () {
    Microbit.MotorRun(Microbit.enMotors.M2, 0)
})
basic.forever(function () {
    Microbit.ledRBrightness(Write_pin.w0, true)
    basic.pause(100)
    Microbit.ledRBrightness(Write_pin.w0, false)
    basic.pause(100)
})


## License
MIT

## Supported targets
for PXT/microbit (The metadata above is needed for package search.)



> Open this page at [https://sunyong6666.github.io/icreaterobot/](https://sunyong6666.github.io/icreaterobot/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/sunyong6666/icreaterobot** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/sunyong6666/icreaterobot** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
