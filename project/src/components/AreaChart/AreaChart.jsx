import { AreaChart as AcChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, } from 'recharts';


const AreaChart = () => {

    const data = [
        { name: "Alice", math: 85, physics: 78, chemistry: 82 },
        { name: "Bob", math: 78, physics: 72, chemistry: 75 },
        { name: "Charlie", math: 92, physics: 88, chemistry: 91 },
        { name: "David", math: 74, physics: 69, chemistry: 70 },
        { name: "Emma", math: 88, physics: 85, chemistry: 89 },
        { name: "Frank", math: 81, physics: 77, chemistry: 80 },
        { name: "Grace", math: 95, physics: 90, chemistry: 94 },
        { name: "Hannah", math: 90, physics: 84, chemistry: 88 },
        { name: "Ian", math: 76, physics: 71, chemistry: 73 },
        { name: "Jack", math: 82, physics: 75, chemistry: 78 }
    ];


    return (
        <div>
            <AcChart width={600} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                <Area dataKey={'math'} ></Area>
                <Area dataKey={'physics'} ></Area>
                <Area dataKey={'chemistry'} ></Area>
            </AcChart>
        </div>
    );
};

export default AreaChart;