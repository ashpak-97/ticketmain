import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import Customer from "../Customer/Customer"
import Customerform from "../Customerform/Customerform"
import Ticketform  from '../Ticketlist/Ticketform'
import Email from '../Email/Email'
import Company from '../Company/Company'
const List13 = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Company/>
      </div>
    </div>
  )
}

export default List13