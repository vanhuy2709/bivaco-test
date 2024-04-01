import Header from '../../components/Header/Header';
import {
  Box,
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import { Formik } from "formik";
import * as yup from 'yup';
import { useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from 'antd';

// Action
import { createProductAction, fetchCategoryAction } from '../../store/actions/apiRequest.action';

// Product Initial Values
const initialValuesProduct = {
  title: '',
  description: '',
  price: 0,
  category: '',
  image: '',
}

// Product Schema
const productSchema = yup.object().shape({
  title: yup.string().required("Name is required"),
  description: yup.string().required("Description is required"),
  price: yup.number().required("Price is required"),
  category: yup.string().required("Category is required"),
  image: yup.string().required("Image is required"),
})

const CreateProduct = () => {
  const dispatch = useDispatch();
  // Set Dark Mode / Light Mode Feature
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const { listCategory } = useSelector(reduxData => reduxData.categoryReducer);
  const { categoryList } = listCategory;

  useEffect(() => {
    dispatch(fetchCategoryAction());
  }, [])

  // Submit Create Product
  const handleFormSubmit = (values, { resetForm }) => {

    dispatch(createProductAction(values));
    // Reset Formik
    resetForm();
  }

  return (
    <Box m="20px">
      <Header title="CREATE PRODUCT" subtitle="Create a New Product" />

      {/* CREATE PRODUCT */}
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValuesProduct}
        validationSchema={productSchema}
      >
        {({ values, errors, touched, handleBlur, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Product Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
                name="title"
                error={!!touched.title && !!errors.title}
                helperText={touched.title && errors.title}
                sx={{ gridColumn: "span 2" }}
              />

              <FormControl
                sx={{ gridColumn: "span 2" }}
              >
                <InputLabel>Category</InputLabel>
                <Select
                  label="Category"
                  variant="filled"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.category}
                  name="category"
                  error={!!touched.category && !!errors.category}
                  helpertext={touched.category && errors.category}
                  defaultValue=""
                  fullWidth
                >
                  {
                    categoryList && categoryList?.map(item => (
                      <MenuItem key={item} value={item}>{item}</MenuItem>
                    ))
                  }
                </Select>
              </FormControl>

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.price}
                name="price"
                error={!!touched.price && !!errors.price}
                helperText={touched.price && errors.price}
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Image"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.image}
                name="image"
                error={!!touched.image && !!errors.image}
                helperText={touched.image && errors.image}
                sx={{ gridColumn: "span 2" }}
              />

            </Box>

            <Box display="flex" justifyContent="end" mt="20px">
              <Button htmlType="submit">
                Create New Product
              </Button>
            </Box>
          </form>
        )}
      </Formik>

    </Box>
  );
};

export default CreateProduct;