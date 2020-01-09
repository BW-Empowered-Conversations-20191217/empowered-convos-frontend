import React from "react";
// import {Card, CardBody, CardTitle, CardText, Jumbotron} from "reactstrap";
import {Grid, Cell} from "react-mdl";
import {List, ListItem, ListItemContent} from "react-mdl"


const Props = props => {
    return (
        <div className='gridContainer' style={{width:'100%', margin: 'auto'}}>
            <Grid className="image">
                <Cell col={6}>
                    <h1> {props.firstName} {props.lastName} VINCENT ADENIJI </h1>

                    <p> {props.about} Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </Cell>

                <Cell col={6}>
                    <div className="details"> 
                    
                    <h2> Profile </h2>
                    <hr/>
                    <div className="ListItems">
                    <List>
                        <ListItem className="detailContainer">
                            <ListItemContent icon="person" className="user" >{props.code} hfdfjsdo</ListItemContent>
                        </ListItem>
                        <ListItem className="detailContainer">
                            <ListItemContent icon="my_location" className="user">{props.code}</ListItemContent>
                        </ListItem>
                        <ListItem >
                            <ListItemContent icon="phone" className="user" >{props.code}</ListItemContent>
                        </ListItem>
                        <ListItem >
                            <ListItemContent icon="phone" className="user" >{props.code}</ListItemContent>
                        </ListItem>
                    </List> 
                    </div>
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