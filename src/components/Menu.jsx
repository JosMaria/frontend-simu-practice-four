import { useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { MenuItem } from './MenuItem';
import { ItemChildren } from './MenuItem';

import '../stylesheets/Menu.css';

const Data = () => {
  const childrenFirstMenu =
    <>
      <ItemChildren titleItem='Mixto' to={'/mixed'} />
      <ItemChildren titleItem='Multiplicativo Decimal' to={'/multiplicative/decimal'} />
      <ItemChildren titleItem='Multiplicativo Binario' to={'/multiplicative/binary'} />
    </>

  return (    
      <MenuItem title='NO CONGRUENCIALES' height={'6.8em'} children={childrenFirstMenu} />
  )
}

export const Menu = () => {
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <nav className='menu__container'>
      <div className='hamburguer' onClick={() => setMenuClicked(!menuClicked)}>
        <BiMenu className='icon' />
      </div>
      <ul className={`list ${menuClicked ? 'translate' : ''}`}>
        <Data />
      </ul>
    </nav>
  )
}
