import React, { useState, useEffect } from 'react'
import '../styles/aresource.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';

function Aemployees() {
    const navigation = useNavigate();
        const[EmpData,setEmpData]=useState({});
        const [editing, setEditing] = useState(false);
    const [editData, setEditData] = useState({});

      const handleChange=(e)=>{
        e.preventDefault();
        const {id,value}=e.target;
        setEmpData({...EmpData,[id]:value});
        console.log(EmpData);
      }
      const[emp,addEmp]=useState([]);
        useEffect(() => {
            axios.get(`http://localhost:8080/emp`).
            then(function (response) {
              addEmp(response.data);
              console.log(response.data)
            })
            .catch(function(error)
            {
                console.log(error);
            });
          }, []);

    const handleAddEmp=()=>{
        axios.post(`http://localhost:8080/emp`,EmpData)
        window.location.reload();
      }

      const handleEdit = (empData) => {
        setEditData(empData);
        setEditing(true);
      };

      const handleUpdateEmp = () => {
        axios
          .put(`http://localhost:8080/emp/update/${editData.empId}`, editData)
          .then((response) => {
            alert('Record Updated');
            setEditing(false);
            window.location.reload(false);
          })
          .catch((error) => {
            console.log(error);
          });
      };

      const deletecontent = (empId) => {
        if (window.confirm('Do you want to delete')) {
          axios
            .delete(`http://localhost:8080/emp/delete/${empId}`)
            .then((response) => {
              alert('Record Deleted');
              navigation('/Employees');
              window.location.reload(false);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      };
    return ( 
        <div className='emp-entire'>
        <div className='emp-header' style={{fontFamily:'cursive',marginTop:'40px'}}>Resource Mangament</div>
        
            <div className='emp-left'>
            {editing ? (
                <div className='emp-input'>
                <h2 style={{textAlign:'center'}}>Manage Employees</h2>
            <label>Employee ID</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label>Employee Name</label><br/>
            <input className='emp-inputbox' type="number" id="empId"  name="empid" placeholder='Employee Id'  value={editData.empId}
                  onChange={(e) => setEditData({ ...editData, empId: e.target.value })}
/>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className='emp-inputbox' type="text"id="empName"  name="empname" placeholder='Employee Name' value={editData.empName}
                  onChange={(e) => setEditData({ ...editData, empName: e.target.value })}
/><br/>

            <label>Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label>Salary</label><br/>
            <input className='emp-inputbox' type="email" id="empMail"  name="empmail" placeholder='Employee Email'autoComplete='off'  value={editData.empMail}
                  onChange={(e) => setEditData({ ...editData,empMail: e.target.value })}
/>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input id="empSalary" type="number" className='emp-inputbox' name="salary" autoComplete='off'  value={editData.empSalary}
                  onChange={(e) => setEditData({ ...editData, empSalary: e.target.value })}
/>
                
            <br/>
            <label>Date Of Birth</label><br/>
            <input id="rdob"className='emp-inputbox' type="date" name="dob" placeholder='Date Of Birth'  value={editData.rdob}
                  onChange={(e) => setEditData({ ...editData, rdob: e.target.value })}
/><br/>

            <label>Equipment Type</label><br/>
            <input id="eqType" className='emp-inputbox' type="text" name="eqtype" placeholder='Equipment Type' autoComplete='off'  value={editData.eqType}
                  onChange={(e) => setEditData({ ...editData, eqType: e.target.value })}
/><br/><br/>
            

<Button
                  className='emp-button'
                  variant='contained'
                  style={{ color: 'white' }}
                  onClick={handleUpdateEmp}
                >
                  Update
                </Button>

            </div>
            ):(
                <div className='emp-input'>
                <h2>Assign Employee</h2>
            <label>Employee ID</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label>Employee Name</label><br/>
            <input className='emp-inputbox' type="number" id="empId"  name="empid" placeholder='Employee Name' onChange={handleChange}/>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className='emp-inputbox' type="text"id="empName"  name="empname" placeholder='Employee Name'onChange={handleChange}/><br/>

            <label>Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label>Salary</label><br/>
            <input className='emp-inputbox' type="email"id="empMail"  name="empmail" placeholder='Email'autoComplete='off' onChange={handleChange}/>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type='number' id="empSalary" className='emp-inputbox' name="salary" placeholder='Salary' autoComplete='off' onChange={handleChange}/>
            <br/>

            <label>Date Of Birth</label><br/>
            <input style={{height:"4vh",width:"72.5%"}} id="rdob"className='emp-inputbox' type="date" name="dob" placeholder='Date Of Birth' onChange={handleChange}/><br/>

            <label>Equipment Type</label><br/>
            <input style={{height:"4vh",width:"72.5%"}} id="eqType" className='emp-inputbox' type="text" name="eqtype" placeholder='Equipment Type' autoComplete='off' onChange={handleChange}/><br/><br/>
            

            <button  id="bu" onClick={handleAddEmp} style={{backgroundColor:"green",height:"4vh",width:"15%",border:"green"}}>Add</button>
            </div>
            )}
            
            </div>
            



            <div className='emp-right'>
            <table style={{marginLeft:"12%",marginTop:"1%"}} border="1" width="75%">
                <tbody>
                    <tr className='emp-th'>
                        <th style={{height:"6vh"}}>Employee Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Date Of Birth</th>
                        <th>Equipment Type</th>
                        <th>Action</th>
                    </tr>
                
                        {emp.map((item)=>(

                            <tr className='emp-td' key={item.id}>
                                <td style={{height:"5vh"}}>{item.empId}</td>
                                <td>{item.empName}</td>
                                <td>{item.empMail}</td>
                                <td>{item.empSalary}</td>
                                <td>{item.rdob}</td>
                                <td>{item.eqType}</td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style={{backgroundColor:"rgb(245, 123, 57)",border:"blue",width:"30%",height:"4vh" }}onClick={() => handleEdit(item)}>Update</button>
                                &nbsp;&nbsp;&nbsp;
                                <button style={{backgroundColor:"red",height:"4vh",width:"29%",border:"red"}} onClick={()=>deletecontent(item.empId)} id='ethree'>Delete</button>
                        
</td>
                                
                            </tr>
                        )
                        )}

                
                </tbody>
            </table>
            </div>
        
    </div> );
}

export default Aemployees;
