import Home from "../components/Home";
import User from "../components/User";
import Task from "../components/Task";

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
    }
];

export default routers;
