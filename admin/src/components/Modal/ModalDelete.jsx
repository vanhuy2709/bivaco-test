import { Modal, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";

// Action
import { handleCloseModalDeleteProduct } from '../../store/actions/modal.action';
import { deleteProductByIdAction } from '../../store/actions/apiRequest.action';

const ModalDelete = () => {
  const dispatch = useDispatch();
  const { modalDeleteProduct } = useSelector(reduxData => reduxData.modalReducer);
  const { open, id } = modalDeleteProduct;

  // Delete Product by ID
  const handleDeleteProduct = () => {
    dispatch(deleteProductByIdAction(id));
  }

  return (
    <Modal
      title="Delete Product"
      centered
      footer={false}
      open={open}
      onCancel={() => dispatch(handleCloseModalDeleteProduct())}
      width={500}
    >
      <p className="mb-6">Are you sure you want to delete this product?</p>
      <div className="flex items-center justify-end gap-4">
        <Button
          danger
          type="primary"
          onClick={() => handleDeleteProduct()}
        >
          Delete
        </Button>
        <Button
          onClick={() => dispatch(handleCloseModalDeleteProduct())}
        >
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default ModalDelete;