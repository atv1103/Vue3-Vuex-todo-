import { Task } from '@/types/Task';

let tasks: Task[] = [
  { id: 1, title: 'Первая задача', completed: false },
  { id: 2, title: 'Вторая задача', completed: true },
];

export function fetchTasks(): Promise<Task[]> {
  return new Promise(resolve => {
    setTimeout(() => resolve([...tasks]), 500);
  });
}

export function addTask(task: Task): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      tasks.push(task);
      resolve();
    }, 500);
  });
}

export function deleteTask(id: number): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      tasks = tasks.filter(task => task.id !== id);
      resolve();
    }, 500);
  });
}

export function updateTask(updated: Task): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      tasks = tasks.map(task => (task.id === updated.id ? updated : task));
      resolve();
    }, 500);
  });
}