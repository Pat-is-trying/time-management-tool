<template>
  <div>
    <nav-bar></nav-bar>
    <div class="main-page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import axios from "axios";
import NavBar from "./templates/NavBar.vue";

export default defineComponent({
  components: {
    NavBar,
  },
  setup() {
    console.log("start of setup!");
    const name = "PATRICK";
    let loading = ref(true);
    axios.get("/api/ping").then((response) => {
      setTimeout(function () {
        console.log(loading);
        loading.value = false;
        console.log(loading);
      }, 2000);
    });
    console.log("end of setup!");
    return {
      loading,
      name,
    };
  },
});
</script>

<style>
</style>
