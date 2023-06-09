import React from 'react';
import { FiChevronDown } from 'react-icons/fi';

const Model = () => {
    return (
        <div>
            <div className='absolute inset-x-0 top-[15%] text-center'>
                <h1 className='text-4xl font-bold'>Model 3</h1>
                <p className='p-2 text-sm'>
                    Order Online for{' '}
                    <span className='underline underline-offset-4'>
                        Touchless Delivery
                    </span>
                </p>
            </div>
            <div className='flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%]'>
                <button>Custom Order</button>
                <button> Existing Inventory</button>
            </div>
            <div>
                <FiChevronDown />
            </div>
        </div>
    );
};

export default Model;
