import React from 'react';

const Footer = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex items-center justify-around w-screen py-6 px-16">
                <div className="flex flex-col items-center justify-center gap-2">
                    <h3 className='text-xl font-bold mb-2 sm:text-2xl'>Shopify</h3>
                    <a href="#">
                        <div className="text-md sm:text-lg">
                            TShirts
                        </div>
                    </a>
                    <a href="#">
                        <div className="text-md sm:text-lg">
                            Hoodies
                        </div>
                    </a>
                    <a href="#">
                        <div className="text-md sm:text-lg">
                            Mugs
                        </div>
                    </a>
                </div>
                <div className="flex flex-col items-center justify-center gap-2">
                    <h3 className='text-xl font-bold mb-2 sm:text-2xl'>Shopify</h3>
                    <a href="#">
                        <div className="text-md sm:text-lg">
                            TShirts
                        </div>
                    </a>
                    <a href="#">
                        <div className="text-md sm:text-lg">
                            Hoodies
                        </div>
                    </a>
                    <a href="#">
                        <div className="text-md sm:text-lg">    
                            Mugs
                        </div>
                    </a>
                </div>
                <div>Col</div>
            </div>
            <div className='bg-emerald-400 w-screen text-center text-lg py-3 sm:text-xl'>
                All Rights Reserved
            </div>
        </div>
    )
}

export default Footer;