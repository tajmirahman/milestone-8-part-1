// import DaisyNav from "./components/DaisayNav/DaisyNav"
import AreaChart from "./components/AreaChart/AreaChart"
import LineCharts from "./components/LineCharts/LineCharts"
import Navber from "./components/Navber/Navber"
import Phones from "./components/Phones/Phones"
import PriceOptions from "./components/PriceOptions/PriceOptions"


function App() {


  return (
    <>

      {/* <DaisyNav></DaisyNav> */}
      <Navber></Navber>
      <PriceOptions></PriceOptions>
      <LineCharts></LineCharts>
      <AreaChart></AreaChart>
      <Phones></Phones>


    </>
  )
}

export default App
