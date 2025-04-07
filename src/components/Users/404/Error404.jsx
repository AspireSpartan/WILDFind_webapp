import { Link } from "react-router-dom";
function Error404() {
    return (
      <div className="Error404">
        <h1>Error404:Page not found</h1>
        <Link to="/landingPage">BACK TO HOME PAGE</Link> 
      </div>
    );
  }
  
  export default Error404;
  