<template>
  <div class="container">
    <template v-if="route.params.query === 'SUCCESSFUL'">
      <RouterLink to="logout">logout</RouterLink>
    </template>

    <template v-else>
      <a href="/auth">login</a>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { axios } from "axios";

const route = useRoute();

// const count = ref<number>(0);
// const checkLogin = function(){
//   try{
//     const res = axios({
//       method: "get",
//       url: ""
//     });
//     console.log("res: ", res);
//   }catch(err){
//     console.log(err);
//   }
// };


</script>

<style lang="sass" scoped>
</style>
