import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Table from '../../components/table/Table';
import Widget from '../../components/widgets/Widget';
import './home.scss'
export const Home = () => {
  
  return (
    <div className="home">
      <Sidebar/>
      <div className="homecontainer">
        <Navbar/>
        <div className="widgets">
          <Widget type="bovins"/>
          <Widget type="fournisseurs"/>
          <Widget type="employees"/>
          <Widget type="donneeX"/>
        </div>
        <div className="charts">
        <Featured/>
        <Chart aspect={2.6/1} title="Last 6 months data"/>
        </div>
       <div className="listcontainer">
         <div className="listtitle">List </div>
         <Table/>
       </div>
      </div>
    </div>
  )
}
export default Home;