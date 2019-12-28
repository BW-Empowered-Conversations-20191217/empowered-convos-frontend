import React from "react";
import {Card, CardBody, CardTitle, CardText, Jumbotron} from "reactstrap";
import {Grid, Cell} from "react-mdl"


const Props = props => {
    return (
        <div style={{width:'100%', margin: 'auto'}}>
            <Grid className="image">
                <Cell col={12}>
                    <img className="img" src={props.img} top width="50%" />

                    <div className="details"> 
                    <h1> {props.name} {props.name} </h1>
                    <hr/>
                    {props.code} | {props.code} | {props.code} | {props.code}
                    </div>


                </Cell>

            </Grid>
            
        
        
        </div>


        /* <div className="container"> 

            <Card className="card">
                <CardBody className="body">
                    <CardTitle> First Name: {props.name} </CardTitle>
                    <CardText> Last Name: {props.lname} </CardText>
                    <CardText> Job: {props.job} </CardText>
                    <CardText> Department: {props.dept} </CardText>
                    <CardText> Phone: {props.phone} </CardText>
                    <CardText> Email: {props.email}</CardText>
                    <CardText> Location: {props.loc} </CardText>

                </CardBody>
            </Card>
        </div> */
        
    )
}

export default Props