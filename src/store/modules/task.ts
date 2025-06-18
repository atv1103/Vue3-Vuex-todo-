import { Module } from 'vuex';
import { Task } from '@/types/Task';
import * as api from '@/api/tasksApi';

interface TasksState {
  tasks: Task[];
  filter: 'all' | 'completed' | 'active';
}

export const tasks: Module<TasksState, any> = {
  namespaced: true,
  state: () => ({
    tasks: [],
    filter: 'all',
  }),
  getters: {
    filteredTasks(state) {
      if (state.filter === 'completed') return state.tasks.filter(t => t.completed);
      if (state.filter === 'active') return state.tasks.filter(t => !t.completed);
      return state.tasks;
    },
  },
  mutations: {
    setTasks(state, tasks: Task[]) {
      state.tasks = tasks;
    },
    addTask(state, task: Task) {
      state.tasks.push(task);
    },
    removeTask(state, id: number) {
      state.tasks = state.tasks.filter(task => task.id !== id);
    },
    updateTask(state, updated: Task) {
      const index = state.tasks.findIndex(t => t.id === updated.id);
      if (index !== -1) state.tasks[index] = updated;
    },
    setFilter(state, filter: 'all' | 'completed' | 'active') {
      state.filter = filter;
    },
  },
  actions: {
    async loadTasks({ commit }) {
      const tasks = await api.fetchTasks();
      commit('setTasks', tasks);
    },
    async createTask({ commit }, title: string) {
      const newTask: Task = { id: Date.now(), title, completed: false };
      await api.addTask(newTask);
      commit('addTask', newTask);
    },
    async deleteTask({ commit }, id: number) {
      await api.deleteTask(id);
      commit('removeTask', id);
    },
    async toggleTaskStatus({ commit, state }, id: number) {
      const task = state.tasks.find(t => t.id === id);
      if (task) {
        const updated = { ...task, completed: !task.completed };
        await api.updateTask(updated);
        commit('updateTask', updated);
      }
    },
  },
};