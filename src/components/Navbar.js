import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    let {mode,togglemode}= this.props;
    
    return (
      <div>
            <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
                <Link className="navbar-brand" to="/">YNews</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">General</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/sports">Sports</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Science">Science</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Health">Health</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/technology">Technology</Link>
                        </li>
                        
                        
                    </ul>
                    <div className="navbar-form-check form-switch ">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={togglemode} />
                        <label className={`form-check-label text-${mode==='dark'?'white':'black'}`} >Enable darkmode</label>
                    </div>
                    
                </div>
            </nav>
      </div>
    )
  }
}

export default Navbar