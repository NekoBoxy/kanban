<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-12 mb-2 d-flex justify-content-around">
          <span>目前有 {{ boardCount }} 張 Kanbans</span>
          <CModal :cols="kanbanTitleAdd">
            新增
          </CModal>
        </div>

        <!-- <div class="col-12 mb-2">
          <label for="addKanban"></label>
          <input type="text" id="addKanban" v-model="userInput" style="width: 50%;" />
          <button type="button" @click="addBoards">
            新增 kanban
          </button>
        </div> -->

        <div class="col-12 mb-2">
          扛棒清單
          <!-- <CModal v-for="item in boardList" :key="item.id">
            {{ item.name }}
            ｜
            <button type="button" @click="editBoard(item.id, item.name)">編輯</button>
            ｜
            <button type="button" @click="delBoard">刪除</button>
          </CModal> -->

          <!-- ori -->
          <div v-for=" item  in  boardList " :key="item.id">
            <RouterLink :to="`/board/${item.id}`">
              {{ item.name }}
            </RouterLink>
            ｜
            <button type="button" @click="editBoard(item.id, item.name)">編輯</button>
            ｜
            <button type="button" @click="delBoard(item.id)">刪除</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
// import { useRoute } from 'vue-router'
import axios from "axios";
import CModal from "@/components/CModal.vue";

// interface editData {
//   id: Number,
//   name: String
// }

// const route = useRoute();
const userInput = ref("");
const boardList = ref([]);
const boardCount = ref(0);
const kanbanTitleAdd = ref({
  name: "Kanban 名稱：",
});

// boardList[0]
// {
//   "id": 3,
//   "name": "134",
//   "createdAt": "2024-05-19T15:23:37.000Z",
//   "updatedAt": "2024-05-19T15:23:37.000Z"
// }

// 取得 board 清單們
const getBoardsList = async function () {
  try {
    const res = await axios({
      method: "get",
      url: "/api/kanban-boards"
    });
    // console.log("res: ", res);

    boardList.value = res.data.data;
    boardCount.value = res.data.total;

  } catch (e) {
    // ...
  }
};

const addBoards = async function () {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/kanban-boards",
      data: {
        name: userInput.value,
      }
    });
    console.log("res: ", res);
    await getBoardsList();
  } catch (err) {
    console.log("err: ", err);
  }
};


const editBoard = async function (id: Number, name: String) {
  try {
    const res = await axios({
      method: "patch",
      url: `/api/kanban-boards/${id}`,
      data: {
        name: name,
      }
    });
    console.log("res: ", res);

  } catch (err) {
    console.log("err: ", err);
  }
};

const delBoard = async function (id) {
  try {
    const res = await axios({
      method: "DELETE",
      url: `/api/kanban-boards/${id}`,
    });
    // console.log("res: ", res);
    await getBoardsList();

  } catch (err) {
    console.log("err: ", err);
  }
};


onMounted(async () => {
  // console.log("route.params.query: ", route.params.query);
  await getBoardsList();
});

</script>

<style lang="scss" scoped></style>
