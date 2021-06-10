import React from 'react';
import Navbar from '../components/Navbar';

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="notFound align-items-center ">
        <div className="container">
          <div className="spider">
            <i className="fas fa-spider"></i>
          </div>

          <h1 className=" align-items-center" >
            <span className="num">4 </span>
            <i className="fas fa-cog text-success"></i>
            <span className="num"> 4</span>
          </h1>
          <p>Sorry, the page you were trying to view does not exist.</p>
        </div>
      </div>
    </div>
  );
}

{
  /* <div>
<h1 className="display-4">404 Page Not found</h1>

<p className="lead">Sorry, that page does not exist</p>
</div> */
}
