import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import Project from '../../pages/Project/Project'
import Projectform from '../../pages/Project/Projectform'
const List6 = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Projectform/>
      </div>
    </div>
  )
}

export default List6