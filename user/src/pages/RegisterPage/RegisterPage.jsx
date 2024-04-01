import { IoHomeOutline } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from "@mui/material/TextField";

// Import Action
import { registerUserAction } from '../../store/actions/apiRequest.action';

// Breadcrumb Variable
const listCrumbs = [
  { name: <IoHomeOutline className='text-[20px]' />, url: '/' },
  { name: 'Create Account', url: '/signup' },
]

// User Initial Values
const initialValuesUser = {
  name: '',
  email: '',
  password: '',
}

// User Schema
const userSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email('Email is not valid').required("Email is required"),
  password: yup.string().required("Password is required"),
})

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: initialValuesUser,
    mode: 'onChange',
    resolver: yupResolver(userSchema)
  });

  return (
    <>
      <Breadcrumb crumbs={listCrumbs} />

      <div className="max-w-screen-xl mx-auto px-4">
        <form
          className="bg-white px-6 pt-6 pb-8 rounded-lg shadow-lg flex flex-col gap-5 max-w-2xl mx-auto my-20"
          onSubmit={handleSubmit(data => dispatch(registerUserAction(data, navigate)))}
        >
          <h2 className="text-gray-900 text-[32px] font-semibold leading-[39px] text-center">Create Account</h2>
          <div>

            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Name"
              {...register('name')}
              error={!!errors?.name}
              helperText={errors?.name?.message}
            />
          </div>
          <div>
            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Email"
              {...register('email')}
              error={!!errors?.email}
              helperText={errors?.email?.message}
            />
          </div>
          <div>

            <TextField
              fullWidth
              variant="outlined"
              type="text"
              label="Password"
              {...register('password')}
              error={!!errors?.password}
              helperText={errors?.password?.message}
            />
          </div>
          <button
            className="text-white bg-[#00B207] text-[14px] font-semibold leading-4 py-[14px] rounded-full"
          >
            Create Account
          </button>

          <p className="text-gray-600 text-[14px] leading-[21px] text-center">
            Already have account?
            <NavLink to="/login" className="text-gray-900 font-medium">  Login</NavLink>
          </p>
        </form>
      </div>
    </>
  );
};

export default RegisterPage;