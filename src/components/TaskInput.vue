<template>
    <div class="task-input">
      <input v-model="title" @keyup.enter="submit" placeholder="Новая задача" />
      <button @click="submit">Добавить</button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const title = ref('');
  
  function submit() {
    if (title.value.trim()) {
      store.dispatch('tasks/createTask', title.value);
      title.value = '';
    }
  }
  </script>
  
  <style scoped>
  .task-input {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  input {
    flex: 1;
    padding: 0.5rem;
  }
  button {
    padding: 0.5rem 1rem;
  }
  </style>