import React, {Component} from 'react';
import Sidebar from './Layout/index';



export default class Billing extends Component {
  // function configure() {
  render() {
    return (
      <div>
        <Sidebar>
        <div id="page_contents">
            <h1 className="mb-3">
              <i className="fa fa-credit-card mr-3"></i>Billing
            </h1>
          </div>
        <div></div>
      </Sidebar>
      </div>
    );
  }
}
// function billing() {
//   return (
//     <div>

//       <Sidebar>
//         <div>Billing</div>
//       </Sidebar>
//     </div>
//   );
// }

// export default billing;