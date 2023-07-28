import React, { useEffect, useState } from 'react';
import '../styles/arisk.css';
import axios from 'axios';

function RiskGet() {
    const [content, addContent] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/risk')
            .then(function (response) {
                addContent([...response.data]);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    return (
        <>
            <div style={{ backgroundColor: 'white', height: '100vh', width: '100%', color: 'white',  textAlign: 'center' }}>
            <h1 style={{color:'black'}} >Risk</h1>
                <table style={{width:"78%",textAlign:"center"}} className="eprotable">
                    <tr>
                        <th className="eproth">Project Id</th>
                        <th className="eproth">Project Name</th>
                        <th className="eproth">Risk Id</th>
                        <th className="eproth">Status</th>
                        <th className="eproth">Description</th>
                        <th className="eproth">Mitigation Strategy</th>
                    </tr>
                    {content.map((value) => (
                        <tr key={value.pid}>
                            <td className="eprotd">{value.pid}</td>
                            <td className="eprotd">{value.pname}</td>
                            <td className="eprotd">{value.riId}</td>
                            <td className="eprotd">{value.riDesc}</td>
                            <td className="eprotd">{value.mitigationStrategy}</td>
                            <td className="eprotd">{value.riStatus}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    );
}

export default RiskGet;
