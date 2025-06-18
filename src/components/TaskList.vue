<template>
    <ul class="task-list">
      <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
    </ul>
  </template>
  
  <script lang="ts" setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  import TaskItem from './TaskItem.vue';
  
  const store = useStore();
  const tasks = computed(() => store.getters['tasks/filteredTasks']);
  </script>
  
  <style scoped>
  .task-list {
    list-style: none;
    padding: 0;
  }
  </style>