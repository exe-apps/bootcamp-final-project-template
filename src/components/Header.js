import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Header.css';

const Header = () =>{
  return (
    <header>
      <nav>
        <ul>
          <li><Link to='/'>Component1</Link></li>
          <li><Link to='/component2'>Component2</Link></li>
          <li><Link to='/component3'>Component3</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;