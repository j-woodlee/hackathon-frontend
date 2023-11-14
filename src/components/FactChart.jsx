import { useState } from "react";
import axios from 'axios';
import BarChart from "./BarChart";

function FactChart() {
    const OPTIONS = ["revenues", "net_income_loss"];

    const [values, setValues] = useState([]);
    const [labels, setLabels] = useState([]);
    const [ticker, setTicker] = useState('');
    const [factType, setFactType] = useState('revenues');

    async function addChartData() {
      const url = `http://localhost:3069/v1/company/facts?type=${factType}&ticker=${ticker}`;
      console.log('url: ');
      console.log(url);
      const { data: facts } = await axios.get(url);
      
      console.log('facts: ');
      console.log(facts);
      const dataVals = [];
      const labelVals = [];
      facts.forEach((f) => {
        console.log(f.fp.charAt(0));
        if (f.fp.charAt(0) !== 'Q') {
            return;
        }
        dataVals.push(f.val);
        labelVals.push(`${f.start}-${f.end}`);
      });
      setLabels(labelVals);
      setValues(dataVals);
    }

    return (
        <div>
            <h4>{factType} chart</h4>
            <hr />
            <label>Fact Type</label>
            <select
                className="form-control"
                onChange={(e) => setFactType(e.target.value)}
            >
                {OPTIONS.map((option, index) => (
                    <option
                        selected={option === factType ? true : false}
                        value={option}
                    >
                        {option}
                    </option>
                ))}
            </select>

            <hr />

            <label>Enter the ticker symbol</label>
            <input
                type="text"
                className="form-control mb-4"
                value={ticker}
                onChange={(e) => setTicker(e.target.value)}
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
                chartTitle={`${factType.charAt(0).toUpperCase()}${factType.substring(1, factType.length)} Chart For ${ticker}`}
            />
        </div>
    );
}
export default FactChart;
