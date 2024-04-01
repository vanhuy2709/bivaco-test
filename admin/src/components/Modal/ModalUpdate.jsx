import { Modal, Input, Image, Select, Button, notification, message } from "antd";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Import Action
import {
  handleCloseModalUpdateProduct,
  handleChangeCategoryProductAction,
  handleChangeDescProductAction,
  handleChangeImageProductAction,
  handleChangePriceProductAction,
  handleChangeTitleProductAction,
} from '../../store/actions/modal.action';
import {
  fetchCategoryAction,
  updateProductByIdAction
} from '../../store/actions/apiRequest.action';

const ModalUpdate = () => {
  const dispatch = useDispatch();
  const { modalUpdateProduct } = useSelector(reduxData => reduxData.modalReducer);
  const { listCategory } = useSelector(reduxData => reduxData.categoryReducer);

  const { open, id, title, description, image, price, rating, category } = modalUpdateProduct;
  const { categoryList } = listCategory

  // Update Product by ID
  const handleUpdateProduct = () => {

    const newInfoProduct = {
      title: title.trim(),
      description: description.trim(),
      image: image.trim(),
      price,
      category,
    }
    dispatch(updateProductByIdAction(newInfoProduct, id));
  }

  // Fetch Data category
  useEffect(() => {
    dispatch(fetchCategoryAction())
  }, [])

  return (
    <Modal
      title="Product Detail"
      centered
      open={open}
      footer={false}
      onCancel={() => dispatch(handleCloseModalUpdateProduct())}
      width={1000}
    >

      {/* ID & Name */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-4">
          <label>ID: </label>
          <Input
            placeholder="ID"
            value={id}
            disabled />
        </div>

        <div className="flex items-center gap-4">
          <label>Title: </label>
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => dispatch(handleChangeTitleProductAction(e.target.value))}
          />
        </div>
      </div>

      {/* Description */}
      <div className="flex items-center gap-4 mb-4">
        <label>Description</label>
        <Input
          placeholder="Description"
          value={description}
          onChange={(e) => dispatch(handleChangeDescProductAction(e.target.value))}
        />
      </div>

      {/* Price & Category */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-4">
          <label>Price: </label>
          <Input
            type="number"
            placeholder="Price"
            className="w-full"
            value={price}
            onChange={(e) => dispatch(handleChangePriceProductAction(e.target.value))}

          />
        </div>

        {/* Select Category */}
        <div className="flex items-center gap-4">
          <label>Category: </label>
          <Select
            className="w-full"
            value={category}
            onChange={(value) => dispatch(handleChangeCategoryProductAction(value))}
            options={categoryList && categoryList.map(item => {
              return {
                value: item,
                label: item
              }
            })}
          />
        </div>
      </div>

      {/* Rate & Count */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center gap-4">
          <label>Rate: </label>
          <Input
            type="number"
            placeholder="Buy Price"
            className="w-full"
            value={rating.rate}
            disabled
          />
        </div>

        {/* Select Category */}
        <div className="flex items-center gap-4">
          <label>Count: </label>
          <Input
            type="number"
            placeholder="Buy Price"
            className="w-full"
            value={rating.count}
            disabled
          />
        </div>
      </div>


      {/* Image URL */}
      <div className="flex items-center gap-4 mb-4">
        <label>Image: </label>
        <Input
          type="text"
          placeholder="Image"
          value={image}
          onChange={(e) => dispatch(handleChangeImageProductAction(e.target.value))}
        />
      </div>

      {/* Show image */}
      <div className="flex items-center justify-center">
        <img src={image} className="w-1/3 h-1/3 object-cover" />
      </div>

      {/* Action */}
      <div className="flex gap-4 justify-end">
        <Button
          onClick={() => handleUpdateProduct()}
        >
          Update
        </Button>
        <Button
          type="primary"
          danger
          onClick={() => dispatch(handleCloseModalUpdateProduct())}
        >
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default ModalUpdate;