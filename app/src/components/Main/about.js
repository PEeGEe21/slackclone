import React, { Component } from 'react';
import Sidebar from './Layout/index';
import { FaInfoCircle } from 'react-icons/fa';

export default class About extends Component {
  // function configure() {
  render() {
    return (
      <div>
        <Sidebar>
          <div id="page_contents">
            <h1 className="mb-3">
              <i className="fa fa-info-circle mr-3"></i>
              {/* <FaInfoCircle className="mr-3 icon" /> */}
              About this workspace
            </h1>
          </div>
        </Sidebar>
      </div>
    );
  }
}

// function about() {
//   return (
//     <div>

//       <Sidebar>
//         <div>About this workspace</div>
//       </Sidebar>
//     </div>
//   );
// }

// export default about;
