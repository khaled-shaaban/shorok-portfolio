export default function (fn: Function, wait: number) {
  
  let timer: NodeJS.Timeout

  return function(...args: any[]) {
    
   if (timer) {
      clearTimeout(timer) // clear any pre-existing timer
   }

   const context = this // get the current context

   timer = setTimeout(()=>{
      fn.apply(context, args) // call the function if time expires
   }, wait)
   
 }
}