import React from 'react'

const ResortListing = () => {
    return (
        <>
            <div className="resort-card">

                <a href = "html/resort-description.html"> 
                    <img src="img/resort1.webp" alt=""/>   
                </a> 

                <div className="resortContent">
                    <h3>Resort 1</h3>
                    <p>$70.00 per night</p>
                </div>

            </div>

            <div className="resort-card">

                <a href = "html/resort-description.html"> 
                    <img src="img/resort2.webp" alt=""/>   
                </a> 

                <div className="resortContent">
                    <h3>Resort 2</h3>
                    <p>$70.00 per night</p>
                </div>
                
            </div>

            <div className="resort-card">

                <a href = "html/resort-description.html"> 
                    <img src="img/resort3.webp" alt=""/>   
                </a> 

                <div className="resortContent">
                    <h3>Resort 3</h3>
                    <p>$70.00 per night</p>
                </div>
                
            </div>

            <div className="resort-card">

                <a href = "html/resort-description.html"> 
                    <img src="img/resort4.webp" alt=""/>   
                </a> 

                <div className="resortContent">
                    <h3>Resort 4</h3>
                    <p>$70.00 per night</p>
                </div>
                
            </div>
    </>

    )
}

export default ResortListing
