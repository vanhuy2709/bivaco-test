import { useNavigate } from 'react-router-dom';
import { Rate } from 'antd';
import { useDispatch } from 'react-redux';

// Import Action
import { handleAddCartAction } from '../../store/actions/addCart.action';

const CardProduct = ({ product }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleViewDetail = () => {
    navigate(`/shop/${product.id}`);
  }

  // Handle Add Cart
  const handleAddCart = () => {
    dispatch(handleAddCartAction(product));
  }

  return (
    <div
      className='bg-white rounded-lg overflow-hidden border hover:border hover:border-[#00B207] hover:shadow-xl duration-200'
    >
      {/* Image Product */}
      <div
        className='relative cursor-pointer'
        onClick={() => handleViewDetail()}
      >
        <img src={product.image} alt='product-image' className='p-[5px] w-full h-full lg:h-[300px] object-contain' />
      </div>

      {/* Info Product */}
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 px-5 cursor-pointer'>
        <div>
          <h4
            className='text-[#2B572E] text-[1rem] leading-6 mb-[2px] cursor-pointer overflow-ellipsis whitespace-nowrap overflow-hidden w-60'
            onClick={() => handleViewDetail()}
          >
            {product.title}
          </h4>
          <p className='mb-[11px] flex items-center gap-1'>
            <span className='text-[#002603] text-[18px] font-medium leading-[27px]'>
              ${product.price}
            </span>
          </p>
        </div>


      </div>

      <div className='py-4 px-5 flex justify-between items-center'>
        {/* Rating */}
        <Rate
          allowHalf
          value={product.rating.rate}
          disabled
        />

        {/* Add Cart */}
        <i
          className="fa-solid fa-bag-shopping bg-[#DAE5DA] p-[13px] rounded-full text-[#002602] cursor-pointer text-[24px] hover:bg-[#00B207] hover:text-white duration-200 w-fit"
          onClick={() => handleAddCart(product)}
        ></i>
      </div>
    </div>
  );
};

export default CardProduct;