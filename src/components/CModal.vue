<script setup lang="ts">
import { ref, onMounted } from "vue";
const props = defineProps({
  cols: Object,
  data: Array
});

// const emits = defineEmits({

// });

const isVisible = ref(false);
const isOut = ref(false);
const results = ref({});
const timer = ref(null);

const handleSubmit = function () {
  console.log("props.data: ", props.data);
  console.log("results: ", results);
  isVisible.value = false;
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
  <button type="button" @click="() => { isVisible = true, isOut = false }">
    <slot></slot>
  </button>

  <teleport to="body">
    <div v-if="isVisible" class="modal-mask">
      <!-- 針對可列舉(具 key-value pair)的 cols，找出每個 col 的 key  -->
      <!-- 例：cols 若是 { title: '請輸入姓名', notice: '只接受中文' } -->
      <!-- 那 Object.keys(props.cols) 的 v-for 的 col 就會迴圈列出每個 col 的 key -->
      <div class="modal-container" :class="{ 'fade-in': isVisible === true, 'fade-out': isOut === true }"
        v-for="(col, index) in Object.keys(props.cols)" :key="index">
        <div style="margin-bottom: 0.5rem; width: 90%;">
          <label :for="props.cols[col]">
            {{ props.cols[col] }}
          </label>
          <input type="text" :name="props.cols[col]" v-model="results[index]" class="w-100" />
        </div>

        <div style="display: flex; justify-content: space-around;">
          <button type="button" @click="handleSubmit">確認</button>
          <button type="button" @click="handleCancel">取消</button>
        </div>
      </div>
    </div>

  </teleport>
</template>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  .modal-container {
    background-color: rgb(225, 228, 236);
    border-radius: 20px;
    position: absolute;
    top: 40%;
    padding: 5%;
    width: 90%;
    z-index: 99;
    margin-inline: 0.75rem;
    transition: all 0.3s ease;

    // @media screen and (min-width: 400px) {
    //   top: 30%;
    //   left: 0;
    //   max-width: 300px;
    //   padding: 1rem;
    //   margin: 0 20vw;
    // }
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
      transform: scale(0);
    }
  }
}
</style>