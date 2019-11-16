import React from "react"
import Axios from "axios"
import { Redirect } from 'react-router-dom'
import MyNavbar from "./MyNavbar"
import Card from'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
//reload the variable status to new one
/*
function Leaveitem(props){
    var status=props.item.status
    function handleAccept(newStatus){
        Axios.post('http://13.234.55.47:5000/approve_leave',{e_id:props.item.e_id,type:props.item.type,list_of_dates:props.item.list_of_dates,status:newStatus})
    }
    console.log("props are",props)
return (
    <div>
        {props.item.e_id+"  "}
        {props.item.type +"  "}
        {props.item.reason+"  "}
        {status}
        {props.item.list_of_dates}
        <p></p>
        <button type="submit" onClick={handleAccept("APPROVE")}>accept</button>
        <button type="submit" onClick={handleAccept("REJECT")}>reject</button>
    </div>
)
}*/

class Leaveitem extends React.Component{
    constructor(props){
        super(props)
        var s=props.item.status
        console.log(s)
        this.state={status:s}
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(newStatus){
        console.log("clicked")
        //Axios.post('http://13.234.55.47:5000/approve_leave',{e_id:this.props.item.e_id,type:this.props.item.type,list_of_dates:this.props.item.list_of_dates,status:newStatus})
        //this.setState({status:"ACCEPTED"})
    }
    render(){
        return(
            <div>
                <div style={{marginBottom:'1%'}}>
                <Card>
                <Card.Body>
                <Card.Title>{this.props.item.e_id}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Leave Type: {this.props.item.type}</Card.Subtitle>
                    <Card.Text>
                    Reason for Leave: {this.props.item.reason}<br/>
                    Dates: {this.props.item.list_of_dates}
                    </Card.Text>
                    <Button variant="success" onClick={()=>{
                                console.log("clicked")
                                this.setState({status:"approved"})
                                Axios.post('http://localhost:5000/approve_leave',{e_id:this.props.item.e_id,type:this.props.item.type,list_of_dates:this.props.item.list_of_dates,status:"APPROVE"})
                                //this.state.render = false;    
                            }
                                
                    } style={{marginRight:'2%'}}>Accept</Button>
                    <Button variant="danger" onClick={()=>{
                                console.log("clicked")
                                this.setState({status:"rejected"})
                                Axios.post('http://localhost:5000/approve_leave',{e_id:this.props.item.e_id,type:this.props.item.type,list_of_dates:this.props.item.list_of_dates,status:"REJECT"})
                                //this.state.render = false;    
                            }
                    }>Reject</Button>
                    
                </Card.Body>
                </Card>
                </div>
            </div>
        )
    }
}
export default Leaveitem