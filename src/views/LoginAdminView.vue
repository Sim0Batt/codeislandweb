<template>
  <div class="login-container">
    <form @submit.prevent="handleSubmit" class="login-form">
      <h2 style="font-weight: bold; color: #9dc12a;">Admin Login</h2>
      <div class="form-group">
        <label style="color: black;" for="username">Username:</label>
        <input
          type="text"
          id="username"
          v-model="email"
          required
          placeholder="Enter your email"
        >
      </div>
      <div class="form-group">
        <label style="color: black;" for="password">Password:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          required
          placeholder="Enter your password"
        >
      </div>
      <button type="submit" class="login-button">Login</button>
      <p v-if="error" class="error-message">{{ error }}</p>
    </form>
  </div>
</template>

<script>
import { AdminPsw, AdminUser, login } from '@/api/variables'
import router from '@/router'  // Changed import

export default {
  name: 'LoginAdminView',
  data() {
    return {
      email: '',
      password: '',
      error: '',
      psw: AdminPsw,
      user: AdminUser
    }
  },
  methods: {
    handleSubmit() {
      if (!this.email || !this.password) {
        this.error = 'Please fill in all fields'
        return
      }
      if(this.email !== this.user || this.password !== this.psw){
        this.error = 'Invalid email or password'
        return
      }
      login()
      router.push({ name: 'AdminPage' })
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.login-form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.login-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.login-button:hover {
  background-color: #9dc12a;
}

.error-message {
  color: red;
  margin-top: 1rem;
  text-align: center;
}
</style>
