import { useState } from "react";
import { listMenu } from '../../data/menu';
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import locationIcon from '../../assets/icons/location-icon.svg';
import phoneIcon from '../../assets/icons/phone-icon.svg';
import BadgeCart from "../Cart/BadgeCart";

const Navbar = () => {
  const storageUser = JSON.parse(sessionStorage.getItem('user'));
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { listCart, subTotal } = useSelector(reduxData => reduxData.cartReducer);

  // Handle Logout
  const handleLogout = () => {
    sessionStorage.removeItem('user');
    navigate('/login');
    window.location.reload();
  }

  return (
    <>
      {/* Top Navbar */}
      <div className='max-w-screen-xl mx-auto py-3 px-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <img src={locationIcon} alt='location-icon' />
            <p className='text-gray-600 text-xs'>
              Store Location: Lincoln- 344, Illinois, Chicago, USA
            </p>
          </div>

          <div>

            {
              storageUser ?
                (
                  <div className="flex items-center gap-4">
                    <p className="text-gray-600 text-xs">
                      Welcome, {storageUser.name}
                    </p>
                    <p
                      className="text-gray-600 text-xs font-bold cursor-pointer"
                      onClick={() => handleLogout()}
                    >
                      Logout
                    </p>
                  </div>
                )
                :
                (<>
                  <NavLink to='/login' className='text-gray-600 text-xs'>Sign In</NavLink>
                  <span className='text-gray-600 text-xs'> / </span>
                  <NavLink to='/signup' className='text-gray-600 text-xs'>Sign Up</NavLink>
                </>)
            }

          </div>

        </div>
      </div>

      <hr />

      {/* Middle Navbar */}
      <nav className='max-w-screen-xl mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between md:items-center mt-4'>
        <div
          className='flex gap-2 mb-4 cursor-pointer'
          onClick={() => navigate('/')}
        >
          <h2 className='text-gray-900 text-[32px] font-medium leading-[38px]'>FIFASH</h2>
        </div>
        <div className='flex items-center mb-4 gap-3'>
          <BadgeCart />
          <div>
            <p className='text-gray-700 text-[11px]'>Shopping cart:</p>
            <p className='text-gray-900 text-[14px] font-medium leading-[14px]'>
              ${subTotal.toFixed(2) || 0}
            </p>
          </div>
        </div>
      </nav>

      {/* Menu Navbar */}
      <nav className='bg-[#333333] px-4 md:py-4'>
        <div className='max-w-screen-xl mx-auto flex justify-between items-center relative md:px-4'>
          <button
            className='flex items-center justify-center px-2 py-2 md:hidden'
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className="fa-solid fa-bars text-white"></i>
          </button>

          <ul className='hidden md:flex items-center gap-8 bg-[#333333] z-10'>
            {listMenu.map(menu => (
              <li key={menu.id}>
                <NavLink to={menu.path} className='text-gray-400 hover:text-white text-[14px] font-medium leading-[21px]'>{menu.name}</NavLink>
              </li>
            ))}
          </ul>

          {isOpen ?
            (<ul className='absolute top-9 w-full rounded py-2 px-2 md:relative md:flex md:items-center md:top-0 md:gap-8 bg-[#333333] md:w-max z-10'>
              {listMenu.map(menu => (
                <li key={menu.id} className="my-2">
                  <NavLink
                    to={menu.path}
                    className='text-gray-400 hover:text-white text-[14px] font-medium leading-[21px]'
                    onClick={() => setIsOpen(false)}
                  >
                    {menu.name}
                  </NavLink>
                </li>
              ))}
            </ul>) : (<></>)}


          <div className='flex items-center gap-2'>
            <img src={phoneIcon} alt='phone-icon' />
            <p className='text-white text-[14px] font-medium leading-[21px]'>(219) 555-0114</p>
          </div>
        </div>
      </nav>

    </>


  );
};

export default Navbar;