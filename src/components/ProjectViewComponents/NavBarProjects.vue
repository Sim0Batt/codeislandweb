<template>
  <nav class="floating-island">
    <ul class="menu">
      <li v-for="(item, index) in menuItems" :key="index">
        <a :href="item.link" class="menu-item" @click="item.action">{{ item.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>

export default {
  data() {
    return {
      menuItems: [
        { name: 'Home', link: '/' },
        { name: 'Projects', link: '/projects'},
        { name: 'Contacts', link: '#contacts' },
      ],
    }
  },
}
</script>

<style scoped>
.floating-island {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(74, 74, 74, 0.8);
  padding: 10px 20px;
  border-radius: 30px;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  font-family: 'Garamond', serif;
}

.menu {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.menu-item {
  color: white;
  font-size: 18px;
  text-decoration: none;
  padding: 0 12px;
}

.menu-item:not(:last-child)::after {
  content: '|';
  color: white;
  padding-left: 12px;
}

/* Hover effect */
.menu-item:hover {
  text-decoration: underline;
}
</style>
