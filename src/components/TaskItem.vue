<template>
    <li class="task-item">
      <input type="checkbox" :checked="task.completed" @change="toggle" />
      <span :class="{ done: task.completed }">{{ task.title }}</span>
      <button @click="remove">Удалить</button>
    </li>
  </template>
  
  <script lang="ts" setup>
  import { defineProps } from 'vue';
  import { useStore } from 'vuex';
  import type { Task } from '@/types/Task';
  
  const props = defineProps<{ task: Task }>();
  const store = useStore();
  
  function toggle() {
    store.dispatch('tasks/toggleTaskStatus', props.task.id);
  }
  
  function remove() {
    store.dispatch('tasks/deleteTask', props.task.id);
  }
  </script>
  
  <style scoped>
  .task-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 1px solid #ddd;
  }
  .done {
    text-decoration: line-through;
    color: #888;
  }
  button {
    margin-left: 1rem;
  }
  </style>