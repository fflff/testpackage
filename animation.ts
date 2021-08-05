// Add your code here
namespace 动画{}
namespace fightext_animation {

    //=================== 动画 ===================
    
    export class projectileAnimation {
        anim: Image[]
        next: string
        interval: number
        lifespan: number

        constructor(anim: Image[], interval: number = 100, next: string = null) {
            this.anim = anim
            this.interval = interval
            this.lifespan = anim.length * interval
            this.next = next
        }
    }

    export let animations: { [key: string]: projectileAnimation; } = {}

    //%block
    //%group="自定义动画"
    //%blockNamespace=动画
    //%blockId=defAnimation block="自定义动画集合"
    //%weight=100
    //%afterOnStart=true
    export function defAnimation(f: () => void) {
        f()
    }
}
