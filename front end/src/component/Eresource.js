import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import '../styles/eresource.css';
function Eresource() {
    const [content, addContent] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/emp')
            .then(function (response) {
                addContent([...response.data]);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    return (
        <>
            <div style={{  height: '100vh', width: '100%', color: 'white',  textAlign: 'center' }}>
                <table style={{width:"78%",textAlign:"center"}} className="eprotable">
                    <tr>
                        <th className="eproth">Employee Id</th>
                        <th className="eproth">Employee Name</th>
                        <th className="eproth">Email</th>
                        <th className="eproth">Salary</th>
                        <th className="eproth">Date Of Birth</th>
                        <th className="eproth">Equipment Type</th>
                    </tr>
                    {content.map((value) => (
                        <tr key={value.pid}>
                            <td className="eprotd">{value.empId}</td>
                            <td className="eprotd">{value.empName}</td>
                            <td className="eprotd">{value.empMail}</td>
                            <td className="eprotd">{value.empSalary}</td>
                            <td className="eprotd">{value.rdob}</td>
                            <td className="eprotd">{value.eqType}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    );
}

export default Eresource;
