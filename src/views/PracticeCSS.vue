<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-12 mb-2 d-flex justify-content-around">
          <h2>CSS 動畫練習</h2>
        </div>
        <div class="col-12" style="margin: 0 auto">
          <button type="button" @click="handleClick" class="mb-2 w-100">按我</button>
        </div>
        <div class="col-6">
          <div class="box" :class="{ 'fadein': isActived, 'fadeout': !isActived }">
          </div>
        </div>
        <div class="col-6">
          <div class="box" :class="{ 'fadein2': isActived, 'fadeout2': !isActived }">
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
const isActived = ref(false);
const count = ref(0);

const handleClick = function () {
  count.value = count.value + 1;
  // console.log("init, count.value, isActived.value: ", count.value, isActived.value)

  isActived.value = !isActived.value;

  // console.log("end: ", isActived.value);
};

onMounted(() => {
  count.value = count.value + 1;
  // console.log("count.value: ", count.value)
  // console.log("isActived.value: ", isActived.value);
});
</script>

<style lang="scss" scoped>
.box {
  background-color: rgb(50, 226, 124);
  border: 1px solid black;
  border-radius: 50px;
  width: 60px;
  height: 60px;
}

.fadein {
  // name duration timing-function delay iteration-count direction fill-mode
  animation: fadein 1s ease-in forwards;

  @keyframes fadein {
    from {
      background-color: red;
    }

    to {
      background-color: aliceblue;
    }
  }
}

.fadeout {
  animation: fadeout 1s ease-out forwards;

  @keyframes fadeout {
    from {
      background-color: rgb(13, 119, 212);
    }

    to {
      background-color: rgb(211, 226, 76);
    }
  }
}



.fadein2 {
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

.fadeout2 {
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
