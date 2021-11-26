<template>
  <div class="container">
    <div class="row align-items-start justify-content-center">
      <card v-for="task in openTasks" :key="task.id" :imageUrl="task.imageUrl">
        <p class="card-text">
          {{ task.text }}
        </p>
      </card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import Card from "../templates/Card.vue";

export default defineComponent({
  components: {
    Card,
  },
  data() {
    return {
      openTasks: [
        {
          id: 1,
          text: "This is filler text 1",
          imageUrl:
            "https://m.media-amazon.com/images/M/MV5BOGZhM2FhNTItODAzNi00YjA0LWEyN2UtNjJlYWQzYzU1MDg5L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        },
        {
          id: 2,
          text: "This is filler text 2",
        },
        {
          id: 3,
          text: "This is filler text 3",
          imageUrl: "https://i.ytimg.com/vi/iBIspevW1Pc/maxresdefault.jpg",
        },
        {
          id: 4,
          text: "This is filler text 4",
        },
        {
          id: 5,
          text: "This is filler text 5",
        },
      ],
    };
  },
  setup() {},
});
</script>

<style scoped>
</style>