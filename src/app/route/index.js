// import Home from '../pages/Home'
// import Detail from '../pages/detail'
import loadable from '@loadable/component'
import { getUsers } from '../store/global/actions'
import { matchRoutes } from 'react-router-config'

const Home = loadable(() => import(/* webpackChunkName: "pages-home" */ '../pages/Home'))
const Detail = loadable(() => import(/* webpackChunkName: "pages-detail" */ '../pages/Detail'))

const routes =  [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/detail',
    component: Detail,
    loadData: (store) => store.dispatch(getUsers())
  }
]

export default routes

export const loadBranchData = (pathname, store) => {
  const branch = matchRoutes(routes, pathname)

  const promises = branch.map(({ route, match }) => {
    return route.loadData ? route.loadData(store, match) : Promise.resolve(null)
  })
  return Promise.all(promises)
}