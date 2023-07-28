import React, { useEffect, useState } from 'react';
import '../styles/eproject.css';
import axios from 'axios';

function ProGet() {
    const [content, addContent] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/project')
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
                <h1 style={{color:'black'}} >Project</h1>
                <table style={{width:"78%",textAlign:"center"}} className="eprotable">
                    <tr>
                        <th className="eproth">ProjecId</th>
                        <th className="eproth">ProjectName</th>
                        <th className="eproth">StartDate</th>
                        <th className="eproth">EndDate</th>
                        <th className="eproth">Description</th>
                        <th className="eproth">Budget</th>
                    </tr>
                    {content.map((value) => (
                        <tr key={value.pid}>
                            <td className="eprotd">{value.pid}</td>
                            <td className="eprotd">{value.pname}</td>
                            <td className="eprotd">{value.pstdate}</td>
                            <td className="eprotd">{value.pendate}</td>
                            <td className="eprotd">{value.pdescription}</td>
                            <td className="eprotd">{value.pbudget}</td>
                        </tr>
                    ))}
                </table>
            </div>
        </>
    );
}

export default ProGet;
