import axios from 'axios';
import { useState, useEffect } from 'react';
import { Button, Table } from 'react-bootstrap'


function Book() {
    const [data, setData] = useState([])
    const [searched, setSearcheds] = useState([])

    useEffect(async () => {

        let result = await axios.get("http://localhost:3001/get")
console.log(result.data);
        setData(result.data)
        setSearcheds(result.data)

    }, []);

    function search(e) {
       let filter = data.filter(o=>o.title.toLowerCase().includes(e.target.value.toLowerCase()))
       setSearcheds(filter)
    }

    function Remove(data) {
        axios.post('http://localhost:3001/remove',{id:data}).then(res=>{
            console.log(res);
            setData(res.data.data)
            setSearcheds(res.data.data)
            alert(res.data.msg)
        })
    }

    return (
        <div className='App'>
<div style={{textAlign:"center", padding:"20px"}}>
            <input placeholder='search' onChange={search} />
            </div>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Published Date</th>
                        <th>Page Count</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    {searched.map((currentItem,idx) => {
                        return (
                            <tr key={idx} >
                                <td>{currentItem.title}</td>
                                <td>{currentItem.published_Date}</td>
                                <td>{currentItem.page_Count}</td>
                                <td><Button onClick={()=>Remove(currentItem.id)} >Remove</Button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}
export default Book;