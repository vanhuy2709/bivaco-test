import { FaMinus, FaPlus } from "react-icons/fa6";
import { CiShoppingBasket } from "react-icons/ci";
import { Rate } from 'antd';
import { useDispatch } from 'react-redux';

// Import Action
import { handleAddCartProductById } from '../../store/actions/addCart.action';
import {
  handleDecreaseQuantityProductById,
  handleIncreaseQuantityProductById
} from '../../store/actions/changeQuantity.action';

const InfoProduct = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div>
      {/* Name */}
      <div className='flex items-center gap-2 mb-3'>
        <h2 className='text-gray-900 text-[26px] md:text-[36px] font-semibold leading-[44px]'>{product?.title}</h2>
      </div>

      {/* Rating */}
      <div className='flex items-center gap-1 mb-5'>
        <Rate
          value={product?.rating?.rate}
          disabled
          allowHalf
        />
        <p className='text-gray-600 text-[14px]'>{product?.rating?.count} Review</p>
      </div>

      {/* Price */}
      <div className='flex items-center gap-1 mb-5'>
        <p className='text-[#2C742F] text-[24px] font-medium leading-9'>
          ${product?.price}
        </p>
      </div>

      <hr />

      {/* Description */}
      <div className='my-6'>
        <p className='text-gray-500 text-[14px]'>{product?.description}</p>
      </div>

      <hr />

      {/* Add cart */}
      <div className='flex gap-2 my-[18px]'>
        {/* Quantity */}
        <div className='flex items-center border p-2 rounded-full'>
          <div
            className='bg-[#F2F2F2] p-[10px] rounded-full cursor-pointer'
            onClick={() => dispatch(handleDecreaseQuantityProductById())}
          >
            <FaMinus />
          </div>
          <input
            type='number'
            className='w-10 text-center outline-none text-gray-900 leading-6'
            value={product?.quantity}
            readOnly
          />
          <div
            className='bg-[#F2F2F2] p-[10px] rounded-full cursor-pointer'
            onClick={() => dispatch(handleIncreaseQuantityProductById())}
          >
            <FaPlus />
          </div>
        </div>

        {/* Button */}
        <button
          className='text-white font-semibold leading-5 bg-[#00B207] py-4 px-10 rounded-full w-full flex items-center justify-center gap-4 text-[12px] md:text-[16px]'
          onClick={() => dispatch(handleAddCartProductById(product))}
        >
          Add to Cart
          <CiShoppingBasket className='text-[1rem] md:text-[1.5rem]' />
        </button>
      </div>

      <hr />

      {/* Type */}
      <div className='my-6'>
        <p className='text-gray-900 text-[14px] font-medium'>
          Category:
          <span className='text-gray-500 font-normal'> {product?.category}</span>
        </p>
      </div>

    </div>
  );
};

export default InfoProduct;