import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class WorkspaceTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteWorkspace = this.deleteWorkspace.bind(this);
  }

  deleteWorkspace() {
    axios
      .delete('http://localhost:8000/api/workspaces/' + this.props.obj.id)
      .then((res) => {
        console.log('Workspace removed deleted!');
      })
      .catch((error) => {
        console.log(error);
      });
  }
  formatDate = (str) => {
    return str.replace(/,.*$/,"");
  }
  render() {
    return (
      <tr>
        <td>{this.props.obj.id}</td>
        <td>{this.props.obj.user_id}</td>
        <td>{this.props.obj.title}</td>

        <td>
          
        {/* new Date(record.published_at).toLocaleDateString() */}
          {this.formatDate((this.props.obj.created_at).toLocaleString())}
        </td>
        <td>
          <Link
            className="edit-link mr-3"
            to={'/edit-workspace/' + this.props.obj.id}
          >
            <Button size="sm" variant="info">
              Edit
            </Button>
          </Link>
          <Button onClick={this.deleteWorkspace} size="sm" variant="danger">
            Delete
          </Button>
        </td>
      </tr>
    );
  }
}
