import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import Project from '../../pages/Project/Project'
import Stafflist from '../../pages/Staff/Stafflist'
const List8 = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Stafflist/>
      </div>
    </div>
  )
}

export default List8