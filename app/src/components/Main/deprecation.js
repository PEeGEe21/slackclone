import React, {Component} from 'react';
import Sidebar from './Layout/index';



export default class Deprecation extends Component {
  // function configure() {
  render() {
    return (
      <div>
        <Sidebar>
        <div id="page_contents">
            <h1 className="mb-3">
              <i className="fa fa-info mr-3"></i>Deprecation
            </h1>
          </div>
        </Sidebar>
      </div>
    );
  }
}
// function deprecation() {
//   return (
//     <div>

//       <Sidebar>
//         <div>Deprecation</div>
//       </Sidebar>
//     </div>
//   );
// }

// export default deprecation;