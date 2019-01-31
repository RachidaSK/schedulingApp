import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';


const startTime = 9;
const endTime = 5;
const endTimeGMT = endTime + 12

let hours = [];
let modal=[];

for(let i = startTime ; i < endTimeGMT + 1; i++ ) {
    if(i > 12 ) {
        hours.push(i - 12 + ` PM`)
        modal.push(false)
    } else if(i < 12){
        hours.push(i + ` AM`)
        modal.push(false)
    } else {
        hours.push(i + ` PM`)
        modal.push(false)
    }
       
}

const Timebtn = () => (
    <Container>
        <Row>
        {hours.map((hour,i) => (
                <Time buttonLabel={hour}/>
         
    ))}
        </Row>
        
    </Container>
    
)

export default Timebtn;

class Time extends React.Component {
    state={
        modal: false,
        booked:false,
        FullName: '',
        PhoneNumb: ''
    }

    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log('hi')
    
    }

    handleSubmit = () => {
        this.setState({
            booked: true
          });
    }

    render() {
        return(
            <Col>
        <Button color="success" onClick={this.toggle} className={`rounded-circle hourBtn booked-${this.state.booked}`}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Form>
                <FormGroup row>
                    <Label for="exampleUser" sm={1}><i className="fa fa-user prefix"></i></Label>
                    <Col sm={11}>
                        <Input type="text" name="FullName" id="exampleUser" placeholder="Full Name" onChange={this.handleChange} value={this.state.FullName}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePhone" sm={1}><i className="fas fa-phone"></i></Label>
                    <Col sm={11}>
                        <Input type="text" name="PhoneNumb" id="examplePhone" placeholder="Phone Number" onChange={this.handleChange} value={this.state.PhoneNumb}/>
                    </Col>
                </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmit}>Submit</Button>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </Col>
        )
    }
}