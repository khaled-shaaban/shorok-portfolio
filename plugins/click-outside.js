const handleClickOutside = (el, handler, exceptionElements) => {
  const onClick = (event) => {

    const isExceptionClick = exceptionElements ? exceptionElements.some((exceptionElement) =>
      exceptionElement.contains(event.target)
    ) : []

    if (!isExceptionClick && !el.contains(event.target)) {
      handler();
    }
  }

  document.addEventListener('click', onClick);

  // Return the cleanup function for removing the event listener
  return () => {
    document.removeEventListener('click', onClick);
  }
}

export default defineNuxtPlugin(({ vueApp }) => {
  vueApp.directive('click-outside', {
    mounted(el, binding) {
      const exceptionElements = binding.value.exceptionSelector
        ? Array.from(document.querySelectorAll(binding.value.exceptionSelector))
        : []

      // Call handleClickOutside and store the cleanup function
      const cleanup = handleClickOutside(el, binding.value.handler, exceptionElements);

      // Save the cleanup function to the element's cleanup property
      el.__clickOutsideCleanup = cleanup;

      handleClickOutside(el, binding.value.handler)
    },
    beforeUnmount(el) {
      // Call the stored cleanup function when the component is unmounted
      if (el.__clickOutsideCleanup) {
        el.__clickOutsideCleanup();
      }
    },
  })
})
