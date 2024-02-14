import { useState } from "react"


export default function Home({data}){

    const [people,setPeople] = useState(data)

    const container = {
        backgroundColor:'#E8C872',
        width:'20%',
        height:'auto',
        margin: '3% 40%',
        padding:'20px 10px'

    }
    const buttonStyle = {
        backgroundColor:"#1F2544",
        padding:'5px 10px',
        color:'white',
        width:'100px',
        margin:'20px'

    }

    const divStyle = {
        display :"flex",
        flexDirection:"row",
        justifyContent:'center',
        
    }

    const imageStyle = {
        width:"100px",
        height:"100px",
        borderRadius:'100%',
        padding:'10px'
    }
   return (
    <div style={container}>
       <h2  style={{color:"white"}}>{data.length} Birthday Today</h2>
       {
        people.map((profile)=>{
            return (
                <div key={profile.id} style={divStyle}>
                <img src={profile.image} style={imageStyle}/> 
                <div>
                <h5>{profile.name}</h5>
                <h5>{profile.age} years</h5>
                </div>
                
               </div>
            )
        })
       
       }
        <button  style={buttonStyle} onClick={()=>setPeople([])}>{people.length > 1 ?"Clear all":"View All"}</button>
    </div>
   )
}