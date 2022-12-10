import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import Customer from "../Customer/Customer"
import Customerform from "../Customerform/Customerform"
import Ticketform  from '../Ticketlist/Ticketform'

const List2 = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Ticketform/>
      </div>
    </div>
  )
}

export default List2