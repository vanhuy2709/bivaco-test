import { Box, useTheme, Button, Typography } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Spin } from "antd";
import { tokens } from '../../theme';
import Header from "../../components/Header/Header";
import { useSelector, useDispatch } from "react-redux";

// Modal
import ModalUpdate from "../../components/Modal/ModalUpdate";
import ModalDelete from "../../components/Modal/ModalDelete";

// Import Action
import { fetchProductAction } from '../../store/actions/apiRequest.action';
import {
  handleOpenModalUpdateProduct,
  handleOpenModalDeleteProduct
} from '../../store/actions/modal.action';

const Product = () => {
  const dispatch = useDispatch();
  const { listProduct } = useSelector(reduxData => reduxData.productReducer);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { pending, productList } = listProduct;

  useEffect(() => {
    dispatch(fetchProductAction());
  }, [])

  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "image",
      headerName: "Image",
      renderCell: ({ row: { image } }) => {
        return (
          <img src={image} className="w-20 h-20 object-cover" />
        )
      }
    },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
      cellClassName: "name-column--cell"
    },
    {
      field: "price",
      headerName: "Price",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Typography>{row?.category}</Typography>
        )
      }
    },
    {
      field: "action",
      headerName: "Actions",
      headerAlign: 'center',
      flex: 1,
      renderCell: ({ row }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            gap="1rem"
          >
            <Button
              variant="contained"
              color="success"
              onClick={() => dispatch(handleOpenModalUpdateProduct(row))}
            >
              View Detail
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => dispatch(handleOpenModalDeleteProduct(row))}
            >
              Delete
            </Button>
          </Box>
        )
      }
    },
  ]

  return (
    <Box m="20px">
      <Header title="PRODUCTS" subtitle="Managing List Products" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none"
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300]
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none"
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`
          }
        }}
      >
        {
          pending ?
            (<Spin fullscreen />)
            :
            (<>
              {
                productList &&
                <DataGrid
                  getRowHeight={() => 'auto'}
                  rows={productList}
                  columns={columns}
                  getRowId={row => row.id}
                  components={{ Toolbar: GridToolbar }}
                />
              }
            </>)
        }

      </Box>

      <ModalUpdate />
      <ModalDelete />
    </Box>
  );
};

export default Product;