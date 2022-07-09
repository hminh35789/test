import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React from 'react'
import styles from '../styles/Slider.module.css'


const images = [
  "images/image1.jpg",
  "images/image2.jpg",
  "images/image3.jpg",
  "images/image4.jpg",
];
// const nextBtn = ()=>{

// }
// const slider = document.querySelector(".slider")
// const nextBtn = document.querySelector(".next-btn");
// const preBtn = document.querySelector(".prev-btn");
// const slides = document.querySelectorAll('.slide');
// const slideIcon = document.querySelectorAll('.slide-icon');
// const numberofSlides = slides.length;
// var slideNumber = 0;
// image slide next button
// nextBtn.addEventListener("click", ()=>{
//     slides.forEach((slide)=>{
//         slide.classList.remove("active");
//     })
//     slideIcon.forEach((slideIcon)=>{
//         slideIcon.classList.remove("active");
//     })

//     slideNumber++;

//     if(slideNumber > (numberofSlides-1)){
//         slideNumber = 0;
//     }

//     slides[slideNumber].classList.add("active");
//     slideIcon[slideNumber].classList.add("active");
// });
// pre slide
// preBtn.addEventListener("click", ()=>{
//     slides.forEach((slide)=>{
//         slide.classList.remove("active");
//     })
//     slideIcon.forEach((slideIcon)=>{
//         slideIcon.classList.remove("active");
//     })

//     slideNumber--;

//     if(slideNumber < 0){
//         slideNumber = numberofSlides - 1;
//     }

//     slides[slideNumber].classList.add("active");
//     slideIcon[slideNumber].classList.add("active");
// });
// image slider aotu play
// var playSlider;

// var repeat = () => {
//     playSlider = setInterval(function(){
//         slides.forEach((slide)=>{
//         slide.classList.remove("active");
//     })
//     slideIcon.forEach((slideIcon)=>{
//         slideIcon.classList.remove("active");
//     })

//     slideNumber++;

//     if(slideNumber > (numberofSlides-1)){
//         slideNumber = 0;
//     }

//     slides[slideNumber].classList.add("active");
//     slideIcon[slideNumber].classList.add("active");
//     }, 1000);
// }
// repeat();
// //stop image slider when move on

// slider.addEventListener("mouseover", ()=>{
//     clearInterval(playSlider);
// });
// slider.addEventListener("mouseout", ()=>{
//     repeat();
// });

const Slider = () => {
  return(
    <div className={styles.slider}>
    <ArrowLeftOutlined className={styles.arrowL} >

    </ArrowLeftOutlined>
    <div className={styles.wrap}>
      <div className={styles.slide}>
        <div className={styles.hinhanh}>
          <img className={styles.img} src="https://th.bing.com/th/id/R.d1ed34ac8f711d6d807bacb7f217852c?rik=D3hF6b%2bxzryonA&riu=http%3a%2f%2fgraphicgoogle.com%2fwp-content%2fuploads%2f2017%2f10%2fFacebook-Fashion-Big-Sale-Banner.jpg&ehk=xAR7O2yBftDuPOZZ2li0TEjvnMDEw2%2fuJhTgzEniJoc%3d&risl=&pid=ImgRaw&r=0"></img>
        </div>
        <div className={styles.info}>
          <h1 style={{ fontSize: '70px', textAlign:'center' }}>One day, the iki is necessary</h1>
          
          <p style={{ fontSize: '20px',margin:'50px 0px',fontWeight:'500px' }}>Do Not Copy Right</p>
          <button  style={{fontSize: '20px',padding:'5px',background:'transparent'}}>Shop Now</button>
        </div>
      </div>
    
      <div className={styles.slide}>
        <div className={styles.hinhanh}>
          <img className={styles.img} alt="dsd" src="https://th.bing.com/th/id/R.d1ed34ac8f711d6d807bacb7f217852c?rik=D3hF6b%2bxzryonA&riu=http%3a%2f%2fgraphicgoogle.com%2fwp-content%2fuploads%2f2017%2f10%2fFacebook-Fashion-Big-Sale-Banner.jpg&ehk=xAR7O2yBftDuPOZZ2li0TEjvnMDEw2%2fuJhTgzEniJoc%3d&risl=&pid=ImgRaw&r=0"></img>
        </div>
        <div className={styles.info}>
          <h1 style={{ fontSize: '70px', textAlign:'center' }}>One day, the iki is necessary</h1>
          
          <p style={{ fontSize: '20px',margin:'50px 0px',fontWeight:'500px' }}>Do Not Copy Right</p>
          <button  style={{fontSize: '20px',padding:'5px',background:'transparent'}}>Shop Now</button>
        </div>
      </div>

    </div>
    <ArrowRightOutlined className={styles.arrowR} >

    </ArrowRightOutlined>
  </div>
  // 

//   <div className="dybo">
//            <div className="slider">
          
//        <style jsx>{`
//       .dybo{
//         background: black;
//       }
//         .slider
// {   
//     position: relative;
//     background: #929297;
//     width: 98vw;
//     min-height: 500px;
//     margin: auto;
//     overflow: hidden;
//     border-radius: 10px;
    
// }
// .slider .slide
// {
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     // clip-path: circle(0% at 0 50%);
// }
// .slider .slide.active
// {
//   clip-path: circle(150% at 0 51%);
//   transition: 2s;
 
// }
// .slider .slide img
// {
//     position: absolute;
   
//     width: 100%; 
//     min-height: 600px;
//     object-fit: cover;
// }
// .slider .slide .info
// {
//     position: absolute;
//     color: #222;
//     background: rgba(255, 255, 255, 0.3);
//     width: 75%;
//     margin-top: 50px;
//     margin-left: 50px;
//     padding: 20px;
//     border-radius: 5px;
//     box-shadow: 0 5px 25px rgb(1 , 1, 1/ 5%);
// }
// .slider .slide .info h2
// {
//     font-size: 2em;
//     font-weight: 800;
// }
// .slider .slide .info p
// {
//     font-size: 1em;
//     font-weight: 400;
// }
// .navigation
// {
//     height: 500px;
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     opacity: 0;
//     transition: opacity 0.5s ease;
// }
// .slider:hover .navigation
// {
//     opacity: 1;
// }
// .prev-btn, .next-btn{
//     z-index: 999;
//     font-size: 2em;
//     color: #222;
//     background: rgba(255, 255, 255, 0.8);
//     padding: 10px;
//     cursor: pointer;
    
//   }
//   .prev-btn{
//     border-top-right-radius: 3px;
//     border-bottom-right-radius: 3px;
//   }
  
//   .next-btn{
//     border-top-left-radius: 3px;
//     border-bottom-left-radius: 3px;
//   }
//   .navigation-visibility{
//     z-index: 999;
//     display: flex;
//     justify-content: center;
//   }
//   .navigation-visibility .slide-icon{
//     z-index: 999;
//     background: rgba(255, 255, 255, 0.5);
//     width: 10px;
//     height: 10px;
//     transform: translateY(-50px);
//     margin: 0 6px;
//     border-radius: 50%;
//     box-shadow: 0 5px 25px rgb(1 1 1 / 20%);
//     margin-top: auto;
//   }
//   .navigation-visibility .slide-icon.active
//   {
//     background: #00BFFF;
//   } 
//   @media (max-width: 900px){
//     .slider{
//       width: 100%;
      
//     }
//     .slide{
//       margin-right:50px;
//     }
    
//     /* body{
//         background: red;
//     } */
//     .slider .slide .info{
//       position: relative;
//       width: 80%;
//       margin-left: auto;
//       margin-right: auto;
//     }
//   }
  
//   @media (max-width: 500px){
//     .slider .slide .info h2{
//       font-size: 1.8em;
//       line-height: 40px;
//     }
//     /* body{
//         background: blue;
//     } */
//     .slider .slide .info p{
//       font-size: 0.9em;
//     }
//   }
     
//       `}</style>
     
       
// <div className="slide active">
//   {/* {images.map((each, index) =>{

//   })
    
//   } */}
// <img  alt="dsd" src="images/image1.jpg"></img>
//     <div className="info">
//         <h2 >Summer West</h2>
//         <p >Lorem, ipsum dolor sit amet consectetur
//              adipisicing elit. Laboriosam, vitae quae sint corporis accusantium dolore sed,
//               sequi alias, impedit laudantium pariatur minima facere? Tempora dolores, 
//               consectetur dolor atque tempore ut.
//         </p>
//     </div>
// </div>
// <div className="slide">
// <img  alt="dsd" src="images/image4.jpg"></img>
//     <div className="info">
//         <h2>Summer West</h2>
//         <p>Lorem, ipsum dolor sit amet consectetur
//              adipisicing elit. Laboriosam, vitae quae sint corporis accusantium dolore sed,
//               sequi alias, impedit laudantium pariatur minima facere? Tempora dolores, 
//               consectetur dolor atque tempore ut.
//         </p>
//     </div>
// </div>
// <div className="slide">
// <img  alt="dsd" src="images/image4.jpg"></img>
//     <div className="info">
//         <h2>Summer West</h2>
//         <p>Lorem, ipsum dolor sit amet consectetur
//              adipisicing elit. Laboriosam, vitae quae sint corporis accusantium dolore sed,
//               sequi alias, impedit laudantium pariatur minima facere? Tempora dolores, 
//               consectetur dolor atque tempore ut.
//         </p>
//     </div>
// </div>
// <div className="slide">
// <img  alt="dsd" src="images/image4.jpg"></img>
//     <div className="info">
//         <h2>Summer West</h2>
//         <p>Lorem, ipsum dolor sit amet consectetur
//              adipisicing elit. Laboriosam, vitae quae sint corporis accusantium dolore sed,
//               sequi alias, impedit laudantium pariatur minima facere? Tempora dolores, 
//               consectetur dolor atque tempore ut.
//         </p>
//     </div>
// </div>
// <div className="slide">
// <img  alt="dsd" src="images/image1.jpg"></img>
//     <div className="info">
//         <h2>Summer West</h2>
//         <p>Lorem, ipsum dolor sit amet consectetur
//              adipisicing elit. Laboriosam, vitae quae sint corporis accusantium dolore sed,
//               sequi alias, impedit laudantium pariatur minima facere? Tempora dolores, 
//               consectetur dolor atque tempore ut.
//         </p>
//     </div>
// </div>
// <div className="navigation">
//     <i className="fas fa-chevron-left prev-btn"></i>
//     {/* <i className="fas fa-chevron-right next-btn" onClick={nextBtn}></i> */}
// </div>
// <div className="navigation-visibility">
//     <div className="slide-icon active"></div>
//     <div className="slide-icon"></div>
//     <div className="slide-icon"></div>
//     <div className="slide-icon"></div>
//     <div className="slide-icon"></div>
//   </div>
// </div>
//   </div>

  
  );
  
     
  
  
};

export default Slider