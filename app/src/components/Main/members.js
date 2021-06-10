import React, {Component} from 'react';
import Sidebar from './Layout/index';


export default class Members extends Component {
  // function configure() {
  render() {
    return (
      <div>
        <Sidebar>
        <div id="page_contents">
            <h1 className="mb-3">
              <i className="fa fa-book mr-3"></i>Members
            </h1>
          </div>
        </Sidebar>
      </div>
    );
  }
}


// function members() {
//   return (
//     <div>

//       <Sidebar>
//         <div>Members</div>
//       </Sidebar>
//     </div>
//   );
// }



// export default members;