import React, {Component} from 'react';
import Sidebar from './Layout/index';




export default class Invitations extends Component {
  // function configure() {
  render() {
    return (
      <div>
        <Sidebar>
        <div id="page_contents">
            <h1 className="mb-3">
              <i className="fa fa-user-plus mr-3"></i>Invitations
            </h1>
          </div>
        </Sidebar>
      </div>
    );
  }
}


// function invitations() {
//   return (
//     <div>

//       <Sidebar>
//         <div>Invitations</div>
//       </Sidebar>
//     </div>
//   );
// }



// export default invitations;