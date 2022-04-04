import React from 'react';
import LineCharts from '../LineChart/LineCharts';
import Mixbar from '../MixBar/Mixbar';

import StackArea from '../StackedArea/StackArea';

const Dashboard = () => {
    return (
        <div  className="  grid  md:grid-cols-2 mx-4 md:my-8 ">
           <div  className="md:mx-8 "> <h1  className="text-2xl text-center  font-bold text-blue-500">Month Wise Sell</h1>   <LineCharts></LineCharts>  </div>
            <div  > <h1  className="text-2xl text-center  font-bold text-blue-500">Investment Vs Revenue</h1>   <StackArea></StackArea> </div>

            <div className=" md:mx-8  md:my-8" > <h1  className="text-2xl text-center  font-bold text-blue-500">Investment Vs Revenue</h1>   <Mixbar></Mixbar> </div>

           
        </div>
    );
};

export default Dashboard;