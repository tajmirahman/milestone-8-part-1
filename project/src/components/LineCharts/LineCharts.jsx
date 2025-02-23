import { LineChart as LCchart, Line, XAxis, YAxis,Tooltip,Legend } from 'recharts';


const LineCharts = () => {

    const mathMarksData = [
        { id: 1, name: "Alice", math: 85, physics: 78, chemistry: 82 },
        { id: 2, name: "Bob", math: 78, physics: 72, chemistry: 75 },
        { id: 3, name: "Charlie", math: 92, physics: 88, chemistry: 91 },
        { id: 4, name: "David", math: 74, physics: 69, chemistry: 70 },
        { id: 5, name: "Emma", math: 88, physics: 85, chemistry: 89 },
        { id: 6, name: "Frank", math: 81, physics: 77, chemistry: 80 },
        { id: 7, name: "Grace", math: 95, physics: 90, chemistry: 94 },
        { id: 8, name: "Hannah", math: 90, physics: 84, chemistry: 88 },
        { id: 9, name: "Ian", math: 76, physics: 71, chemistry: 73 },
        { id: 10, name: "Jack", math: 82, physics: 75, chemistry: 78 }
    ]


    return (
        <div>
            <LCchart width={800} height={400} data={mathMarksData}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Tooltip />
                <Legend />
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='blue'></Line>
                <Line dataKey="chemistry" stroke='yellow'></Line>
            </LCchart>
        </div>
    );
};

export default LineCharts;