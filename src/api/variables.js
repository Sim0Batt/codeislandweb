import { ref } from 'vue'

const language = ref('en-EN')

function setLanguage(lang) {
  language.value = lang
}

export { language, setLanguage }
