'use client'
import { use } from 'react';
import Image from 'next/image';
import TopHead from '@/components/TopHead';
import Banner from '@/components/Banner';
import ShopList from '@/components/ShopList';
import Footer from '@/components/Footer';

async function getData() {
  'use client'
  const res = await fetch("http://localhost:3000/api/getProducts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ category: "TShirt" }),
  });
  const data = await res.json();
  const products = data.products;

  return products;
};

export default function Home() {
  const products = use(getData());
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
        <TopHead />
        <Banner />
        <div className="bg-white w-screen">
            <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">T-Shirts</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {Array.from(products).map((product) => (
                    <div key={product._id} className="group relative">
                    <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                        src={product.images ? product.images.length ? product.images[0].src : "" : ""}
                        alt={product.images ? product.images.length ? product.images[0].alt : "" : ""}
                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                    </div>
                    <div className="mt-4 flex justify-between">
                        <div>
                        <h3 className="text-sm text-gray-700">
                            <a href={product._id ? `http://localhost:3000/product/${product._id}` : ""}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {product.name}
                            </a>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">{product.colors ? product.colors.length ? product.colors[0].name : "" : ""}</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">{product.price}</p>
                    </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
        <Footer />
    </main>
  )
}
