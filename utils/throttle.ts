export default function (fn: Function, wait: number) {
  
  let throttled = false

  return function(...args: any[]) {
    if(!throttled) {
        fn.apply(this, args)

        throttled = true

        setTimeout(() => {
            throttled = false
        }, wait)
    }
  }
}