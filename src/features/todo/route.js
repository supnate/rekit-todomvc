import {
  App,
} from './';

export default {
  path: 'todo/:filter?',
  name: 'Todo',
  childRoutes: [
    { path: '', name: 'App', component: App },
  ],
};
