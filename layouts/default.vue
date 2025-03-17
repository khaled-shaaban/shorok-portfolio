
<script setup>
const { locale } = useI18n()

const isRtlLocale = ['ar-SA'].includes(locale.value)

useHead({
  bodyAttrs: {
    class: isRtlLocale ? 'default-layout rtl' : 'default-layout'
  }
})
</script>

<template>
  <div id="app">
    <slot />
  </div>
</template>

<style lang="scss">
@use "@/assets/scss/main.scss";
</style>