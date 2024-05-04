<template>
  <main class="container position-relative">
    <div class="row d-flex justify-content-center align-items-center">
      <!-- 登入區 -->
      <!-- <div class=""
        style="max-width: 80%;border: 1px solid antiquewhite; border-radius: 40px; padding: 1rem; background-color: #FFFFFF75; position: absolute; top:50%; left: 50%; transform: translate(-50%, -50%);"> -->

      <div class="col-10 mt-5"
        style="border: 1px solid antiquewhite; border-radius: 40px; padding: 1rem; background-color: #FFFFFF75; backdrop-filter: blur(2px);">

        <div style="font-size: 0.75rem; margin-bottom: 0.5rem;">
          Welcome to Kanban
        </div>

        <h2>開始使用！</h2>

        <div class="row d-flex justify-content-center align-items-center">
          <div class="col-10" style="max-width: 400px">
            <a href="/login" style="text-decoration: none; font-size: 14px; overflow: hidden;">
              <div class="d-flex justify-content-center align-items-center"
                style="border: 1px solid #747775; border-radius: 20px; color: #1f1f1f; font-family: 'Roboto', arial, sans-serif; font-size: 14px; height: 40px; background-color: #FFFFFF;">
                <!-- google icon -->
                <div style="min-width: 20px; height: auto;">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"
                    xmlns:xlink="http://www.w3.org/1999/xlink" style="display: block;">
                    <path fill="#EA4335"
                      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z">
                    </path>
                    <path fill="#4285F4"
                      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z">
                    </path>
                    <path fill="#FBBC05"
                      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z">
                    </path>
                    <path fill="#34A853"
                      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z">
                    </path>
                    <path fill="none" d="M0 0h48v48H0z"></path>
                  </svg>
                </div>
                <span style="line-height: 1rem; padding: 1rem;">Sign in with Google</span>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>
  </main>


  <!-- <div >

    
    <template v-if="route.params.query === 'SUCCESSFUL'">
      <RouterLink to="logout">logout</RouterLink>
    </template>

<template v-else>
      <a href="/auth">login</a>
    </template>
</div> -->
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
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

// const html = document.querySelector('html');

onMounted(() => {
  // console.log("html:", html);
});
</script>

<style lang="scss" scoped>
// .container {
//   background-image: url('https://picsum.photos/1920/1080');
//   background-repeat: no-repeat;
//   background-size: cover;

//   // filter: blur(3.5px);
//   // filter: brightness(0.75); // 會蓋到文字顏色
// }

// 控 svg 大小
// .gsi-material-button-icon {
//   height: 20px;
//   margin-right: 12px;
//   min-width: 20px;
//   width: 20px;
// }</style>
