import Home from "../components/Home";
import User from "../components/User";
import Task from "../components/Task";
import TaskDetail from '../components/TaskDetail'

const routers = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },{
        path: '/user',
        name: 'User',
        component: User
    },{
        path: '/task',
        name: 'Task',
        component: Task
    },{
      path: '/taskDetail/:taskId',
      name: 'TaskDetail',
      component: TaskDetail
    }
];

export default routers;
