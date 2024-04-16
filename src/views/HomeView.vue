<script setup lang="ts">
import { ref } from "vue";
const count = ref<number>(0);
</script>

<template>
  <button class="btn btn-primary" @click="count++">Primary button</button>
  <div>{{ count }}</div>
</template>
