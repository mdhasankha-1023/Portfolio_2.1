import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Projects from '../Pages/Projects/Projects';
import AddProjects from '../Pages/AddProjects/AddProjects';
import UpdateProject from '../Pages/UpdateProject/UpdateProject';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: 'projects',
                element: <Projects/>,
                loader: () => fetch('http://localhost:5000/projects')
            },
            {
                path: 'add-project',
                element: <AddProjects/>
            },
            {
                path: 'update-project/:id',
                element: <UpdateProject/>,
                loader: ({params}) => fetch(`http://localhost:5000/projects/${params.id}`)
            },
        ]
    }
])

export default router;