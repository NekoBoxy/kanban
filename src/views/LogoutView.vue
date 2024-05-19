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
  <main>
    <div>logout page</div>
    <div>您已成功登出</div>
  </main>

  <!-- <div class="container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
      <div class="col">Column</div>
      <div class="col">Column</div>
      <div class="col">Column</div>
      <div class="col">Column</div>
    </div>
  </div> -->
  <div class="container">
    <div class="row">
      <div class="col-sm-3">
        Level 1: .col-sm-3
      </div>
      <div class="col-sm-9">
        <div class="row">
          <div class="col-8 col-sm-6">
            Level 2: .col-8 .col-sm-6
          </div>
          <div class="col-4 col-sm-6">
            Level 2: .col-4 .col-sm-6
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.container div {
  border: 1px solid black;
}
</style>
