import { useState } from "react";
import axios from 'axios';
import BarChart from "./BarChart";

function BalanceChart() {
    // const OPTIONS = ["revenues", "net_income_loss"];

    const [values, setValues] = useState([]);
    const [labels, setLabels] = useState([]);
    const [userId, setUserId] = useState('');
    const [factType, setFactType] = useState('revenues');

    async function addChartData() {
      const url = `http://localhost:3001/v1/internal/account-values/${userId}`
      console.log('url: ');
      console.log(url);
      const { data: { balances } } = await axios.get(url);
      
      console.log('balances: ');
      console.log(balances);
      const dataVals = [];
      const labelVals = [];
      balances.forEach((b) => {
        console.log('b');
        console.log(b);
        dataVals.push(b.notional_amount);
        labelVals.push(b.updated_at);
      });
      setLabels(labelVals);
      setValues(dataVals);
    }

    return (
        <div>
            <label>Enter the User Id</label>
            <input
                type="text"
                className="form-control mb-4"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />

            <button
                className="btn btn-sm btn-primary"
                onClick={addChartData}
            >
                Fetch data
            </button>

            <BarChart
                chartData={values}
                chartLabels={labels}
                chartTitle={`Account Balance Chart For ${userId}`}
            />
        </div>
    );
}
export default BalanceChart;
