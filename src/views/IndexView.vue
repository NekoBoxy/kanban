<template>
  <CHeader />

  <RouterView></RouterView>

</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import CHeader from '@/components/CHeader.vue';
import axios from 'axios';

import { usePersonStore } from '../stores/userStatus';

const store = usePersonStore();


// const checkLoginStatus = async function () {
//   if (store.person.isActive === true) {
//     userName.value = store.person.name;
//   }

//   console.log("userName.value: ", userName.value);
// };

const getUserStatus = async function () {
  try {
    const res = await axios({
      method: "get",
      url: "/api/person"
    });

    store.updatePerson(res.data);
    // console.log("res: ", res);


  } catch (e) {
    // ...
  }

};

onMounted(async () => {
  await getUserStatus();
})

</script>

<style lang="scss" scoped></style>
