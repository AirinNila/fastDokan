import React, { useEffect, useState } from 'react';
import ShopOne from './ShopOne';

const Shop = () => {
    const [shops, setShop] = useState([])
    useEffect( () => {
        fetch('shop.json')
        .then(res => res.json())
        .then(data => setShop(data))
    } ,[])
    console.log(shops)
    return (
        <div>
            <div>
                <div className='flex flex-col justify-center items-center gap-4'></div>
                <h2 className=" text-3xl font-bold">Shops</h2>
                <div className='grid grid-cols-1 p-3 gap-4 md:grid-cols-2'>
                    {
                        shops.map(data => <ShopOne key={data.id} data={data}></ShopOne>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;