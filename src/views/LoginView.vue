<script setup lang="ts">
import { ref, onMounted } from "vue";
// import { useRoute } from 'vue-router'
// import axios from "axios";
import { usePersonStore } from '../stores/userStatus';
const store = usePersonStore();


onMounted(async () => {
});

</script>

<template>
  <main class="container position-relative">
    <div class="row d-flex justify-content-center align-items-center">
      <div class="col-10 mt-5 logout-box">
        <div class="text-center my-2">
          <template v-if="store.person.isActive">
            <p>您已成功登入</p>
            <RouterLink to="boards">前往 Kanban</RouterLink>
          </template>

          <template v-else>
            <div>請登入</div>
            <a href="/auth">Click to Login</a>
          </template>

        </div>
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
