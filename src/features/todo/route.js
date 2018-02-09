import {
  App,
} from './';

export default {
  path: 'todo',
  name: 'Todo',
  childRoutes: [
    { path: '', name: 'App', component: App },
  ],
};
