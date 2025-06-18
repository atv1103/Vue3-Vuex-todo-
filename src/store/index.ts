import { createStore } from 'vuex';
import { tasks } from './modules/task';

export default createStore({
  modules: {
    tasks,
  },
});