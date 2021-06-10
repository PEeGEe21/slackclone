import React, {Component} from 'react';
import Sidebar from './Layout/index';


export default class Authentication extends Component {
  // function configure() {
  render() {
    return (
      <div>
        <Sidebar>
        <div id="page_contents">
            <h1 className="mb-3">
              <i className="fa fa-key mr-3"></i>Authentication
            </h1>
          </div>
      
      </Sidebar>
      </div>
    );
  }
}

// function Authentication() {
//   return (
//     <div>

//       <Sidebar>
//         <div>Authentication</div>
//       </Sidebar>
//     </div>
//   );
// }

// export default authentication;