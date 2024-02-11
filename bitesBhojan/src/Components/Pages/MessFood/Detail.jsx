import React, {useState} from 'react';
import bg from '../../../assets/bg-admin.png'
import { Link } from 'react-router-dom';

// import FoodItem from '../../Css/Additem.jsx';

const Detail = () => {
    


    return (
        <>
            <div>
                <img src={bg} className='absolute z-0 blur-sm w-full h-screen' />
            </div>
            <div className="container mx-auto relative">
                <div class="flex items-center">
                    <div className="md:w-1/2">
                        <img src="" class="w-80 h-80 mr-4 mb-6 ml-4 mt-6" alt="Mess Picture" />
                    </div>

                    <div className="md:w-1/2">
                        <h1 className="text-5xl font-bold mb-4 ml-12">ABC Mess Center</h1>
                        <h1 className="text-5xl text-gray-600 mb-4 ml-12">XYZ colony, Gandhinagar</h1>
                        <h1 className="text-5xl text-gray-600 mb-4 ml-12">98272xxxxxx</h1>
                    </div>
                </div>
            </div>
            <div className="flex space-x-4 ml-4 relative">
                <Link to=''>
                <button className="bg-teal-950 hover:bg-teal-600 text-white font-bold py-4 px-6 rounded">
                    Student Enrolled
                </button>
                </Link>
                <Link to='/addmenu'>
                <button className="bg-teal-950 hover:bg-teal-600 text-white font-bold py-4 px-6 rounded">
                    Add Menu
                </button>
                </Link>
                <Link to='/donate'>
                <button className="bg-teal-950 hover:bg-teal-600 text-white font-bold py-4 px-6 rounded">
                    Donate
                </button>
                </Link>
            </div>
</>

    );
};

export default Detail;
