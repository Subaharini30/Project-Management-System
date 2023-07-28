import React, { useState, useEffect } from 'react'
import '../styles/atask.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Button } from '@mui/material';

function ATask() {
    const navigation = useNavigate();
        const[TaskData,setTaskData]=useState({});
        const [editing, setEditing] = useState(false);
    const [editData, setEditData] = useState({});

      const handleChange=(e)=>{
        e.preventDefault();
        const {id,value}=e.target;
        setTaskData({...TaskData,[id]:value});
        console.log(TaskData);
      }
      const[task,addTask]=useState([]);
        useEffect(() => {
            axios.get(`http://localhost:8080/task`).
            then(function (response) {
              addTask(response.data);
              console.log(response.data)
            })
            .catch(function(error)
            {
                console.log(error);
            });
          }, []);

    const handleAddTask=()=>{
        axios.post(`http://localhost:8080/task`,TaskData)
        window.location.reload();
      }

      const handleEdit = (taskData) => {
        setEditData(taskData);
        setEditing(true);
      };

      const handleUpdateTask = () => {
        axios
          .put(`http://localhost:8080/task/update/${editData.taId}`, editData)
          .then((response) => {
            alert('Record Updated');
            setEditing(false);
            window.location.reload(false);
          })
          .catch((error) => {
            console.log(error);
          });
      };

      const deletecontent = (taId) => {
        if (window.confirm('Do you want to delete')) {
          axios
            .delete(`http://localhost:8080/task/delete/${taId}`)
            .then((response) => {
              alert('Record Deleted');
              navigation('/task');
              window.location.reload(false);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      };
    return ( 
        <div className='task-entire'>
        <div className='task-header'>Task</div>
        
            <div className='task-left'>
            {editing ? (
                <div className='task-input'>
                <h2>Assign Task</h2>
            <label>Task ID</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label>Task Name</label><br/>
            <input className='task-inputbox' type="number" id="taId"  name="taskid" placeholder='Task Id'  value={editData.taId}
                  onChange={(e) => setEditData({ ...editData, taId: e.target.value })}
/>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className='task-inputbox' type="text"id="taName"  name="taskname" placeholder='Task Name' value={editData.taName}
                  onChange={(e) => setEditData({ ...editData, taName: e.target.value })}
/><br/>

            <label>Employee Id</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label>Employee Name</label><br/>
            <input className='task-inputbox' type="number" id="empId"  name="empid" placeholder='Employee Id'autoComplete='off'  value={editData.empId}
                  onChange={(e) => setEditData({ ...editData,empId: e.target.value })}
/>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input id="empName" type="text" className='task-inputbox' name="empname" autoComplete='off'  value={editData.empName}
                  onChange={(e) => setEditData({ ...editData, empName: e.target.value })}
/>
                
            <br/>
            <label>Project Id</label><br/>
            <input id="pId"className='task-inputbox' type="number" name="pid" placeholder='Project Id'  value={editData.pid}
                  onChange={(e) => setEditData({ ...editData, pid: e.target.value })}
/><br/>

            <label>Status</label><br/>
            <select id="taStatus" className='task-inputbox' type="text" name="eqtype" placeholder='Equipment Type' autoComplete='off'  value={editData.eqType}
                  onChange={(e) => setEditData({ ...editData, taStatus: e.target.value })}
>           <option>Select</option>
          <option>Completed</option>
           <option>On Hold</option>
           <option>Not Started</option>
</select>
    <br/><br/>
            

<Button
                  className='task-button'
                  variant='contained'
                  style={{ color: 'white' }}
                  onClick={handleUpdateTask}
                >
                  Update
                </Button>

            </div>
            ):(
                <div className='task-input'>
                <h2>Assign Task</h2>
            <label>Task Id</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label>Task Name</label><br/>
            <input className='task-inputbox' type="number" id="taId"  name="taskid" placeholder='Task Id' onChange={handleChange}/>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input className='task-inputbox' type="text"id="taName"  name="taname" placeholder='Task Name'onChange={handleChange}/><br/>

            <label>Employee Id</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <label>Employee Name</label><br/>
            <input className='task-inputbox' type="number"id="empId"  name="empid" placeholder='Employee Id'autoComplete='off' onChange={handleChange}/>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type='text' id="empName" className='task-inputbox' name="empname" placeholder='Employee Name' autoComplete='off' onChange={handleChange}/>
            <br/>

            <label>Project Id</label><br/>
            <input style={{height:"4vh",width:"72.5%"}} id="pid"className='task-inputbox' type="number" name="pid" placeholder='Project Id' onChange={handleChange}/><br/>

            <label>Status</label><br/>
            <select style={{height:"4vh",width:"72.5%"}} id="taStatus" className='task-inputbox' type="text" name="tastatus" autoComplete='off' onChange={handleChange}>
            <option>Select</option>
            <option>Completed</option>
            <option>On Hold</option>
            <option>Not Started</option>
            </select>
                <br/><br/>

            <button  id="bu" onClick={handleAddTask} style={{backgroundColor:"green",height:"4vh",width:"15%",border:"green"}}>Add</button>
            </div>
            )}
            
            </div>
            



            <div className='task-right'>
            <table style={{marginLeft:"12%",marginTop:"1%"}} border="1" width="75%">
                <tbody>
                    <tr className='task-th'>
                        <th style={{height:"6vh"}}>Employee Id</th>
                        <th>Task Name</th>
                        <th>Project Id</th>
                        <th>Employee Id</th>
                        <th>Employee Name</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                
                        {task.map((item)=>(

                            <tr className='task-td' key={item.id}>
                                <td style={{height:"5vh"}}>{item.taId}</td>
                                <td>{item.taName}</td>
                                <td>{item.pid}</td>
                                <td>{item.empId}</td>
                                <td>{item.empName}</td>
                                <td>{item.taStatus}</td>
                                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button style={{backgroundColor:"rgb(245, 123, 57)",border:"blue",width:"30%",height:"4vh" }}onClick={() => handleEdit(item)}>Update</button>
                                &nbsp;&nbsp;&nbsp;
                                <button style={{backgroundColor:"red",height:"4vh",width:"29%",border:"red"}} onClick={()=>deletecontent(item.taId)} id='ethree'>Delete</button>
                        
</td>
                                
                            </tr>
                        )
                        )}

                
                </tbody>
            </table>
            </div>
        
    </div> );
}

export default ATask;
