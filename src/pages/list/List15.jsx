import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import Customer from "../Customer/Customer"
import Customerform from "../Customerform/Customerform"
import Ticketform  from '../Ticketlist/Ticketform'
import Email from '../Email/Email'
import Customerdetails from "../Customerdetails/Customerdetails"
import Lastmodified from '../Lastmodified/Lastmodified'
const List15 = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Lastmodified/>
      </div>
    </div>
  )
}

export default List15