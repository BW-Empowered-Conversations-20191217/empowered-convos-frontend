import React from "react";
import {Card, CardBody, CardTitle, CardText} from "reactstrap";


const Props = props => {
    return (
        <div> 
            <Card>
                <CardBody>
                    <CardTitle> First Name: {props.name} </CardTitle>
                    <CardText> Last Name: {props.name} </CardText>
                    <CardText> Job: {props.job} </CardText>
                    <CardText> Department: {props.dept} </CardText>
                    <CardText> Phone: {props.phone} </CardText>
                    <CardText> Email: {props.email}</CardText>
                    <CardText> Location: {props.loc} </CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default Props