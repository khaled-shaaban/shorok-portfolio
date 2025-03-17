export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook('i18n:localeSwitched', ({ newLocale }) => {
    const isRtlLocale = ['ar-SA'].includes(newLocale)

    document.body.classList.remove('rtl')

    if (isRtlLocale) {
      document.body.classList.add('rtl')
    }

  })
})