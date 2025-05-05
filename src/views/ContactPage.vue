<template>
  <div class="container">
    <div>
      <h1 class="title">CODE ISLAND S.L.</h1>
      <p class="p1">Registered office</p>
      <p>Calle Nicolás Estévanez, 30A Prta.117, 35007, Las Palmas De Gran Canaria, España</p>
      <p class="p1">Operational headquarters</p>
      <p>Calle Aguadulce, 25, Planta 3, Puerta 11, 35004, Las Palmas de Gran Canaria, España</p>
    </div>
    <form @submit.prevent="send_new_email">
      <div class="form-row">
        <label class="text" for="name">Name:</label>
        <input class="name-input" type="text" id="name" v-model="form.name" required />
      </div>
      <div class="form-row">
        <label class="text" for="surname">Surname:</label>
        <input class="name-input" type="text" id="surname" v-model="form.surname" required />
      </div>
      <div class="form-row">
        <label class="text" for="phone">Phone Number:</label>
        <input class="name-input" type="text" id="phone" v-model="form.phone" required />
      </div>
      <div class="form-row">
        <label class="text" for="email">Email:</label>
        <input class="name-input" type="text" id="email" v-model="form.email" required />
      </div>
      <div class="form-row">
        <label class="text" for="company">Company Name:</label>
        <input class="name-input" type="text" id="company" v-model="form.company" required />
      </div>

      <div>
        <label class="text">Technologies:</label>
        <div>
            <label class="tech-icon"><input type="radio" value="Consulting" v-model="form.tech" /> Consulting</label>
            <label class="tech-icon"><input type="radio" value="Web development" v-model="form.tech" /> Web development</label>
            <label class="tech-icon"><input type="radio" value="UX/UI Design" v-model="form.tech" /> UX/UI Design</label>
            <label class="tech-icon"><input type="radio" value="Cloud services" v-model="form.tech" /> Cloud services</label>
            <label class="tech-icon"><input type="radio" value="Mobile development" v-model="form.tech" /> Mobile development</label>
            <label class="tech-icon"><input type="radio" value="Internet of things" v-model="form.tech" /> Internet of things</label>
        </div>
      </div>

      <div>
        <label class="text" for="tech">Company Type:</label>
        <div class="list-container">
          <select class="select-company" id="tech" v-model="form.CompanyType">
            <option disabled value="">Select Company Type</option>
            <option value="Startup - Early Stage">Startup - Early Stage</option>
            <option value="Startup - Late Stage">Startup - Late Stage</option>
            <option value="Small or Medium-sized Business">Small or Medium-sized Business</option>
            <option value="Enterprise">Enterprise</option>
            <option value="Non Prois">Non Prois</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <label class="text" for="message">Message:</label>
      <textarea class="message-input" id="message" v-model="form.message" required></textarea>

      <button class="submit-btn" type="submit">Send</button>
    </form>
  </div>
  <NavBarProjects />
</template>
<script>

import { sendEmail } from '@/api/api';
import NavBarProjects from '@/components/ProjectViewComponents/NavBarProjects.vue';

export default {
  components:{
    NavBarProjects
  },
  data() {
    return {
      form: {
        name: '',
        surname: '',
        phone: '',
        email: '',
        company: '',
        message: '',
        tech: '',
        CompanyType: '',
      }
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.form);
    },
    async send_new_email() {
      try {
        const response = await sendEmail(this.form)
        this.message = response || 'No message received'
      } catch (error) {
        console.error('Error fetching data:', error)
        this.message = 'Error loading data'
      }
    },
  }
}
</script>
<style scoped>
.container {
  margin: 2.5em;
  padding: 3rem;
  background-color: #363732;
  border-radius: 10px;
  margin-top: 5em;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.text{
  color: white;
  font-size: 150%;
}
.name-input{
  width: 20%;
  background-color: white;
  border-radius: 10px;
}
.message-input{
  background-color: white;
  width: 50%;
  border-radius: 10px;
}
.submit-btn{
  background-color: white;
  color: #9dc12a;
  width: 20%;
  align-self: center;
  position: relative;
  border-radius: 10px;
  height: 50px;
  font-size: 30px;
  font-weight: bold;
}
.logo{
  position: absolute;
  top: 20px;
  right: 20px;
}
.tech-icon{
  margin: 10px;
  font-size: 15px;
}
.title{
  color: #9dc12a;
  font-weight: bold;
}
.p1{
  text-decoration: underline;
  margin-top: 10px;
}
.list-container{
  background-color: white;
  width: 20%;
}
.select-company{
  color: black;
  font-size: 120%;
  text-align: center;
}
.form-row {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>
