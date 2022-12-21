import React, {useState} from "react";
import { Form, Button} from 'react-bootstrap'
import axios from 'axios'


function Add() {

  const [data,setData] = useState({
    title:"",
    published_Date:"",
    page_Count:""
  })

async  function Submit(e) {
  e.preventDefault()
    let result = await axios.post("http://localhost:3001/add",{data:data});

    console.log(result);
  }
 
    function AddData(e) {
      console.log(e.target.value,e.target.id);

      setData((prev)=>{
        prev[e.target.id] = e.target.value

        return prev
      })
    }
    
    return(
        <div>

<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" id="title" onChange={AddData} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Published Date</Form.Label>
    <Form.Control type="text" id="published_Date" onChange={AddData} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword1" >
    <Form.Label>Page Count</Form.Label>
    <Form.Control type="text" id="page_Count" onChange={AddData} />
  </Form.Group>
  
  <Button variant="primary" type="submit" onClick={Submit}>
    Submit
  </Button>
</Form>
        </div>
    )
}


export default Add