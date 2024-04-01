import TableCart from "./TableCart";
import CartTotal from "./CartTotal";

const ListCart = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 mt-10 mb-20">
      <h2
        className="text-center text-gray-900 text-[32px] font-semibold leading-[39px] mb-8">
        My Shopping Cart
      </h2>
      <div className='flex flex-col lg:flex-row items-start justify-between gap-6'>
        <div className='flex-1'>
          <TableCart />
        </div>
        <CartTotal />
      </div>
    </div>
  );
};

export default ListCart;