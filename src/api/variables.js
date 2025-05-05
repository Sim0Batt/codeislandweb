import { ref } from 'vue'

const language = ref('en-EN')
const isAuthenticated = ref(false)

function setLanguage(lang) {
  language.value = lang
}

const AdminPsw = 'admin'
const AdminUser = 'admin'

function login() {
  isAuthenticated.value = true
}

const base_data_prj = {
  "titleIt": "Nuovo Progetto",
  "contentIt": "Contenuto in Italiano",
  "short_descriptionIt": "Breve descrizione in Italiano",
  "titleEn": "New Project",
  "contentEn": "Content in English",
  "short_descriptionEn": "Short description in English",
  "title_es": "Título en Español",
  "description_es": "Descripción en Español",
  "short_description_es": "Breve descripción en Español",
  "tech_list": [],
  "visible": true

}


export { language, setLanguage, AdminPsw, AdminUser, login, isAuthenticated, base_data_prj}
