import React from 'react'
import ResortListing from './ResortListing';

import resort1 from "../assets/img/resort1.webp"
import resort2 from "../assets/img/resort2.webp"
import resort3 from "../assets/img/resort3.webp"
import resort4 from "../assets/img/resort4.webp"


const ResortContainer = () => {
    return (
        <>
         <section id="section-resort-list">
            <div class= "container">
                <h1>Featured Resort</h1>
                <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
                    <ResortListing title="Resort 1" image={resort1} price="100"/>
                    <ResortListing title="Resort 2" image={resort2} price="200"/>
                    <ResortListing title="Resort 3" image={resort3} price="300"/>
                    <ResortListing title="Resort 4" image={resort4} price="400"/>
                </div>
            </div>
        </section>
        </>
    )
}

export default ResortContainer
