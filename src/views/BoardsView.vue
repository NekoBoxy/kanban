<script setup lang="ts">
import { ref, onMounted } from "vue";
// import { useRoute } from 'vue-router'
import axios from "axios";

// const route = useRoute();
const userInput = ref("");

const addKanban = async function () {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/kanban-boards",
      params: {
        name: userInput.value,
      }
    });
    console.log("res: ", res);
  } catch (err) {
    console.log("err: ", err);
  }
};

onMounted(() => {
  // console.log("route.params.query: ", route.params.query);
});

</script>

<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <label for="addKanban"></label>
          <input type="text" id="addKanban" v-model="userInput">
          <button type="button" @click="addKanban">
            新增 kanban
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
