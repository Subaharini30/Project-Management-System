import React, { useEffect, useState } from 'react';
import '../styles/etask.css';
import axios from 'axios';

function Etask() {
    const [content, addContent] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/task')
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
                <table style={{width:"78%",textAlign:"center"}} className="eprotable">
                    <tr>
                        <th className="eproth">Task Id</th>
                        <th className="eproth">Task Name</th>
                        <th className="eproth">Employee Id</th>
                        <th className="eproth">Employee Name</th>
                        <th className="eproth">Project Id</th>
                        <th className="eproth">Status</th>
                    </tr>
                    {content.map((value) => (
                        <tr key={value.pid}>
                            <td className="eprotd">{value.taId}</td>
                            <td className="eprotd">{value.taName}</td>
                            <td className="eprotd">{value.empId}</td>
                            <td className="eprotd">{value.empName}</td>
                            <td className="eprotd">{value.pId}</td>
                            <td className="eprotd">{value.taStatus}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    );
}

export default Etask;
