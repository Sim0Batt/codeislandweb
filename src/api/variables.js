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

export { language, setLanguage, AdminPsw, AdminUser, login, isAuthenticated }
