<template>
  <div class="app">
    <h1>Список задач</h1>
    <TaskInput />
    <TaskFilters />
    <TaskList />
  </div>
</template>

<script lang="ts" setup>
import TaskInput from './components/TaskInput.vue';
import TaskFilters from './components/TaskFilters.vue';
import TaskList from './components/TaskList.vue';
</script>

<style scoped>
.app {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  font-family: Arial, sans-serif;
}
</style>