import { useParams } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Spin } from "antd";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import InfoProduct from "../../components/DetailProductPage/InfoProduct";

// Import Action
import { fetchProductByIdAction } from '../../store/actions/apiRequest.action';

const DetailProductPage = () => {

  const dispatch = useDispatch();
  const params = useParams();
  const { productById } = useSelector(reduxData => reduxData.productReducer);
  const { pending, product } = productById;

  // Breadcrumb variable
  const listCrumbs = [
    { name: <IoHomeOutline className='text-[20px]' />, url: '/' },
    { name: 'Shop', url: '/shop' },
    { name: `${product?.title}`, url: '/' },
  ]

  useEffect(() => {
    dispatch(fetchProductByIdAction(params.id))
  }, [])

  return (
    <>
      {
        pending ?
          (
            <div className="max-w-screen-xl mx-auto px-4 text-center">
              <Spin />
            </div>
          )
          :
          (<>
            <Breadcrumb crumbs={listCrumbs} />
            <div className='max-w-screen-xl mx-auto px-4'>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 my-8'>
                <div>
                  <img
                    src={product?.image}
                    className='w-full h-full object-contain'
                  />
                </div>
                <InfoProduct product={product} />
              </div>
            </div>
          </>
          )
      }

    </>
  );
};

export default DetailProductPage;