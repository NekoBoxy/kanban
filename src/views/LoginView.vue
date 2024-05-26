<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from 'vue-router'
import axios from "axios";
import { usePersonStore } from '../stores/userStatus.ts';

const route = useRoute();
const store = usePersonStore();

const getUserInfo = async function () {
  try {
    const res = await axios({
      method: "get",
      url: "/api/person"
    })
    console.log("res: ", res);

    store.updatePerson(res.data);
  } catch (err) {
    console.log("err: ", err);
  }
};


onMounted(async () => {
  // console.log("route: ", route);
  await getUserInfo();
});

</script>

<template>
  <main>
    <template v-if="route.query.code === 'SUCCESSFUL'">
      <div>您已成功登入</div>
      <div>開始盤點你的 Kanban 吧!</div>
      <RouterLink to="boards">前往 kanban</RouterLink>
      <!-- Login successful. <a href="/auth/logout">Logout</a> -->
    </template>

    <template v-else>
      <a href="/auth">Click to Login</a>
    </template>
  </main>
</template>

<style lang="scss" scoped></style>
