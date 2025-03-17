<script setup>
const { locale, locales, setLocale } = useI18n()

const activeLocale = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value)
  }
})

</script>

<template>
  <form class="language-switcher-container">
    <SelectButton id="locale-select" v-model="activeLocale" :options="locales" optionLabel="name" optionValue="code" />
  </form>
</template>