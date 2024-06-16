<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-12 mb-2 d-flex justify-content-around">
          <span style="display: flex; align-items: center;">
            目前有 {{ boardCount }} 張 Kanbans
          </span>
          <!-- <CModal status="create" @emit-submit="createKanban">
            <template v-slot:span>新稱</template>
</CModal> -->
        </div>

        <div class="col-12 mb-2" style="margin: 0 auto;">
          Kanbans List
          <div v-for="item in boardList" :key="item.id" class="mb-2">
            <CModalEdit status="edit" :data="item" @on-edit="editBoard">
              <RouterLink :to="`/board/${item.id}`">
                {{ item.name }}
              </RouterLink>
              ｜
              <button type="button" @click="editBoard">編輯</button>
              ｜
              <button type="button" @click="delBoard(item.id)">刪除</button>
            </CModalEdit>
          </div>


          <!-- ori -->
          <!-- <div v-for=" item in boardList " :key="item.id" class="mb-2">
            <RouterLink :to="`/board/${item.id}`">
              {{ item.name }}
            </RouterLink>
            ｜
            <button type="button" @click="editBoard(item.id, item.name)">編輯</button>
            ｜
            <button type="button" @click="delBoard(item.id)">刪除</button>
          </div> -->
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
// import { useRoute } from 'vue-router'
import axios from "axios";
// import CModal from "@/components/CModal.vue";
// import CModalEdit from "@/components/CModalEdit.vue";
import CModalEdit from "@/components/CModalEdit.vue";

const boardList = ref([]);
const boardCount = ref(0);
// const kanbanTitleAdd = ref({
//   title: "設定 Kanban 名稱",
// });
// const kanbanTitleEdit = ref({
//   title: "修改 Kanban 名稱",
// });

// const emitGet = ref([]);
// boardList[0]
// {
//   "id": 3,
//   "name": "134",
//   "createdAt": "2024-05-19T15:23:37.000Z",
//   "updatedAt": "2024-05-19T15:23:37.000Z"
// }


// 處理 CModal 的資料
const createKanban = async function (emitsEvent) {
  // console.log("emitsEvent[0]: ", emitsEvent[0]);

  // emitGet.value = emitsEvent[0];

  try {
    const res = await axios({
      method: "POST",
      url: "/api/kanban-boards",
      data: {
        name: emitsEvent[0],
      }
    });
    // console.log("res: ", res);
    await getBoardsList();
  } catch (err) {
    console.log("err: ", err);
  }
};

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

// const addBoards = async function () {
//   try {
//     const res = await axios({
//       method: "POST",
//       url: "/api/kanban-boards",
//       data: {
//         name: userInput.value,
//       }
//     });
//     console.log("res: ", res);
//     await getBoardsList();
//   } catch (err) {
//     console.log("err: ", err);
//   }
// };


const editBoard = async function (event) {
  console.log("父層")
  console.log("event: ", event); // 會是子層的 result
  // console.log("event.id: ", event.id);


  try {
    const res = await axios({
      method: "patch",
      url: `/api/kanban-boards/${event.id}`,
      data: {
        name: event.title,
      }
    });
    console.log("res: ", res);

    await getBoardsList();

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
