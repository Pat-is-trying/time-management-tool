<template>
  <div class="col-lg-4 d-flex align-items-stretch">
    <div class="card shadow-lg rounded w-75 m-3">
      <img :src="imageUrl" class="card-img-top" alt="..." />
      <div class="card-body">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  name: "Card",
  props: {
    imageUrl: {
      type: String,
      required: false,
      default:
        "https://cdn.pixabay.com/photo/2019/01/19/13/12/synthwave-3941721_960_720.jpg",
    },
  },
  setup(props) {},
});
</script>

<style scoped>
.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}
.card {
  background-color: rgba(251, 139, 38, 0.8);
  transition: 0.3s;
}
.card:hover {
  transform: scale(1.15);
}
</style>