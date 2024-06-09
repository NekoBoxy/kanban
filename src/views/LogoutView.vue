<script setup lang="ts">
import { ref, onMounted } from "vue";
import { Axios } from "axios";
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


onMounted(() => {

});
</script>

<template>
  <main class="container position-relative">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-10 mt-5 logout-box">
        <p class="text-center my-2">
          您已成功登出
        </p>
      </div>
    </div>
  </main>

</template>

<style lang="scss" scoped>
.logout-box {
  border: 1px solid antiquewhite;
  border-radius: 40px;
  padding: 1rem;
  background-color: #FFFFFF75;
  backdrop-filter: blur(2px);
}
</style>
