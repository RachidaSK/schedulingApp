import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';


class HourBtn extends React.Component {
    state= {
        modal9: false,
        modal10: false,
        modal11: false,
        modal12: false,
        modal13: false,
        modal14: false,
        modal15: false,
        modal16: false,
        modal17: false,
        booked9: false,
        booked10: false,
        booked11: false,
        booked12: false,
        booked13: false,
        booked14: false,
        booked15: false,
        booked16: false,
        booked17: false,
        FullName9: '',
        FullName10: '',
        FullName11: '',
        FullName12: '',
        FullName13: '',
        FullName14: '',
        FullName15: '',
        FullName16: '',
        FullName17: '',
        PhoneNumb9: '',
        PhoneNumb10: '',
        PhoneNumb11: '',
        PhoneNumb12: '',
        PhoneNumb13: '',
        PhoneNumb14: '',
        PhoneNumb15: '',
        PhoneNumb16: '',
        PhoneNumb17: ''
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr
        this.setState({
          [modalNumber]: !this.state[modalNumber]
        });
    }
    
    submit = nr => () => {
        let bookedNumber = 'booked' + nr
        this.setState({
          [bookedNumber]: true
        });
    }
    

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log('hi')
    
    }


    render() {
        return (
            <Container className="DisplayHours">
                <Row >
                    <Col xs="2" sm="2" md="2" lg="2" className="time mt-3">
                        <Button  onClick={this.toggle(9)} className={`rounded-circle hourBtn booked-${this.state.booked9}`} >9 AM</Button>
                        <Modal isOpen={this.state.modal9} toggle={this.toggle(9)} className="modal-dialog-centered">
                            <ModalHeader toggle={this.toggle(9)}>Schedule Appointment</ModalHeader>
                            <ModalBody>
                                <Form>
                                    <FormGroup row>
                                        <Label for="exampleFullName" sm={1}><i className="fa fa-user prefix"></i></Label>
                                        <Col sm={11}>
                                            <Input type="text" name="FullName9" id="exampleFullName" placeholder="Full Name" onChange={this.handleChange} value={this.state.FullName9} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="examplePhone" sm={1}><i className="fas fa-phone"></i></Label>
                                        <Col sm={11}>
                                            <Input type="text" name="PhoneNumb9" id="examplePhone" placeholder="Phone Number" onChange={this.handleChange} value={this.state.PhoneNumb9} />
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button   color="primary" onClick={this.submit(9)}>Submit</Button>
                                <Button color="secondary" onClick={this.toggle(9)}>Cancel</Button>
                            </ModalFooter>
                        </Modal>              
                    </Col>
                    <Col xs="2" sm="2" md="2" lg="2" className="time mt-3">
                        <Button  onClick={this.toggle(10)} className={`rounded-circle hourBtn booked-${this.state.booked10}`} >10 AM</Button>
                        <Modal isOpen={this.state.modal10} toggle={this.toggle(10)} className="modal-dialog-centered">
                            <ModalHeader toggle={this.toggle(10)}>Schedule Appointment</ModalHeader>
                            <ModalBody>
                                <Form>
                                    <FormGroup row>
                                        <Label for="exampleFullName" sm={1}><i className="fa fa-user prefix"></i></Label>
                                        <Col sm={11}>
                                            <Input type="text" name="FullName10" id="exampleFullName" placeholder="Full Name" onChange={this.handleChange} value={this.state.FullName10} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="examplePhone" sm={1}><i className="fas fa-phone"></i></Label>
                                        <Col sm={11}>
                                            <Input type="text" name="PhoneNumb10" id="examplePhone" placeholder="Phone Number" onChange={this.handleChange} value={this.state.PhoneNumb10} />
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button   color="primary" onClick={this.submit(10)}>Submit</Button>
                                <Button color="secondary" onClick={this.toggle(10)}>Cancel</Button>
                            </ModalFooter>
                        </Modal>              
                    </Col>
                    <Col xs="2" sm="2" md="2" lg="2" className="time mt-3">
                        <Button  onClick={this.toggle(11)} className={`rounded-circle hourBtn booked-${this.state.booked11}`} >11 AM</Button>
                        <Modal isOpen={this.state.modal11} toggle={this.toggle(10)} className="modal-dialog-centered">
                            <ModalHeader toggle={this.toggle(11)}>Schedule Appointment</ModalHeader>
                            <ModalBody>
                                <Form>
                                    <FormGroup row>
                                        <Label for="exampleFullName" sm={1}><i className="fa fa-user prefix"></i></Label>
                                        <Col sm={11}>
                                            <Input type="text" name="FullName11" id="exampleFullName" placeholder="Full Name" onChange={this.handleChange} value={this.state.FullName11} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="examplePhone" sm={1}><i className="fas fa-phone"></i></Label>
                                        <Col sm={11}>
                                            <Input type="text" name="PhoneNumb11" id="examplePhone" placeholder="Phone Number" onChange={this.handleChange} value={this.state.PhoneNumb11} />
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button   color="primary" onClick={this.submit(11)}>Submit</Button>
                                <Button color="secondary" onClick={this.toggle(11)}>Cancel</Button>
                            </ModalFooter>
                        </Modal>              
                    </Col>
                    <Col xs="2" sm="2" md="2" lg="2" className="time mt-3">
                        <Button  onClick={this.toggle(12)} className={`rounded-circle hourBtn booked-${this.state.booked12}`} >12 PM</Button>
                        <Modal isOpen={this.state.modal12} toggle={this.toggle(12)} className="modal-dialog-centered">
                            <ModalHeader toggle={this.toggle(12)}>Schedule Appointment</ModalHeader>
                            <ModalBody>
                                <Form>
                                    <FormGroup row>
                                        <Label for="exampleFullName" sm={1}><i className="fa fa-user prefix"></i></Label>
                                        <Col sm={11}>
                                            <Input type="text" name="FullName12" id="exampleFullName" placeholder="Full Name" onChange={this.handleChange} value={this.state.FullName12} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="examplePhone" sm={1}><i className="fas fa-phone"></i></Label>
                                        <Col sm={11}>
                                            <Input type="text" name="PhoneNumb12" id="examplePhone" placeholder="Phone Number" onChange={this.handleChange} value={this.state.PhoneNumb12} />
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button   color="primary" onClick={this.submit(12)}>Submit</Button>
                                <Button color="secondary" onClick={this.toggle(12)}>Cancel</Button>
                            </ModalFooter>
                        </Modal>              
                    </Col>
                    <Col xs="2" sm="2" md="2" lg="2" className="time mt-3">
                        <Button  onClick={this.toggle(13)} className={`rounded-circle hourBtn booked-${this.state.booked13}`} >1 PM</Button>
                        <Modal isOpen={this.state.modal13} toggle={this.toggle(13)} className="modal-dialog-centered">
                            <ModalHeader toggle={this.toggle(13)}>Schedule Appointment</ModalHeader>
                            <ModalBody>
                                <Form>
                                    <FormGroup row>
                                        <Label for="exampleFullName" sm={1}><i className="fa fa-user prefix"></i></Label>
                                        <Col sm={11}>
                                            <Input type="text" name="FullName13" id="exampleFullName" placeholder="Full Name" onChange={this.handleChange} value={this.state.FullName13} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="examplePhone" sm={1}><i className="fas fa-phone"></i></Label>
                                        <Col sm={11}>
                                            <Input type="text" name="PhoneNumb13" id="examplePhone" placeholder="Phone Number" onChange={this.handleChange} value={this.state.PhoneNumb13} />
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button   color="primary" onClick={this.submit(13)}>Submit</Button>
                                <Button color="secondary" onClick={this.toggle(13)}>Cancel</Button>
                            </ModalFooter>
                        </Modal>              
                    </Col>
                    <Col xs="2" sm="2" md="2" lg="2" className="time mt-3">
                        <Button  onClick={this.toggle(14)} className={`rounded-circle hourBtn booked-${this.state.booked14}`} >2 PM</Button>
                        <Modal isOpen={this.state.modal14} toggle={this.toggle(14)} className="modal-dialog-centered">
                            <ModalHeader toggle={this.toggle(14)}>Schedule Appointment</ModalHeader>
                            <ModalBody>
                                <Form>
                                    <FormGroup row>
                                        <Label for="exampleFullName" sm={1}><i className="fa fa-user prefix"></i></Label>
                                        <Col sm={11}>
                                            <Input type="text" name="FullName14" id="exampleFullName" placeholder="Full Name" onChange={this.handleChange} value={this.state.FullName14} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="examplePhone" sm={1}><i className="fas fa-phone"></i></Label>
                                        <Col sm={11}>
                                            <Input type="text" name="PhoneNumb14" id="examplePhone" placeholder="Phone Number" onChange={this.handleChange} value={this.state.PhoneNumb14} />
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button   color="primary" onClick={this.submit(14)}>Submit</Button>
                                <Button color="secondary" onClick={this.toggle(14)}>Cancel</Button>
                            </ModalFooter>
                        </Modal>              
                    </Col>
                    <Col xs="2" sm="2" md="2" lg="2" className="time mt-3">
                        <Button  onClick={this.toggle(15)} className={`rounded-circle hourBtn booked-${this.state.booked15}`} >3 PM</Button>
                        <Modal isOpen={this.state.modal15} toggle={this.toggle(15)} className="modal-dialog-centered">
                            <ModalHeader toggle={this.toggle(15)}>Schedule Appointment</ModalHeader>
                            <ModalBody>
                                <Form>
                                    <FormGroup row>
                                        <Label for="exampleFullName" sm={1}><i className="fa fa-user prefix"></i></Label>
                                        <Col sm={11}>
                                            <Input type="text" name="FullName15" id="exampleFullName" placeholder="Full Name" onChange={this.handleChange} value={this.state.FullName15} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="examplePhone" sm={1}><i className="fas fa-phone"></i></Label>
                                        <Col sm={11}>
                                            <Input type="text" name="PhoneNumb15" id="examplePhone" placeholder="Phone Number" onChange={this.handleChange} value={this.state.PhoneNumb15} />
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button   color="primary" onClick={this.submit(15)}>Submit</Button>
                                <Button color="secondary" onClick={this.toggle(15)}>Cancel</Button>
                            </ModalFooter>
                        </Modal>              
                    </Col>
                    <Col xs="2" sm="2" md="2" lg="2" className="time mt-3">
                        <Button  onClick={this.toggle(16)} className={`rounded-circle hourBtn booked-${this.state.booked16}`} >4 PM</Button>
                        <Modal isOpen={this.state.modal16} toggle={this.toggle(16)} className="modal-dialog-centered">
                            <ModalHeader toggle={this.toggle(16)}>Schedule Appointment</ModalHeader>
                            <ModalBody>
                                <Form>
                                    <FormGroup row>
                                        <Label for="exampleFullName" sm={1}><i className="fa fa-user prefix"></i></Label>
                                        <Col sm={11}>
                                            <Input type="text" name="FullName16" id="exampleFullName" placeholder="Full Name" onChange={this.handleChange} value={this.state.FullName16} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="examplePhone" sm={1}><i className="fas fa-phone"></i></Label>
                                        <Col sm={11}>
                                            <Input type="text" name="PhoneNumb16" id="examplePhone" placeholder="Phone Number" onChange={this.handleChange} value={this.state.PhoneNumb16} />
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button   color="primary" onClick={this.submit(16)}>Submit</Button>
                                <Button color="secondary" onClick={this.toggle(16)}>Cancel</Button>
                            </ModalFooter>
                        </Modal>              
                    </Col>
                    <Col xs="2" sm="2" md="2" lg="2" className="time mt-3">
                        <Button  onClick={this.toggle(17)} className={`rounded-circle hourBtn booked-${this.state.booked17}`} >5 PM</Button>
                        <Modal isOpen={this.state.modal17} toggle={this.toggle(17)} className="modal-dialog-centered">
                            <ModalHeader toggle={this.toggle(17)}>Schedule Appointment</ModalHeader>
                            <ModalBody>
                                <Form>
                                    <FormGroup row>
                                        <Label for="exampleFullName" sm={1}><i className="fa fa-user prefix"></i></Label>
                                        <Col sm={11}>
                                            <Input type="text" name="FullName17" id="exampleFullName" placeholder="Full Name" onChange={this.handleChange} value={this.state.FullName17} />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Label for="examplePhone" sm={1}><i className="fas fa-phone"></i></Label>
                                        <Col sm={11}>
                                            <Input type="text" name="PhoneNumb17" id="examplePhone" placeholder="Phone Number" onChange={this.handleChange} value={this.state.PhoneNumb17} />
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button   color="primary" onClick={this.submit(17)}>Submit</Button>
                                <Button color="secondary" onClick={this.toggle(17)}>Cancel</Button>
                            </ModalFooter>
                        </Modal>              
                    </Col>
                    
                    
                </Row>
            </Container>
    );
  }
}

export default HourBtn;