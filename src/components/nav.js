import React from 'react';

const navOptions = [
  {name: 'Home'},
  {name: 'Me Mine and Ours'},
  {name: 'Collection'},
  {name: 'Yo!'}
];

const Nav = () => {
  return navOptions.map((name, index) => {
    return (
      <li className="nav-item">
        <a className="nav-link" href="#" key="">j</a>
      </li>
    )
  })
};

export default Nav;
