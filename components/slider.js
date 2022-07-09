 import React from 'react'
 import {Zoom} from "react-slideshow-image";
 import "react-slideshow-image/dist/styles.css"
 import Image from 'next/image'
//  import styles from '../'
 const Slideshow =() => {
    const images = [
        "images/image1.jpg",
        "images/image2.jpg",
        "images/image3.jpg",
        "images/image4.jpg",
      ];
    
    const zoomInProper = {
        indicators: true,
		scale: 1.2,
		duration: 1000,
		transitionDuration: 100,
		infinite: true,
		prevArrow: (
			<div style={{ width: "30px", marginRight: "-30px", cursor: "pointer" }}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="#2e2e2e"
				>
					<path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z" />
				</svg>
			</div>
		),
		nextArrow: (
			<div style={{ width: "30px", marginLeft: "-30px", cursor: "pointer" }}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512"
					fill="#2e2e2e"
				>
					<path d="M512 256L270 42.6v138.2H0v150.6h270v138z" />
				</svg>
			</div>
		),
    };
    return(
    //     <div className="m-10">
    //     <h1 className="text-center text-6xl  font-bold pb-10 ">
    //         Responsive Next.js <span className="text-indigo-600">Image Slider</span>
    //     </h1>

    //     <Zoom {...zoomInProper}>
    //         {images.map((each, index) => (
    //             <div key={index} className="flex justify-center w-full h-full">
    //                 <img style={{width:'100vh', height:'100vh'}}
    //                     className="w-3/4 object-cover rounded-lg shadow-xl"
    //                     src={each} alt="dsddd"
    //                 />
    //             </div>
    //         ))}
    //     </Zoom>
    // </div>
    <div>
   
    <div style={{display:'flex'}}>
      <div >
        <div >
          <img  src="https://th.bing.com/th/id/R.d1ed34ac8f711d6d807bacb7f217852c?rik=D3hF6b%2bxzryonA&riu=http%3a%2f%2fgraphicgoogle.com%2fwp-content%2fuploads%2f2017%2f10%2fFacebook-Fashion-Big-Sale-Banner.jpg&ehk=xAR7O2yBftDuPOZZ2li0TEjvnMDEw2%2fuJhTgzEniJoc%3d&risl=&pid=ImgRaw&r=0"></img>
        </div>
        <div >
          <h1 style={{ fontSize: '70px', textAlign:'center' }}>One day, the iki is necessary</h1>
          
          <p style={{ fontSize: '20px',margin:'50px 0px',fontWeight:'500px' }}>Do Not Copy Right</p>
          <button  style={{fontSize: '20px',padding:'5px',background:'transparent'}}>Shop Now</button>
        </div>
      </div>
    
      <div >
        <div >
          <img  alt="dsd" src="images/image4.jpg"></img>
        </div>
        <div >
          <h1 style={{ fontSize: '70px', textAlign:'center' }}>One day, the iki is necessary</h1>
          
          <p style={{ fontSize: '20px',margin:'50px 0px',fontWeight:'500px' }}>Do Not Copy Right</p>
          <button  style={{fontSize: '20px',padding:'5px',background:'transparent'}}>Shop Now</button>
        </div>
      </div>

    </div>
  
  </div>
    )
 }
 
 export default Slideshow