import React, { useState } from 'react';
import { CusFormInput, CusNotif } from '../shared';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { AddLibrarian, EditLibrarian } from '../modals';
import { useData } from '../DataContext';
const LoginPage = () => {
	const navigate = useNavigate();
	const [error, setError] = useState('');
	const { librarian } = useData();
	const form = useFormik({
		initialValues: {
			email: '',
			pass: '',
		},
		validationSchema: Yup.object({
			email: Yup.string().required('Username is required.'),
			pass: Yup.string().required('Password is required.'),
		}),
		onSubmit: (value, actions) => {
			const matchedLibrarian = librarian.find(
				(lib) => lib.email === value.email && lib.pass === value.pass
			);

			if (matchedLibrarian) {
				setError('');
				navigate('/dashboard');
			} else {
				setError('Incorrect email or password.');
			}

			actions.resetForm();
		},
	});

	return (
		<div className='bg-black'>
			<div className='w-full h-screen flex items-center justify-center bg-gradient-custom p-6'>
				<div className='p-6 md:p-8 lg:p-12 xl:p-16 flex flex-col items-center gap-12'>
					<div className='flex flex-col items-center gap-4'>
						<img
							src='./logo.png'
							className=''
						/>
						<img
							src='./name.png'
							className='items-center'
						/>
					</div>
					<div className='w-full justify-between flex flex-row items-center'>
						<div></div>
						<AddLibrarian />
					</div>

					<div className='bg-black/[.6] w-full rounded-lg h-full p-8 -mt-8'>
						<form
							onSubmit={form.handleSubmit}
							className='flex flex-col gap-4 justify-center items-center'
						>
							<CusFormInput
								name={'email'}
								label={'Email'}
								value={form.values.email}
								onChange={form.handleChange}
								onBlur={form.handleBlur}
								error={form.errors.email}
								touch={form.touched.email}
								placeholder={'yourname@acadlib.edu.ph'}
								type={'email'}
								color='white'
							/>
							<CusFormInput
								name={'pass'}
								label={'Password'}
								value={form.values.pass}
								onChange={form.handleChange}
								onBlur={form.handleBlur}
								error={form.errors.pass}
								touch={form.touched.pass}
								placeholder={'••••••••••••••••'}
								type={'password'}
								color='white'
							/>
							{error && (
								<div className='text-red-500 text-xs text-left'>
									{error}
								</div>
							)}
							<button
								className='mt-2 w-full bg-primary text-black border-none outline-none'
								type='submit'
							>
								LOGIN
							</button>

							{/* <button
								className='-mt-2 w-full bg-transparent text-white border-none outline-none'
								type='button'
							>
								Forgot Password?
							</button> */}
						</form>
						<EditLibrarian />
					</div>
				</div>
			</div>
			<CusNotif />
		</div>
	);
};

export default LoginPage;
