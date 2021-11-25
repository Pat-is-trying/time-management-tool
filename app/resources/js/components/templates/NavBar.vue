<template>
  <nav class="top-navbar">
    <div class="navbar-section">
      <router-link class="navbar-item" to="/dashboard"> Dashboard </router-link>
      <router-link class="navbar-item" to="/open-items">
        Open Tasks
      </router-link>
    </div>
    <div class="navbar-section">
      <a class="navbar-item" href="#">History</a>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {},
});
</script>

<style scoped>
.top-navbar {
  display: flex;
  background: coral;
  justify-content: space-between;
  padding: 4px;
}
.navbar-section {
  display: flex;
  flex-direction: row;
}
.navbar-item {
  margin: 6px;
  padding: 4px;
  text-decoration: none;
}
</style>