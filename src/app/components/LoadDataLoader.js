import React, { useState, useRef, useEffect } from 'react'
import { Route, useLocation } from 'react-router-dom'
import { loadBranchData } from '../route'

/** 异步加载数据渲染新路由 */
const ASyncLoadNavDataLoader = ({ store, children }) => {
  const location = useLocation()
  const firstUpdate = useRef(true)

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false
      return
    }
    loadBranchData(location.pathname, store)
  }, [location])

  return <Route location={location} render={() => children} />
}

export default ASyncLoadNavDataLoader

// /** 同步等待数据渲染新路由 */
// const SyncNavDataLoader = ({ store, children }) => {
//   const location = useLocation()
//   const [currentLocation, setCurrentLocation] = useState(location)
//   const [previousLocation, setPreviousLocation] = useState(null)

//   // 设置previousLocation的值为currentLocation的意思是在设置其为点击之前的页面的url，
//   // previousLocation有值之后render会优先渲染previousLocation,但其实此时Route组件location根本没有发生改变
//   // 所以页面并不会跳转。又由于新的location对象发生改变，useEffect开始执行loadBranchData去请求数据，
//   // 完成后恢复previousLocation为空，于是Route开始渲染新的location
//   if (location !== currentLocation) {
//     setCurrentLocation(location)
//     setPreviousLocation(currentLocation)
//   }

//   // firstUpdate用于禁止第一次加载，类似didUpdate生命周期效果，为了将第一次请求交给服务器发请求
//   const firstUpdate = useRef(true)
//   useEffect(() => {
//     if (firstUpdate.current) {
//       firstUpdate.current = false
//       return
//     }
//     loadBranchData(location.pathname, store).then(() => {
//       setPreviousLocation(null)
//     })
//   }, [location])

//   // 优先展示previousLocation，为空展示新location
//   return <Route location={previousLocation || location} render={() => children} />
// }

// export default SyncNavDataLoader
