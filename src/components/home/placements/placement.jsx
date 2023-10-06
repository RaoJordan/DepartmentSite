import React from "react";
import Heading from "../../common/heading/Heading";
import "./placement.css";
import { placementStats } from "../../../dummydata";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";


const Placement = () => {
    return (
        <div>
            
            <div className="row" style={{width: '100%'}}>
            <Heading title="B.Tech Placement Statistics" />
                {/* <div className="col item flexSB" style={{margin: '5px'}}>
                    <p>An average package of over 15.85 lakhs per annum was offered to students this year.</p>
                </div> */}
                <div className="col" style={{margin: '5px'}}>
                    <ResponsiveContainer width="50%" aspect={2} >
                        <BarChart data={placementStats} width={400} height={400} >
                            <XAxis dataKey="year" />
                            <YAxis />
                            <Tooltip />   
                            <Bar dataKey="Package" fill="#1eb2a6"/>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    )
}

export default Placement;