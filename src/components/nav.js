import React from 'react';

const navOptions = [
  {name: 'Home'},
  {name: 'Me Mine and Ours'},
  {name: 'Collection'},
  {name: 'Yo!'}
];

const Nav = () => {
  return navOptions.map((item, index) => {
    return (
      <li className="nav-item" key={index}>
        <a className="nav-link" href="">{item.name}</a>
      </li>
    )
  })
};

export default Nav;
