<template>
  <main class="container position-relative">
    <div class="row d-flex justify-content-center align-items-center">
      <template v-if="!store.person.isActive">
        <div class="col-10 mt-5"
          style="border: 1px solid antiquewhite; border-radius: 40px; padding: 1rem; background-color: #FFFFFF75; backdrop-filter: blur(2px);">

          <div style="font-size: 0.75rem; margin-bottom: 0.5rem;">
            Welcome to Kanban
          </div>

          <h2>開始使用！</h2>

          <div class="text-center">
            <a href="/auth">
              <CGoogleLogin />
            </a>

            <!-- <CGoogleLogin @parent-login="handleLogin" style="margin: 0 auto;" /> -->
          </div>
        </div>
      </template>

      <template v-else>
        <div>前往 {{ store.person.name }} 的扛棒一覽</div>
        <RouterLink to="boards">點我去</RouterLink>
      </template>

    </div>
  </main>
</template>

<script setup lang="ts">
// import { ref } from "vue";
import { RouterLink } from "vue-router";
import { usePersonStore } from '../stores/userStatus';
import CGoogleLogin from '@/components/CGoogleLogin.vue'

const store = usePersonStore();

// const handleLogin = function () {
//   console.log("被點了");
//   // const domain = location.origin;
//   // window.location.href(`${domain}/login`);
//   window.location.href = location.origin + '/auth'
//   // window.open(`${domain}/login`);
// };
</script>

<!-- <style lang="scss" scoped>
.container {
  background-image: url('https://picsum.photos/1920/1080');
  background-repeat: no-repeat;
  background-size: cover;

  // filter: blur(3.5px);
  // filter: brightness(0.75); // 會蓋到文字顏色
}

// 控 svg 大小
.gsi-material-button-icon {
  height: 20px;
  margin-right: 12px;
  min-width: 20px;
  width: 20px;
}
</style> -->
