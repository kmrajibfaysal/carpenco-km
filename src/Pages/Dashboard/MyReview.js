import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function Review() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        fetch(`https://carpenco-server.herokuapp.com/reviews`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(() => {
                toast.success('Review added!');
                reset();
            });
    };
    return (
        <>
            <h2 className="mt-16 text-center text-4xl">Add Review</h2>
            <form className="mx-auto mt-6 max-w-lg space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="text-base font-medium leading-none text-gray-800">
                        Your Name
                    </label>
                    <input
                        {...register('name', {
                            required: { value: true, message: 'This is required!' },
                        })}
                        aria-label="enter name"
                        type="text"
                        className="text-md mt-1 block w-full rounded border border-gray-300 py-2  px-4 shadow-sm focus:outline-primary md:text-lg"
                    />
                    <p className="text-red-500">{errors.name?.message}</p>
                </div>
                <div>
                    <label className="text-base font-medium leading-none text-gray-800">
                        Review
                    </label>
                    <input
                        {...register('review', {
                            required: { value: true, message: 'This is required!' },
                        })}
                        aria-label="enter name"
                        type="text"
                        className="text-md mt-1 block w-full rounded border border-gray-300 py-2  px-4 shadow-sm focus:outline-primary md:text-lg"
                    />
                    <p className="text-red-500">{errors.review?.message}</p>
                </div>

                <div className="form-control w-full">
                    <label className="text-base font-medium leading-none text-gray-800">
                        Ratings
                    </label>
                    <select
                        defaultValue="DEFAULT"
                        className="select select-bordered"
                        {...register('rating', {
                            required: { value: true, message: 'This is required!' },
                        })}
                    >
                        <option value="DEFAULT" disabled>
                            Pick one
                        </option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <p className="text-red-500">{errors.rating?.message}</p>
                </div>

                <div className="flex flex-col items-center justify-center space-x-2">
                    <button className="border-2 border-primary bg-primary px-7 py-3 font-josefin text-base font-bold text-white transition duration-500 ease-in-out hover:border-primary  hover:bg-transparent hover:text-primary ">
                        Create
                    </button>
                </div>
            </form>
        </>
    );
}

export default Review;
