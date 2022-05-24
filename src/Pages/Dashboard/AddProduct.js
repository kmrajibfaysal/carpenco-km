import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

function AddProduct() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);

        fetch(`http://localhost:5000/newProduct`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(() => {
                toast.success('Product added!');
                reset();
            });
    };

    return (
        <div>
            <h2 className="mt-16 text-center text-4xl">Add A Product</h2>
            <form className="mx-auto mt-6 max-w-lg space-y-4" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label className="text-base font-medium leading-none text-gray-800">
                        Product Name
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
                        Details
                    </label>
                    <input
                        {...register('sd', {
                            required: { value: true, message: 'This is required!' },
                        })}
                        aria-label="enter name"
                        type="text"
                        className="text-md mt-1 block w-full rounded border border-gray-300 py-2  px-4 shadow-sm focus:outline-primary md:text-lg"
                    />
                    <p className="text-red-500">{errors.sd?.message}</p>
                </div>
                <div>
                    <label className="text-base font-medium leading-none text-gray-800">
                        Price per unit
                    </label>
                    <input
                        {...register('price', {
                            required: { value: true, message: 'This is required!' },
                        })}
                        aria-label="enter name"
                        type="text"
                        placeholder="4.99"
                        className="text-md mt-1 block w-full rounded border border-gray-300 py-2  px-4 shadow-sm focus:outline-primary md:text-lg"
                    />
                    <p className="text-red-500">{errors.price?.message}</p>
                </div>
                <div>
                    <label className="text-base font-medium leading-none text-gray-800">
                        Minimum order quantity
                    </label>
                    <input
                        {...register('minOrder', {
                            required: { value: true, message: 'This is required!' },
                        })}
                        aria-label="enter name"
                        type="text"
                        className="text-md mt-1 block w-full rounded border border-gray-300 py-2  px-4 shadow-sm focus:outline-primary md:text-lg"
                    />
                    <p className="text-red-500">{errors.minOrder?.message}</p>
                </div>
                <div>
                    <label className="text-base font-medium leading-none text-gray-800">
                        Stock
                    </label>
                    <input
                        {...register('stock', {
                            required: { value: true, message: 'This is required!' },
                        })}
                        aria-label="enter name"
                        type="text"
                        className="text-md mt-1 block w-full rounded border border-gray-300 py-2  px-4 shadow-sm focus:outline-primary md:text-lg"
                    />
                    <p className="text-red-500">{errors.stock?.message}</p>
                </div>
                <div>
                    <label className="text-base font-medium leading-none text-gray-800">
                        Material
                    </label>
                    <input
                        {...register('material', {
                            required: { value: true, message: 'This is required!' },
                        })}
                        aria-label="enter name"
                        type="text"
                        className="text-md mt-1 block w-full rounded border border-gray-300 py-2  px-4 shadow-sm focus:outline-primary md:text-lg"
                    />
                    <p className="text-red-500">{errors.material?.message}</p>
                </div>
                <div>
                    <label className="text-base font-medium leading-none text-gray-800">
                        Image link
                    </label>
                    <input
                        {...register('img', {
                            required: { value: true, message: 'This is required!' },
                        })}
                        aria-label="enter name"
                        type="text"
                        placeholder="https://i.ibb.co/x3py39p/pliers.webp"
                        className="text-md mt-1 block w-full rounded border border-gray-300 py-2  px-4 shadow-sm focus:outline-primary md:text-lg"
                    />
                    <p className="text-red-500">{errors.img?.message}</p>
                </div>

                <div className="flex flex-col items-center justify-center space-x-2">
                    <button className="border-2 border-primary bg-primary px-7 py-3 font-josefin text-base font-bold text-white transition duration-500 ease-in-out hover:border-primary  hover:bg-transparent hover:text-primary ">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AddProduct;
