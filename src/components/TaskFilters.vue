<template>
    <div class="filters">
      <button
        v-for="option in ['all', 'active', 'completed']"
        :key="option"
        @click="setFilter(option)"
        :class="{ active: currentFilter === option }"
      >
        {{ labelMap[option] }}
      </button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { computed } from 'vue';
  import { useStore } from 'vuex';
  
  const store = useStore();
  const currentFilter = computed(() => store.state.tasks.filter);
  const labelMap: Record<string, string> = {
    all: 'Все',
    active: 'Активные',
    completed: 'Выполненные',
  };
  function setFilter(filter: 'all' | 'active' | 'completed') {
    store.commit('tasks/setFilter', filter);
  }
  </script>
  
  <style scoped>
  .filters {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  button {
    padding: 0.5rem 1rem;
    cursor: pointer;
  }
  .active {
    background-color: #42b983;
    color: white;
  }
  </style>