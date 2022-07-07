import React from 'react'
import PropTypes from 'prop-types';
// import { Link} from 'react-router-dom';


export default function NavBar(props) {
  return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
     
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
            <li className="nav-item">
              
                <a className="nav-link active" aria-current="page" href="#">Home</a>
                
            </li>
            
          <li className="nav-item">
              {/* <Link className="nav-link" to="/About" >{props.about}</Link> */}
          </li>
         
            </ul>
            
        
        </div>
        <div className={`form-check form-switch text-${
          
          props.mode == 'light'? 'dark':'light'
        
          }`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
        </div>
        
    </div>
      </nav>
     
  )
}


NavBar.prototype = {
  title: PropTypes.string,
  about: PropTypes.string
}

NavBar.defaultProps = {
  title: 'set title here',
  about: 'about'

};