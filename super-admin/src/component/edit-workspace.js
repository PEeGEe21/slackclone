import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class EditWorkspace extends Component {
  constructor(props) {
    super(props);

    this.onChangeWorkspaceName = this.onChangeWorkspaceName.bind(this);
    this.onChangeWorkspaceEmail = this.onChangeWorkspaceEmail.bind(this);
    this.onChangeWorkspaceProjectname = this.onChangeWorkspaceProjectname.bind(
      this
    );
    this.onSubmit = this.onSubmit.bind(this);

    // State
    this.state = {
      email: '',
      text: '',
      username: '',
      password: '',
      projectname: '',
      // name: '',
      // admin: '',
      // description: '',
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/api/workspaces/' + this.props.match.params.id)
      .then((res) => {
        this.setState({
          email: res.data.email,
          text: res.data.text,

          projectname: res.data.projectname,
          // name: res.data.name,
          // admin: res.data.admin,
          // description: res.data.description,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeWorkspaceName(e) {
    this.setState({ text: e.target.value });
  }

  onChangeWorkspaceEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeWorkspaceProjectname(e) {
    this.setState({ projectname: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const workspaceObject = {
      text: this.state.text,
      email: this.state.email,
      projectname: this.state.projectname,

      // name: this.state.name,
      // admin: this.state.admin,
      // description: this.state.description,
    };
    

    axios
      .post(
        'http://localhost:8000/api/workspaces/' + this.props.match.params.id,
        workspaceObject
      )
      .then((res) => {
        console.log(res.data);
        console.log('Workspace successfully updated');
        
      })
      .catch((error) => {
        console.log(error);
      });


    // Redirect to Workspace List
    this.props.history.push('/workspace-listing');
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Workspace Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.text}
              onChange={this.onChangeWorkspaceName}
            />
          </Form.Group>

          <Form.Group controlId="Admin">
            <Form.Label>Admin Email</Form.Label>
            <Form.Control
              type="text"
              value={this.state.email}
              onChange={this.onChangeWorkspaceEmail}
            />
          </Form.Group>

          <Form.Group controlId="Description">
            <Form.Label>Project Name</Form.Label>
            <Form.Control
              type="text"
              value={this.state.projectname}
              onChange={this.onChangeWorkspaceProjectname}
            />
          </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            Update Workspace
          </Button>
        </Form>
      </div>
    );
  }
}
