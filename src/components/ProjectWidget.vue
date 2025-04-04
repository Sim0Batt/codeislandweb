<template>
  <div>
    <v-btn @click="fetchData">{{ message }}</v-btn>
  </div>
</template>

<script>
import { fetchData } from '@/api/api'

export default {
  data() {
    return { message: 'ApiCall' }
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetchData()
        this.message = response || 'No message received'
        console.log('projects: ' + this.message)
      } catch (error) {
        console.error('Error fetching data:', error)
        this.message = 'Error loading data'
      }
    },
  },
}
</script>
