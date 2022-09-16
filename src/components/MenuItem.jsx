import { BsListNested } from "react-icons/bs";
import { FiChevronRight } from 'react-icons/fi';
import { useState } from 'react';
import { Link } from "react-router-dom";

export const MenuItem = ({ title, height, children }) => {
  const [itemMenuClicked, setItemMenuClicked] = useState(false);
  const [itemMenuHeight, setItemMenuHeight] = useState('0');

  const menuItemClicked = () => {
    setItemMenuClicked(!itemMenuClicked);
    setItemMenuHeight(itemMenuClicked ? '0' : height);
  }
  
  return (
    <li className='list__item list__item--click' onClick={menuItemClicked}>
      <ItemAncestor titleName={title} clickedAncestor={itemMenuClicked} />
      <ItemChildrenList heightList={itemMenuHeight} children={children} />
    </li>
  )
}

const ItemAncestor = ({ titleName, clickedAncestor }) => {
  return (
    <div className={`list__button list__button--click ${clickedAncestor ? 'arrow' : ''}`}>
      <BsListNested className='list__icon' />
      <Link to={'#'} className='nav__link'>{titleName}</Link>
      <FiChevronRight className='list__arrow' />
    </div>
  )
};

const ItemChildrenList = ({ heightList, children }) => {
  return (
    <ul className='list__show' style={{ height: heightList }}>
      {children}
    </ul>
  )
};

export const ItemChildren = ({ titleItem, to }) => {
  return (
    <li className='list__inside'>
      <Link to={to} className='nav__link nav__link--inside'>{titleItem}</Link>
    </li>  
  ) 
};
