import { NavLink, useNavigate } from "react-router-dom";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { IoHomeOutline } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import TextField from "@mui/material/TextField";

// Import Action
import { loginUserAction } from '../../store/actions/apiRequest.action';

// Breadcrumb Variable
const listCrumbs = [
  { name: <IoHomeOutline className='text-[20px]' />, url: '/' },
  { name: 'Login', url: '/login' },
]

// User Initial Values
const initialValuesUser = {
  name: '',
  password: '',
}

// User Schema
const userSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  password: yup.string().required("Password is required"),
})

const LoginPage = () => {
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
          className="bg-white px-6 pt-6 pb-8 rounded-lg shadow-lg flex flex-col gap-5 max-w-lg mx-auto my-20"
          onSubmit={handleSubmit(data => dispatch(loginUserAction(data, navigate)))}
        >
          <h2 className="text-gray-900 text-[32px] font-semibold leading-[39px] text-center">Sign In</h2>
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
              label="Password"
              {...register('password')}
              error={!!errors?.password}
              helperText={errors?.password?.message}
            />
          </div>

          <button className="text-white bg-[#00B207] text-[14px] font-semibold leading-4 py-[14px] rounded-full">Login</button>

          <p className="text-gray-600 text-[14px] leading-[21px] text-center">
            Don't have account?
            <NavLink to="/signup" className="text-gray-900 font-medium"> Register</NavLink>
          </p>
        </form>
      </div>
    </>
  );
};

export default LoginPage;