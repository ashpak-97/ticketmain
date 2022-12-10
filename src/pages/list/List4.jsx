import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import Customer from "../Customer/Customer"
import Customerform from "../Customerform/Customerform"
import Ticketform  from '../Ticketlist/Ticketform'
import Ticketcard from '../Ticketlist/Ticketcard'
import Ticketdetailpage from '../Ticketlist/Ticketdetailpage'
const List4 = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Ticketdetailpage/>
      </div>
    </div>
  )
}

export default List4;