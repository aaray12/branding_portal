import React from "react";
import { Navbar, Nav, NavbarBrand } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";

function Mynavbar(props) {

  const onLogoutClick = e => {
    e.preventDefault();
    props.logoutUser();
  };
  return (
    <div className="navbar-fixed">
      <nav className="z-depth-0">
        <div className="nav-wrapper white">
          <Link
            to="/"
            style={{
              fontFamily: "monospace"
            }}
            className="col s5 brand-logo center black-text"
          >
            {/* <i className="material-icons">code</i> */}
              Convergenx
            </Link>
          <button
            style={{
              float: "right"
            }}
            onClick={onLogoutClick}
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
          >
            Logout
            </button>
        </div>
      </nav>
    </div>)
  //   <div>
  //     <Navbar
  //       className="nav-style main nav-margins d-flex justify-content-between"
  //       expand="lg"
  //     >
  //       {/* <a className="link-style mobile-logo" to="/" style={{ flex: "1" }}>
  //         <NavbarBrand className="logo-size" alt="logo">
  //           <img
  //             height="59.22"
  //             width="259"
  //             src={TPWLogo}
  //           />
  //         </NavbarBrand>
  //       </a> */}
  //       <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto" />
  //       <Navbar.Collapse id="basic-navbar-nav">
  //         <Nav className="mx-auto parent">
  //           <Nav.Link href="/privatehome" className="resp-link">Home</Nav.Link>
  //           {/* <Nav.Link> */}
  //             {/* <Navbar.Brand href="/">
  //               <img
  //                 alt=""
  //                 src={TPWLogo}
  //                 className="d-inline-block align-top mx-auto resp-logo"
  //                 id="image-size"

  //               />{' '}
  //             </Navbar.Brand> */}
  //             <button
  //               style={{
  //                 float: "right"
  //               }}
  //               onClick={onLogoutClick}
  //               className="btn btn-large waves-effect waves-light hoverable blue accent-3"
  //             >
  //               Logout
  //           </button>
  //           {/* </Nav.Link> */}
  //           <Nav.Link href="/signup" className="resp-link">Account</Nav.Link>
  //         </Nav>
  //       </Navbar.Collapse>
  //       <div className="navbar-collapse collapse" style={{ flex: "1" }} />
  //     </Navbar>
  //   </div>
  // );

}
Mynavbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Mynavbar);
