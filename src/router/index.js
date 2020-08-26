import Vue from 'vue';
import VueRouter from 'vue-router';
// import Home from '../views/Home.vue';
import Login from '../components/Auth/Login.vue';
import Signup from '../components/Auth/Signup.vue';
import Todo from '../components/Todo.vue';
import Tasks from '../components/Tasks.vue';
import NotesModal from '../components/NotesModal.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'todo',
    component: Todo,
    children: [
      {
        path: 'list/:id',
        name: 'tasks',
        components: { tasks: Tasks },
        children: [
          {
            path: 'task/:taskId',
            name: 'notes',
            components: { notes: NotesModal },
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
