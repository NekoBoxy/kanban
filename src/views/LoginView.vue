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
  <main>
    <template v-if="store.person.isActive">
      <div>您已成功登入</div>
      <div>開始盤點你的 Kanban 吧!</div>
      <RouterLink to="boards">前往 kanban</RouterLink>
    </template>

    <template v-else>
      <div>請登入</div>
      <a href="/auth">Click to Login</a>
    </template>

  </main>

  <!-- <main>
    <template v-if="route.query.code === 'SUCCESSFUL'">
      <div>您已成功登入</div>
      <div>開始盤點你的 Kanban 吧!</div>
      <RouterLink to="boards">前往 kanban</RouterLink>
    </template>

<template v-else>
      <a href="/auth">Click to Login</a>
    </template>
</main> -->
</template>

<style lang="scss" scoped></style>
