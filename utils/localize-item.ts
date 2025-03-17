export default function(translations: Array<any>) {

  const { localeProperties } = useI18n()
  
  if (translations.hasOwnProperty(localeProperties.value.shortCode)) {
    return translations[localeProperties.value.shortCode]
  }

  const first_key: any = Object.keys(translations)[0]

  return translations[first_key]

}