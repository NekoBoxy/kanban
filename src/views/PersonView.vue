<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';

const avatar = ref("");
const userName = ref("");

onMounted(async () => {
  try {
    const res = await axios({
      method: 'get',
      url: '/api/person',
    });
    console.log("res: ", res);
    avatar.value = res.data.picture;
    userName.value = res.data.name;
  } catch (e) {
    console.log(e);
  }
});
</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-4">
          <img :src="avatar" alt="" srcset="" style="max-width: 100%; aspect-ratio: 100%;">
        </div>
        <div class="col-8 d-flex align-items-center">
          <span>{{ userName }}</span>
        </div>
        <div class="col-12 mt-3">
          <span>嗨嗨，{{ userName }}</span>
          <span class="d-block">開始建立你的 Kanban 吧!</span>
          <RouterLink to="boards">前往 Kanban</RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
