import React, { useState } from 'react'
import './style.css'

const DynamicForm = () => {
    const [forminput,setforminput]=useState([
        {id:'',name:'',phone:''}
    ])
    const addmore=()=>{
        let newfield={id:Math.floor(Math.random()*10000),name : '',phone :''}
        setforminput([...forminput,newfield])
    }
    const remove=(id)=>{
        let alldata=[...forminput]
        let data=alldata.filter(item=> item.id !=id)
        setforminput(data)
    }
  return (
    <div align="center">
        <h1 style={{textDecoration:"underline"}}>React-Add & Delete Table Rows Dainamically</h1>
       
        <thead>
            <tr>
                <th style={{paddingRight:"90px"}}>Full Name</th>
                <th style={{padding:"40px"}}>Email Address</th>
                <th style={{paddingLeft:"70px"}}>Salary</th>
              <th><input onClick={()=>addmore() } type="button" value="+"style={{color:"green",width:"30px",height:"30px",marginLeft:"10px"}} /></th>
             
            </tr>
        </thead>
    {
        forminput.map((item,index)=>{
            return(
                <form key={item.id}>
                   <input type="text" style={{margin:"10px",width:"200px",backgroundColor:"white"}}/>
                   
                   <input type="text" style={{margin:"10px",width:"200px",backgroundColor:"white"}}/>
                    <input type="text"style={{margin:"10px",width:"200px",backgroundColor:"white"}}/>
                    {
                        index!==0&&(
                            <input onClick={()=>remove(item.id)} type='button' value="x"style={{color:"red"}}/>

                        )
                    }
                </form>
            )
        })
    }
    <br></br>
    </div>
  )
}

export default DynamicForm
