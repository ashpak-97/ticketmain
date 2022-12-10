import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import Project from '../../pages/Project/Project'
import Staffform from '../../pages/Staff/Staffform'
const List9 = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Staffform/>
      </div>
    </div>
  )
}

export default List9