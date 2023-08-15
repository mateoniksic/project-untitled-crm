import { Outlet } from "react-router-dom"

function AppLayout() {
  return (
    <div>
      AppLayout
      <hr></hr>
      <Outlet/>
    </div>
  )
}

export default AppLayout
