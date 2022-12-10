import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import Customer from "../Customer/Customer"
import Customerform from "../Customerform/Customerform"
import Ticketform  from '../Ticketlist/Ticketform'
import Ticketcard from '../Ticketlist/Ticketcard'
import Permission from "../Staff/Permission"
const List16 = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
       <Permission />
      </div>
    </div>
  )
}

export default List16;