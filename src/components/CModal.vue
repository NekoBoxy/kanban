<script setup lang="ts">
import { ref, onMounted } from "vue";
const props = defineProps({
  cols: Object,
  data: Object,
  status: String
});

const emits = defineEmits([
  "emitSubmit"
]);

const isVisible = ref(false);
const isOut = ref(false);
const results = ref({});
const timer = ref(null);

const handleSubmit = function () {
  // console.log("props.cols: ", props.cols);
  // console.log("results: ", results);

  isOut.value = true;
  emits("emitSubmit", results.value)
  setTimeout(() => {
    isVisible.value = false;
  }, 300)
};

// 動畫說明
// 若統一用 isVisible 來羫的話，離開的特效會因為 isVisible false 先關掉全部而出不來
// 故分兩階段控
const handleCancel = function () {
  isOut.value = true;
  setTimeout(() => {
    isVisible.value = false;
  }, 300)
};

onMounted(async () => {
  clearTimeout(timer.value);
  console.log("props: ", props);


});
</script>

<template>
  <button type="button" @click="() => { isVisible = true, isOut = false }" style="padding: 0.4rem">
    <slot></slot>
  </button>


  <teleport to="body">
    <div v-if="isVisible" class="container modal-mask">
      <!-- 針對可列舉(具 key-value pair)的 cols，找出每個 col 的 key  -->
      <!-- 例：cols 若是 { title: '請輸入姓名', notice: '只接受中文' } -->
      <!-- 那 Object.keys(props.cols) 的 v-for 的 col 就會迴圈列出每個 col 的 key -->
      <div class="row modal-container" :class="{ 'fade-in': isVisible === true, 'fade-out': isOut === true }"
        v-for="(col, index) in Object.keys(props.cols)" :key="index">
        <div class="col-12 col-md-6 modal-box">
          <p>
            {{ props.cols[col] }}
          </p>

          <input type="text" v-model="results[index]" class="w-100" />
        </div>

        <div class="col-12 col-md-6" style="display: flex; justify-content: center;">
          <button class="offset-1 col-5" type="button" @click="handleSubmit">確認</button>
          <button class="col-5" type="button" @click="handleCancel">取消</button>
        </div>

      </div>
    </div>

  </teleport>
</template>

<style lang="scss" scoped>
button {
  padding: 0.125rem;
  margin: 0.5rem;
  font-size: 1rem;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;

  .modal-container {
    background-color: rgb(225, 228, 236);
    border-radius: 20px;
    z-index: 99;
    margin-inline: 0.75rem;
    position: absolute;
    top: 35%;
    padding: 5%;
    width: 90%;
    transition: all 0.3s ease;

    .modal-box {
      margin-bottom: 0.5rem;
      width: 100%;
    }

    @media screen and (min-width: 400px) {
      top: 30%;
      max-width: 500px;
      padding: 1rem;
    }
  }
}

.fade-in {
  animation: fade-in 0.3s ease-in forwards;

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: scale(0.1);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }
}

.fade-out {
  animation: fade-out 0.3s ease-in forwards;

  @keyframes fade-out {
    from {
      opacity: 1;
      transform: scale(1);
    }

    to {
      opacity: 0;
      transform: scale(0.1);
    }
  }
}

// 用 after 做出下方線條
.modal-box p {
  position: relative;

  &::after {
    content: "";
    margin-top: 0.25rem;
    display: block;
    // width: 100%;
    // height: 1px;
    // background-color: gray;
    border-bottom: 1px solid gray;
  }
}
</style>