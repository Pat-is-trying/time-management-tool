<template>
  <div>
    <h1>{{ loading }}</h1>
    <div v-if="loading">
      <h1>LOADING</h1>
    </div>
    <div v-else class="container">
      <h2>{{ name }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import axios from "axios";

export default defineComponent({
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
