import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

import { ToastContainer, toast } from 'react-toast'


const Phones = () => {
    const wave = () => toast.error('Hi there 👋')

    const [phones, setPhones]=useState([]);


// data load on ui using fetch
    // useEffect(()=>{
    //     fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    //     .then(res=>res.json())
    //     .then(data=>setPhones(data.data))
    // },[])

/// another rule of Axios. Also load in data on ui

    useEffect(()=>{
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(data=>{
            const phoneData=data.data.data;
            const phoneWithFakeData= phoneData.map(phone=>{
                const obj={
                    name: phone.phone_name,
                    price:parseInt(phone.slug.split('-')[1]),
                }
                return obj;
            })

            console.log(phoneWithFakeData)
            setPhones(phoneWithFakeData)

        })
    },[])


    return (
        <div>
            <div>
            <button onClick={wave} className="px-2 py-2 border-2 border-gray-100 bg-red-50">Notification Btn</button>
            <ToastContainer />
            </div>
            <h2 className="text-5xl">Phones- {phones.length}</h2>

            <div>
                <BarChart width={600} height={400} data={phones}>
                    <XAxis dataKey={'name'}></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                <Bar dataKey="price" fill="#8884d8" />
               
                </BarChart>
            </div>
        </div>
    );
};

export default Phones;