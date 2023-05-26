import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import Addd from './Addd';

const Stable = () => {
    var [students,setstudents]=useState([]);
    var [update,setUpdate]=useState(false);
    var [singlevalue,setSingleValue]= useState([])
    useEffect(()=>{
        axios.get("http://localhost:8080/see")
        .then((response)=>{
            setstudents(response.data);
            console.log(response.data)
        })
        .catch()
    },[])
  ;
    const deleteValues=(id)=>{
        console.log(id);
        axios.delete("http://localhost:8080/delete/"+id)
        .then(((response)=>{
            alert("deleted")
            window.location.reload(false)
        }))
        .catch(err=>console.log(err)) 
    }

    const updateValues=(value)=>{
        console.log("Clicked update button:",value);
        setSingleValue(value);
        setUpdate(true);
        }
        var finalJSX=<div style={{ paddingTop: '70px' }}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{color:"green"}}>Name</TableCell>
                <TableCell style={{color:"green"}}>Grade</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map((value, index) => (
                <TableRow key={index}>
                  <TableCell>{value.sname}</TableCell>
                  <TableCell>{value.sgrade}</TableCell>
                  <TableCell><Button onClick={()=>deleteValues(value._id)}>Delete</Button></TableCell>
                  <TableCell><Button onClick={()=>updateValues(value)}>Update</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      if(update){
      finalJSX=<Addd data={singlevalue} method="put"/>
      }
  return (
    finalJSX
  ); 
};

export default Stable;
