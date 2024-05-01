<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from 'vue-router'
// import { Axios } from "axios";

const route = useRoute();

onMounted(()=>{
  console.log("route.params.query: ", route.params.query);
});

</script>

<template>
  <div>login page</div>
  <div>您已成功登入</div>
</template>

<style lang="sass" scoped>
</style>
