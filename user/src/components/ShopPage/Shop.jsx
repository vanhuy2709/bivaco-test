import { useEffect } from 'react';
import { Spin } from 'antd';
import CardProduct from '../CardProduct/CardProduct';
import { useDispatch, useSelector } from 'react-redux';

import FilterCategory from './FilterCategory';
import Sort from './Sort';

// Import Action
import { fetchProductAction } from '../../store/actions/apiRequest.action';

const Shop = () => {
  const dispatch = useDispatch();
  const { product } = useSelector(reduxData => reduxData.productReducer);
  const { filterCategory } = useSelector(reduxData => reduxData.categoryReducer);
  const { sortId } = useSelector(reduxData => reduxData.productReducer);

  const { pending, listProduct } = product;
  const { categoryListChecked } = filterCategory;
  const { sortValue } = sortId;

  // console.log(sortValue)
  // Fetch Data product
  useEffect(() => {
    dispatch(fetchProductAction(categoryListChecked, sortValue));
  }, [categoryListChecked, sortValue])

  return (
    <div className="max-w-screen-xl mx-auto px-4 mb-20 my-4">
      <div className='flex gap-6 flex-col lg:flex-row'>
        {/* Filter */}
        <div className='flex-1'>
          {/* Filter (Category, Sort) */}
          <FilterCategory />
          {/* Filter Category */}
          <hr />
          <Sort />
        </div>

        {/* Product & Pagination */}
        <div className='flex-[3]'>
          <div className='text-right text-gray-500 my-3'>
            <span className='text-gray-900 font-semibold'>
              {listProduct && listProduct?.length}
            </span> Results Found
          </div>

          {/* List Product */}
          {
            pending ?
              (<div className='text-center'>
                <Spin />
              </div>)
              :
              (<>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-6 mb-10'>
                  {
                    listProduct && listProduct?.length > 0 &&
                    listProduct?.map(product => (
                      <CardProduct key={product.id} product={product} />
                    ))
                  }
                </div>
              </>
              )
          }

        </div>
      </div>
    </div>
  );
};

export default Shop;