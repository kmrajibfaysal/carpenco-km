import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

function MyProfile() {
    const [user, loading] = useAuthState(auth);
    const { email } = user;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const {
        data: profile,
        isLoading,
        refetch,
    } = useQuery('products', () =>
        fetch(`https://carpenco-server.herokuapp.com/users/${email}`).then((res) => res.json())
    );

    const onSubmit = (data) => {
        const newUser = {
            name: user.displayName,
            email: user.email,
            info: data,
        };

        fetch(`https://carpenco-server.herokuapp.com/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser),
        })
            .then((res) => res.json())
            .then(() => {
                toast.success('Saved!');
                refetch();
            });
    };

    if (loading || isLoading) return <Loading />;
    return (
        <>
            <h2 className="mt-16 text-center text-4xl">My Profile</h2>
            <form className="mx-auto mt-6 max-w-lg space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="text-base font-medium leading-none text-gray-800">
                        Your Name
                    </label>
                    <input
                        disabled
                        defaultValue={user?.displayName}
                        aria-label="enter name"
                        type="text"
                        className="text-md mt-1 block w-full rounded border border-gray-300 py-2  px-4 shadow-sm focus:outline-primary md:text-lg"
                    />
                </div>
                <div>
                    <label className="text-base font-medium leading-none text-gray-800">
                        Email
                    </label>
                    <input
                        disabled
                        defaultValue={profile?.email}
                        aria-label="enter name"
                        type="text"
                        className="text-md mt-1 block w-full rounded border border-gray-300 py-2  px-4 shadow-sm focus:outline-primary md:text-lg"
                    />
                </div>
                <div>
                    <label className="text-base font-medium leading-none text-gray-800">
                        Education
                    </label>
                    <input
                        {...register('education', {
                            required: { value: true, message: 'This is required!' },
                        })}
                        aria-label="enter name"
                        type="text"
                        className="text-md mt-1 block w-full rounded border border-gray-300 py-2  px-4 shadow-sm focus:outline-primary md:text-lg"
                    />
                    <p className="text-red-500">{errors.education?.message}</p>
                </div>
                <div>
                    <label className="text-base font-medium leading-none text-gray-800">
                        Your Location
                    </label>
                    <input
                        {...register('location', {
                            required: { value: true, message: 'This is required!' },
                        })}
                        aria-label="enter name"
                        type="text"
                        className="text-md mt-1 block w-full rounded border border-gray-300 py-2  px-4 shadow-sm focus:outline-primary md:text-lg"
                    />
                    <p className="text-red-500">{errors.location?.message}</p>
                </div>
                <div>
                    <label className="text-base font-medium leading-none text-gray-800">
                        Phone
                    </label>
                    <input
                        {...register('phone', {
                            required: { value: true, message: 'This is required!' },
                        })}
                        aria-label="enter name"
                        type="number"
                        className="text-md mt-1 block w-full rounded border border-gray-300 py-2  px-4 shadow-sm focus:outline-primary md:text-lg"
                    />
                    <p className="text-red-500">{errors.phone?.message}</p>
                </div>
                <div>
                    <label className="text-base font-medium leading-none text-gray-800">
                        Linkedin link:
                    </label>
                    <input
                        {...register('linkedin', {
                            required: { value: true, message: 'This is required!' },
                        })}
                        aria-label="enter name"
                        type="text"
                        className="text-md mt-1 block w-full rounded border border-gray-300 py-2  px-4 shadow-sm focus:outline-primary md:text-lg"
                    />
                    <p className="text-red-500">{errors.linkedin?.message}</p>
                </div>

                <div className="flex flex-col items-center justify-center space-x-2">
                    <button className="border-2 border-primary bg-primary px-7 py-3 font-josefin text-base font-bold text-white transition duration-500 ease-in-out hover:border-primary  hover:bg-transparent hover:text-primary ">
                        Update
                    </button>
                </div>
            </form>
        </>
    );
}

export default MyProfile;
