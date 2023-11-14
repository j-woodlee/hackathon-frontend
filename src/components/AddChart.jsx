import { useState } from "react";
import LineChart from "./LineChart";

function AddChart() {
    const OPTIONS = ["line", "bar", "donut"];

    const [labels, setLabels] = useState([]);
    const [values, setValues] = useState([]);
    const [selectedOption, setSelectedOption] = useState("line");

    const [jsonData, setJsonData] = useState("");
    const [data, setData] = useState(0);
    const [label, setLabel] = useState("");
    /* 
    
    Line chart:
    labels: [2020, 2021, 2022] 
    data: [1,2,3]

    Bar chart: 
    labels: [År, Total inntekt, Total utgift]

    data: [
        [2020, 2000, 1000] // År, Total Inntekt, TOtal utgift
    ]

    Donut / Pie chart:

    data: Food, 200; Drinks, 100; Transport, 50;
    */

    function addChartDataHandler() {
        setLabels((labels) => labels.concat([label]));
        setValues((values) => values.concat([+data]));
        console.log(labels, values);
    }

    function addDataRowHandler() {
        const parsed = `{${data}}`;
        setValues((values) => values.concat([parsed]));
        setJsonData(`[${values}]`);
    }

    function editJSONDataHandler(e) {
        setJsonData(JSON.stringify(e.target.value));
        console.log(jsonData, "JSON DATA");
        console.log(typeof JSON.parse(jsonData));
    }

    return (
        <div>
            <h4>Add new Line chart</h4>

            <label>Add labels for chart</label>
            <input
                type="text"
                className="form-control mb-3"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
            />

            <label>Add data for chart</label>
            <input
                type="text"
                className="form-control mb-4"
                value={data}
                onChange={(e) => setData(e.target.value)}
            />

            <label>Edit json data</label>
            <textarea
                onChange={editJSONDataHandler}
                className="form-control mb-2"
            >
                {jsonData}
            </textarea>

            <button
                className="btn btn-sm btn-primary"
                onClick={addChartDataHandler}
            >
                Add chart data
            </button>

            <h4>Add row of data</h4>
            <textarea
                type="text"
                className="form-control mb-4"
                value={data}
                onChange={(e) => setData(e.target.value)}
            ></textarea>
            <button
                onClick={addDataRowHandler}
                className="btn btn-sm btn-primary"
            >
                Save row
            </button>
            <hr />
            <label>Type</label>
            <select
                className="form-control"
                onChange={(e) => setSelectedOption(e.target.value)}
            >
                {OPTIONS.map((option, index) => (
                    <option
                        selected={option === selectedOption ? true : false}
                        value={option}
                    >
                        {option}
                    </option>
                ))}
            </select>

            <hr />

            <LineChart
                chartData={values}
                chartLabels={labels}
                chartTitle={"Your new linechart"}
            />
        </div>
    );
}
export default AddChart;
