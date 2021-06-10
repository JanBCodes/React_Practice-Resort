import React from 'react'
import ResortListing from './ResortListing'


const ResortContainer = () => {
    return (
        <>
         <section id="section-resort-list">
            <div class= "container">
                
            <h1>Featured Resort</h1>
            <div className="grid grid-gap-1 grid-row-gap-2 grid-col-4">
                <ResortListing/>
              </div>
            </div>
        </section>
        </>
    )
}

export default ResortContainer
