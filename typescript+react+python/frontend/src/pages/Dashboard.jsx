import React from 'react'
import Carousel from '../components/Carousel'


export default function Dashboard() {
    return (
        <>
        <div
            className="h-full w-full bg-cover bg-center p-20 space-y-6"
            style={{ backgroundImage: "url('/bg.jpg')" }}
        >
            <Carousel />
            <section className="grid grid-cols-3 gap-4">
                <div className="p-4 bg-white rounded shadow">Card 1</div>
                <div className="p-4 bg-white rounded shadow">Card 2</div>
                <div className="p-4 bg-white rounded shadow">Card 3</div>
            </section>
            
        </div>
        <div>
       
        </div>
        </>

    )
}