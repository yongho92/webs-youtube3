﻿import React from 'react'

import {headerMenus, searchKeyword, snsLink} from '../../data/header';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from '../header/Logo';
import { Menu } from '../header/Menu';
import Sns from '../header/Sns';

const Header = () => {
  const location = useLocation();
  return (
    <header id="header" role="banner">
      <Logo />

      <Menu />

      <Sns />
    </header>
  )
}

export default Header