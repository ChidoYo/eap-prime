import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const navOptions = [
  {name: 'Home', link: '/'},
  {name: 'Me Mine and Ours', link: '/me'},
  {name: 'Collection', link: '/collection'},
  {name: 'Yo!', link: '/yo'}
];

// const Nav = () => {
//   return navOptions.map((item, index) => {
//     return (
//       <Router key={index}>
//         <li className="nav-item">
//           <Link to={item.link} className="nav-link">{item.name}</Link>
//         </li>
//       </Router>
//     )
//   })
// };

class Nav extends React.Component {
  render() {
    return (
      <Router>
        <ul className="navbar-nav mr-auto">
          {
            navOptions.map((item, index) =>
              <li className="nav-item" key={index}>
                <Link className="nav-link"  to={item.link}>{item.name}</Link>
              </li>
            )
          }
        </ul>
      </Router>
    )
  }
}

export default Nav;
