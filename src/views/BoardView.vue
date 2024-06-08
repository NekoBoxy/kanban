<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-12 mb-2">
          <RouterLink to="/boards">Kanbans</RouterLink>
          > {{ parentBoardTitle }}
        </div>
        <div class="col-12 mb-2">
          <ul>
            <li v-for="item in subBoardContent" :key="item.id">
              {{ item.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from 'vue-router'
import axios from "axios";

const route = useRoute();
const parentBoardTitle = ref("");
const subBoardContent = ref([]);

// 取得指定 board 的 title
const getBoardTitle = async function (id: String) {
  try {
    const res = await axios({
      method: "get",
      url: `/api/kanban-boards/${id}`,
    });
    // console.log("title res: ", res);
    parentBoardTitle.value = res.data.name;

  } catch (e) {
    // ...
  }
};


// 取得指定 board 內的項目
const getSubContent = async function (id: String) {
  try {
    const res = await axios({
      method: "get",
      url: "/api/kanban-lists/",
      params: {
        boardId: id
      }
    });
    console.log("項目 res: ", res);
    subBoardContent.value = [...res.data.data];

    // {
    //   "id": 3,
    //   "name": "打東東",
    //   "order": 2,
    //   "createdAt": "2024-06-04T13:31:46.000Z",
    //   "updatedAt": "2024-06-04T13:31:46.000Z"
    // }

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

const delBoard = async function () {
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


onMounted(async () => {
  // console.log("route.params.query: ", route.params.query);
  // pageId.value = route.params.id;
  await getBoardTitle(route.params.id);
  await getSubContent(route.params.id);
});

</script>

<style lang="scss" scoped></style>
