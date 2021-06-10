import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Swal from 'sweetalert2'
import WorkspaceList from './workspace-listing';
// import Swal from 'sweetalert2';

export default class CreateWorkspace extends Component {
  constructor(props) {
    super(props);

    // Setting up functions
    this.onChangeWorkspaceName = this.onChangeWorkspaceName.bind(this);
    this.onChangeWorkspaceAdmin = this.onChangeWorkspaceAdmin.bind(this);
    this.onChangeWorkspaceDescription = this.onChangeWorkspaceDescription.bind(
      this
    );
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      description: '',
      admin: '',
    };
  }

  onChangeWorkspaceName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeWorkspaceAdmin(e) {
    this.setState({ admin: e.target.value });
  }

  onChangeWorkspaceDescription(e) {
    this.setState({ description: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    const workspace = {
      name: this.state.name,
      admin: this.state.admin,
      description: this.state.description,
    };
        axios.post('http://localhost:8000/api/workspaces', workspace).then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
      // .then((res) => console.log(res.data));


      // axios.get('http://localhost:8000/api/test')
    // console.log(`Workspace successfully created!`);
    // console.log(`Name: ${this.state.name}`);
    // console.log(`Admin: ${this.state.admin}`);
    // console.log(`Description: ${this.state.description}`);
        Swal.fire(
      'Good job!',
      'Workspace Added Successfully',
      'success'
    )

    this.setState({ name: '', admin: '', description: '' });
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col>
              <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.name}
                  onChange={this.onChangeWorkspaceName}
                />
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="Admin">
                <Form.Label>Admin</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.admin}
                  onChange={this.onChangeWorkspaceAdmin}
                />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              type="textarea"
              value={this.state.description}
              onChange={this.onChangeWorkspaceDescription}
            />
          </Form.Group>

          <Button variant="primary" size="lg" block="block" type="submit">
            Add Workspace
          </Button>
        </Form>
        <br></br>
        <br></br>

        <WorkspaceList> </WorkspaceList>
      </div>
    );
  }
}
