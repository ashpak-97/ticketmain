import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import Project from '../../pages/Project/Project'
import Workorder from '../../pages/Workorder/Workorder'
const List10 = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Workorder/>
      </div>
    </div>
  )
}

export default List10