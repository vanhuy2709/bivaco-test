import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Subcribe = () => {
  const form = useRef();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {

    emailjs
      .sendForm('service_828ofmc', 'template_5od1s36', form.current, {
        publicKey: '0Itblij_tdU_vCzeC',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="bg-[#F2F2F2]">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between py-14 gap-6">
        {/* Subcribe */}
        <div className='text-center lg:text-left'>
          <h4 className='text-gray-900 text-[24px] font-medium leading-9 mb-1'>Subcribe our Newsletter</h4>
          <p className='text-gray-400 text-[14px] leading-[21px]'>Pellentesque eu nibh eget mauris congue mattis matti.</p>
        </div>

        {/* Input Subcribe */}
        <form onSubmit={handleSubmit(onSubmit)} ref={form}>
          <div className='flex flex-col gap-4'>
            <div>
              <input
                type='text'
                placeholder='Your Name'
                className='text-gray-500 leading-6 px-6 rounded-full outline-none py-[14px] w-72 md:w-96'
                name="user_name"
                {...register('name', { required: true })}
              />
            </div>

            <div>
              <input
                type='email'
                placeholder='Your Email'
                className='text-gray-500 leading-6 px-6 rounded-full outline-none py-[14px] w-72 md:w-96'
                name="user_email"
                {...register('email', { required: true })}
              />
            </div>

            <div>
              <input
                type='text'
                placeholder='Your Address'
                className='text-gray-500 leading-6 px-6 rounded-full outline-none py-[14px] w-72 md:w-96'
                name="user_address"
                {...register('address', { required: true })}
              />
            </div>

            <div>
              <textarea
                placeholder='Message'
                className='text-gray-500 leading-6 px-6 rounded-full outline-none py-[14px] w-72 md:w-96'
                name="message"
                {...register('message', { required: true })}
              ></textarea>
            </div>

            <div>
              <button type='submit' className='text-white font-semibold leading-[20px] bg-[#00B207] rounded-full px-10 py-4 w-full'>Subcribe</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subcribe;