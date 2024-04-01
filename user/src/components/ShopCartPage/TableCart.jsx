import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FaMinus, FaPlus } from "react-icons/fa6";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Import Action
import { handleRemoveProductInCart } from '../../store/actions/addCart.action';
import {
  handleDecreaseQuantityProductInCart,
  handleIncreaseQuantityProductInCart
} from '../../store/actions/changeQuantity.action';


const TableCart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { listCart, subTotal } = useSelector(reduxData => reduxData.cartReducer);

  // Handle Navigate Shop Page
  const handleNavigateShopPage = () => {
    navigate('/shop');
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <p className='uppercase text-gray-500 text-[14px] font-[Poppins] font-medium leading-[14px] tracking-[0.42px]'>Product</p>
            </TableCell>
            <TableCell align="right">
              <p className='uppercase text-gray-500 text-[14px] font-[Poppins] font-medium leading-[14px] tracking-[0.42px]'>Price</p>
            </TableCell>
            <TableCell align="right">
              <p className='uppercase text-gray-500 text-[14px] font-[Poppins] font-medium leading-[14px] tracking-[0.42px]'>Quantity</p>
            </TableCell>
            <TableCell align="right">
              <p className='uppercase text-gray-500 text-[14px] font-[Poppins] font-medium leading-[14px] tracking-[0.42px]'>Subtotal</p>
            </TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {/* Render List Cart in localStorage */}
          {
            listCart.map((item, index) => (
              <TableRow
                key={item.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <span className='flex items-center gap-3'>
                    <img src={item.image} alt='image' className='w-[100px] h-[100px] object-cover' />
                    <p className='text-gray-900 font-[Poppins] font-normal leading-6'>{item.title}</p>
                  </span>
                </TableCell>
                <TableCell align="right">
                  <p className='text-gray-900 leading-6 font-[Poppins]'>
                    ${item.price}
                  </p>
                </TableCell>
                <TableCell align="right" className='relative'>
                  <span className='flex justify-end border items-center max-w-max absolute right-0 top-1/2 -translate-y-1/2 rounded-full p-2'>
                    <button className='bg-[#F2F2F2] p-1 rounded-full'>
                      <FaMinus
                        onClick={() => dispatch(handleDecreaseQuantityProductInCart(item))}
                      />
                    </button>
                    <input
                      type='text'
                      className='w-10 text-center outline-none'
                      value={item.quantity}
                      readOnly
                    />
                    <button className='bg-[#F2F2F2] p-1 rounded-full'>
                      <FaPlus
                        onClick={() => dispatch(handleIncreaseQuantityProductInCart(item))}
                      />
                    </button>
                  </span>
                </TableCell>
                <TableCell align="right">
                  <p className='text-gray-900 font-medium leading-6 font-[Poppins]'>${(item.price * item.quantity).toFixed(2)}</p>
                </TableCell>
                <TableCell align="right" className=''>
                  <AiOutlineCloseCircle
                    className='text-[1.5rem] cursor-pointer'
                    onClick={() => dispatch(handleRemoveProductInCart(item))}
                  />
                </TableCell>
              </TableRow>
            ))
          }

          <TableRow>
            <TableCell className='px-5 py-4'>
              <button
                className='text-gray-700 md:text-[14px] font-semibold py-[14px] px-8 rounded-full bg-[#F2F2F2]'
                onClick={() => handleNavigateShopPage()}
              >
                Return to shop
              </button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableCart;