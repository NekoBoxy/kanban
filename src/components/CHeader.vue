<template>
  <nav class="navbar navbar-expand-sm bg-body-tertiary fixed-top">
    <div class="container-fluid">
      <RouterLink class="navbar-brand" to="/">Kanban</RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 d-flex justify-content-center align-items-center"
          ref="navbarContainer">
          <li class="nav-item" @click="handleClick" @touchend="handleClick">
            <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
          </li>
          <template v-if="store.person.isActive === true">
            <li class="nav-item" @click="handleClick" @touchend="handleClick">
              <RouterLink class="nav-link" to="person">Person</RouterLink>
            </li>

            <li class="nav-item" @click="handleClick" @touchend="handleClick">
              <RouterLink class="nav-link" to="boards">boards</RouterLink>
            </li>
            <li class="nav-item" @click="handleClick" @touchend="handleClick">
              <a class="nav-link" href="logout">Logout</a>
            </li>
          </template>

          <template v-else>
            <li class="nav-item" @click="handleClick" @touchend="handleClick">
              <a class="nav-link" href="login">Login</a>
            </li>
          </template>


          <!-- 下拉選單，暫不開 -->
          <!-- <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider"></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li> -->
        </ul>
        <!-- 搜尋，暫不開 -->
        <!-- <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
      </div>

    </div>
  </nav>
</template>

<script setup lang="ts">
import * as Bootstrap from "bootstrap";
import { ref, onMounted } from "vue";
// import { useRoute, RouterLink } from "vue-router";
import { usePersonStore } from '../stores/userStatus.ts';
// import axios from 'axios';

// const route = useRoute();
const store = usePersonStore();
const navbarContainer = ref(null);
const navbarCollapse = ref(null);

const handleClick = () => {
  navbarCollapse.value.hide();
};

onMounted(() => {
  console.log("store: ", store);

  navbarCollapse.value = new Bootstrap.Collapse(navbarContainer.value, {
    toggle: false
  });
});
</script>


<style scoped lang="scss">
nav {
  opacity: .75;
  backdrop-filter: blur(30px);
}
</style>
