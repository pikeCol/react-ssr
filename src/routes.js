import Example from './example'
import Topics from './components/topics'
const routes = [
  {
    path: "/",
    component: Example,
    routes: [
      {
        path: "/topics",
        component: Topics,
      }
    ]
  },
]

export default routes;