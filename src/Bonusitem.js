import React from "react"
import Axios from "axios"
import { Redirect } from 'react-router-dom'
import MyNavbar from "./MyNavbar"
import Card from'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Bonusitem extends React.Component{
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
                    <Card.Text>
                    Name: {this.props.item.user_name}
                    </Card.Text>
                    <Button variant="info" onClick={()=>{
                                console.log("clicked")
                                this.setState({status:"approved"})
                                Axios.post('http://localhost:5000/approve_bonus',{e_id:this.props.item.e_id})
                                //this.state.render = false;    
                            }
                                
                    } style={{marginRight:'2%'}}>Grant Bonus</Button>
                    
                </Card.Body>
                </Card>
                </div>
            </div>
        )
    }
}
export default Bonusitem