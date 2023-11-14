import "./App.css";
// import AddChart from "./components/AddChart";
import BalanceChart from "./components/BalanceChart";
import BarChart from "./components/BarChart";
import ChartApi from "./components/ChartApi";
import LineChart from "./components/LineChart";

function App() {
    return (
        <div className="container my-4">
            {/* <h1>CHART</h1> */}
            {/* <LineChart />
            <BarChart />
            <ChartApi /> */}
            <BalanceChart />
        </div>
    );
}

export default App;
