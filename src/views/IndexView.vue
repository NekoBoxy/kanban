<template>
  <CHeader />
  <RouterView />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import CHeader from '@/components/CHeader.vue';
import axios from 'axios';

import { usePersonStore } from '../stores/userStatus';

const personStore = usePersonStore();

onMounted(() => {
  // axios({
  //   method: 'get',
  //   url: '/api/person',
  // }).then((res) => {
  //   console.log("res.data:", res.data);
  //   personStore.updatePerson(res.data);

  //   console.log("personStore.person:", personStore.person);
  // });

})

</script>

<style lang="scss" scoped></style>
