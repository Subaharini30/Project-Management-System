import React, { useEffect, useState } from 'react' 
import '../styles/erisk.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';

function ERisk() 

    {
        const navigation = useNavigate();
        const[riskData,setRiskData]=useState({});
        const [editing, setEditing] = useState(false);
    const [editData, setEditData] = useState({});

      const handleChange=(e)=>{
        e.preventDefault();
        const {id,value}=e.target;
        setRiskData({...riskData,[id]:value});
        console.log(riskData);
      }
      const[risk,addRisk]=useState([]);
        useEffect(() => {
            axios.get(`http://localhost:8080/risk`).
            then(function (response) {
              addRisk(response.data);
              console.log(response.data)
            })
            .catch(function(error)
            {
                console.log(error);
            });
          }, []);

    const handleAddRisk=()=>{
        axios.post(`http://localhost:8080/risk`,riskData)
        window.location.reload();
      }

      const handleEdit = (riskData) => {
        setEditData(riskData);
        setEditing(true);
      };

      const handleUpdateIncome = () => {
        axios
          .put(`http://localhost:8080/risk/update/${editData.riId}`, editData)
          .then((response) => {
            alert('Record Updated');
            setEditing(false);
            window.location.reload(false);
          })
          .catch((error) => {
            console.log(error);
          });
      };

      const deletecontent = (riId) => {
        if (window.confirm('Do you want to delete')) {
          axios
            .delete(`http://localhost:8080/risk/delete/${riId}`)
            .then((response) => {
              alert('Record Deleted');
              navigation('/risk');
              window.location.reload(false);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      };
    
    return ( 
    <div className='risk-entire'>
        <div className='risk-header'>Risk</div>
        
            <div className='risk-left'>
            {editing ? (
                <div className='risk-input'>
                <h2>Report Any Bug</h2>
            <label>Project ID</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label>Project Name</label><br/>
            <input className='risk-inputbox' type="number" id="pid"  name="projectid" placeholder='Project Id'  value={editData.pid}
                  onChange={(e) => setEditData({ ...editData, pid: e.target.value })}
/>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className='risk-inputbox' type="text"id="pname"  name="projectname" placeholder='Project Name' value={editData.pname}
                  onChange={(e) => setEditData({ ...editData, pname: e.target.value })}
/><br/>

            <label>Status</label><br/>
            <input className='risk-inputbox' type="number"id="riId"  name="riskid" placeholder='Risk ID'autoComplete='off'  value={editData.riId}
                  onChange={(e) => setEditData({ ...editData,riId: e.target.value })}
/>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <select style={{height:"5vh",width:"31%"}} id="riStatus" className='risk-inputbox' name="riskstatus" autoComplete='off'  value={editData.riStatus}
                  onChange={(e) => setEditData({ ...editData, riStatus: e.target.value })}
>
                <option>Select</option>
                <option>On Hold</option>
                <option>In Progress</option>
                <option>Open</option>
                <option>Completed</option>
            </select><br/>
            <label>Description</label><br/>
            <input style={{height:"4vh",width:"72.5%"}} id="riDesc"className='risk-inputbox' type="text" name="riskdes" placeholder='Description'  value={editData.riDesc}
                  onChange={(e) => setEditData({ ...editData, riDesc: e.target.value })}
/><br/>

            <label>Mitigation Strategies</label><br/>
            <input style={{height:"4vh",width:"72.5%"}} id="mitigationStrategy" className='risk-inputbox' type="text" name="mitigation" placeholder='Mitigation Strategies' autoComplete='off'  value={editData.mitigationStrategy}
                  onChange={(e) => setEditData({ ...editData, mitigationStrategy: e.target.value })}
/><br/><br/>
            

<Button
                  className='button'
                  variant='contained'
                  style={{ color: 'white' }}
                  onClick={handleUpdateIncome}
                >
                  Update
                </Button>
                {/* <Button
                  className='button'
                  variant='contained'
                  style={{ color: 'white' }}
                  onClick={() => setEditing(false)}
                >
                  Cancel
                </Button> */}

            </div>
            ):(
                <div className='risk-input'>
                <h2>Report Any Bug</h2>
            <label>Project ID</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label>Project Name</label><br/>
            <input className='risk-inputbox' type="number" id="pid"  name="projectid" placeholder='Project Id' onChange={handleChange}/>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className='risk-inputbox' type="text"id="pname"  name="projectname" placeholder='Project Name'onChange={handleChange}/><br/>

            <label>Risk ID</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label>Status</label><br/>
            <input className='risk-inputbox' type="number"id="riId"  name="riskid" placeholder='Risk ID'autoComplete='off' onChange={handleChange}/>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <select style={{height:"5vh",width:"31%"}} id="riStatus" className='risk-inputbox' name="riskstatus" autoComplete='off' onChange={handleChange}>
                <option>Select</option>
                <option>On Hold</option>
                <option>In Progress</option>
                <option>Open</option>
                <option>Completed</option>
            </select><br/>
            <label>Description</label><br/>
            <input style={{height:"4vh",width:"72.5%"}} id="riDesc"className='risk-inputbox' type="text" name="riskdes" placeholder='Description' onChange={handleChange}/><br/>

            <label>Mitigation Strategies</label><br/>
            <input style={{height:"4vh",width:"72.5%"}} id="mitigationStrategy" className='risk-inputbox' type="text" name="mitigation" placeholder='Mitigation Strategies' autoComplete='off' onChange={handleChange}/><br/><br/>
            

            <button  id="bu" onClick={handleAddRisk} style={{backgroundColor:"green",height:"4vh",width:"15%",border:"green"}}>Add</button>
            </div>
            )}
            
            </div>
            



            <div className='risk-right'>
            <table style={{marginLeft:"12%",marginTop:"1%"}} border="1" width="75%">
                <tbody>
                    <tr className='risk-th'>
                        <th style={{height:"6vh"}}>Project Id</th>
                        <th>Project Name</th>
                        <th>Risk Id</th>
                        <th>Description</th>
                        <th>Mitigation Strategies</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                
                        {risk.map((item)=>(

                            <tr className='risk-td' key={item.id}>
                                <td style={{height:"5vh"}}>{item.pid}</td>
                                <td>{item.pname}</td>
                                <td>{item.riId}</td>
                                <td>{item.riDesc}</td>
                                <td>{item.mitigationStrategy}</td>
                                <td>{item.riStatus}</td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style={{backgroundColor:"rgb(245, 123, 57)",border:"blue",width:"30%",height:"4vh" }}onClick={() => handleEdit(item)}>Update</button>
                                &nbsp;&nbsp;&nbsp;
                                <button style={{backgroundColor:"red",height:"4vh",width:"29%",border:"red"}} onClick={()=>deletecontent(item.riId)} id='ethree'>Delete</button>
                        
</td>
                                
                            </tr>
                        )
                        )}

                
                </tbody>
            </table>
            </div>
        
    </div> );
}


export default ERisk;
