import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import axios from 'axios';

const Addd = (props) => {
//   const [name, setName] = useState('');
//   const [grade, setGrade] = useState('');
    var[datas,setdatas]=useState(props.data)
    const inputHandler =(e)=>{
        const{name,value}=e.target
        setdatas((data)=>({...data,[name]:value}))
        console.log(datas)
    } 
    const addValues=()=>{
        if(props.method==="post"){
        console.log("Clicked")
        axios.post("http://localhost:8080/create",datas)
        .then((response)=>{
            console.log("data",response.data)
            alert("Succesfully added data")
            window.location.reload(false)
        })
        .catch(err=>console.log(err))
      }
      if(props.method==="put"){
        axios.put("http://localhost:8080/edit/"+datas._id,datas)
        .then((response)=>{
          console.log("data",response)
          alert("Succesfully updated")
          window.location.reload(false)
        })
        .catch(err=>console.log(err))
      }
    }

  return (
    <div style={{ paddingTop: '70px' }}><br /><br />
      <TextField variant='outlined' label='Name' name='sname' value={datas.sname} onChange={inputHandler}/><br /><br />
      <TextField variant='outlined' label='Grade' name='sgrade' value={datas.sgrade} onChange={inputHandler}/><br /><br />
      <Button variant='contained' onClick={addValues}>Add</Button>
    </div>
  );
};

export default Addd;
