
enum ePin_t {
    //% block="PIN0"
    PIN0,
    //% block="PIN1"
    PIN1
}

enum eLevel_t {
    //% block="LOW"
    LOW,
    //% block="HIGH"
    HIGH
}

//% color=#ff0000 icon=""
namespace Blink {

    //% block
    export function setLevel(ePin: ePin_t, eLevel: eLevel_t): void {
        led.plot(0, 0)
    }

    //% block
    export function disableLevel(): void {
        led.unplot(0, 0)
    }

}
