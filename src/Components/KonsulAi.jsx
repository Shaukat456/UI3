import Cards from "./Cards";
import Kcards from "./KCards";
import Lefth from "./lefthed";
import PM from './PM'
import { Fade}  from 'react-reveal'
import simpleParallax from 'simple-parallax-js';
import { useState } from "react/cjs/react.production.min";
import TryIt from "./Tryit";
// import SecH from './secH'

function KonsulAi() {

     
    const diamond_Images=document.querySelector(".dimg");
    console.log(diamond_Images)

  
    
    function imageScroll(){

        const diamond_Images=document.querySelectorAll(".dimg");
        new simpleParallax(   
            diamond_Images ,
            {
                delay: 0,
                orientation: 'down',
                scale: 1.3,
                overflow: true,
                // customWrapper:''
            }
    
           )


           
        const appearOnScroll=document.querySelectorAll("aimg");
        new simpleParallax(   
            appearOnScroll ,
            {
                delay: 0,
                orientation: 'up',
                scale: 1.3,
                overflow: true,
                // customWrapper:''
            }
    
           )

        //    const diamond_Image=document.querySelectorAll(".vwi");
        //    new simpleParallax(   
        //        diamond_Image ,



        //        {
        //            delay: 0,
        //            orientation: 'right',
        //            scale: 1.3,
        //            overflow: true,
        //            // customWrapper:''
        
        
        //        }
       
        //       )
       
            
       
       
       
       
       
       
       
            }

       
       
   

    


    return (  <>
    
        <div className="row kaaai    ">
            <div className="KAI   d-lg-flex  ">
                {/* <h1 className="kaih text-light "> */}
                {/* <h2 className="white-stroke">AI</h2> */}
                {/* </h1>   */}

                 
                <div className="kaih text-light ">  KONSUL   </div>      
                <div className=" kaih white_stroke offset-1   text-break ">  AI</div>          

              


            </div>
            <div className="row-cols-2 d-lg-flex text-light my-5 ">
            <Fade bottom>

            <div className="col-6 d-flex flex-column my-5 scrls ">
                 

            <figure >
                <img src="https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/612b640e788c9e6bc08ac3c4_Rectangle%2079.svg"  style={{ zIndex:'6' }}     className=''   id='i1'  alt="" />
              
                {/* <img src="https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/612b6be997627b33ed8101e6_Vector_2.svg" alt="" /> */}
            </figure>

            <figure>
            <img src="https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/612b640e3a5724fc149a4aeb_Rectangle%2078.svg"   style={{ zIndex:'7' }} className='dimg'   id='i2' alt="" />
                
            </figure>
            <figure>
                <img src="https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/612b640e08e8df59251d2705_Rectangle%2075.svg"  style={{ zIndex:'8' }} className='dimg'   id='i3' alt="" />
            </figure>

            <figure>
           
                <img src="https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/612b640ef55a8371531a2700_Rectangle%2077.svg"  style={{ zIndex:'9' }}  className='dimg' id='i4'  alt="" />
            </figure>

        {/* <figure>
        <img src="https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/612e75af4f61582f3c77ebbc_Rectangle%2077_2.svg"  style={{ zIndex:'10' }} id='i5' alt="" />

        </figure> */}



        {/* <div class="line_hor_center"></div> */}


        { 
    imageScroll()    }



{
// dImage(diamond_Images)
// console.log(diamond_Images)
}



    {
          function dImage(){
            window.addEventListener("scroll",()=>{
                let scrollPosition = window.pageYOffset;
                // console.log(scrollPosition)
                diamond_Images.style.transform = `translateY(${scrollPosition * 1.5}%)`
            })
        }
        
    
    }


        <div className="row">

        <div style={{ width:'100px' }} className ="line_hor_center-copy"></div>
            
        </div>

            <div className=" pb-1">
           <Lefth h1='SEE HOW ' h2='IT WORKS'/>
           
            </div>
           </div>
        </Fade>
            
            <div className="col-6 text-light kaq py-5">
                <p>Konsul is an AI-based software for contract analysis. It automatically reviews contracts, mitigates risks by identifying suboptimal terms, finds deviations from already approved contracts and suggests corrections

            <br />
            <br />
            So legal professionals do not need to waste time on routine proofreading of a document because Konsul immediately draws their attention to all the important clauses of the contract

                </p>

                <hr />

                <div className="d-lg-flex my-5">
                    
                
                <div className="col-lg-6 brd ">
                <div data-w-id="13fe3e31-0ab2-3535-f200-77d2555f742d" style={{height:'2px'}} class="line_grid"></div>

                        <h3 className=" head2 my-3" id='sev'>70%</h3>
                       <h5> 
                       of contract cycle time saved
                           
                           </h5> 
                </div>
                    
                    


                <div className="col-lg-6 brd">
                <div data-w-id="13fe3e31-0ab2-3535-f200-77d2555f742d" style={{height:'2px'}} class="line_grid"></div>
                    <h3 className=" my-3 head2" id='fiv'>5 min</h3>
                    <h5>to review a contract</h5>
                </div>
                </div>










                <div className="cardds row-auto d-flex my-5  ">
                    <div className="col">
                    <p className="my-5 bp">BENEFITS</p>

{/* <div className="slider_wrap">

        <div className="splide slider2 splide--slide splide--ltr splide--draggable is-active is-initialized">
            <div className="splide__track w-dyn-list">
                <div className="splide__list w-dyn-items">

                    
                </div>
            </div>
        </div>

</div> */}









        <div className="d-lg-flex">




       

                <Cards
                 img='https://uploads-ssl.webflow.com/61221299a58304715ac08aef/612248f852b92774c105dcc7_2.svg' h='Legal Professionals and Experts'
                  checks1='Checks Contract faster' 
                   checks2='Reduce Contract Risks'
                   
                   checks3='Improve work efficiency ' 
                   
                    img1='https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/6122496b6eeeddf85d8aaf2f_Union.svg'
                img2='https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/6122496b6eeeddf85d8aaf2f_Union.svg'
                img3='https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/6122496b6eeeddf85d8aaf2f_Union.svg'
                   
                   
                   />

               

             

                <Cards 
                img='https://uploads-ssl.webflow.com/61221299a58304715ac08aef/612246d2bbe7a1e61f32c02c_406.svg' h='Legal Professionals and Experts' 
                checks1='Checks Contract faster' 
                checks2='Reduce Contract Risks' 
                checks3='Improve work efficiency '
                img1='https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/6122496b6eeeddf85d8aaf2f_Union.svg'
                img2='https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/6122496b6eeeddf85d8aaf2f_Union.svg'
                img3='https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/6122496b6eeeddf85d8aaf2f_Union.svg'
                
                />

</div>


        <div className="row ">
            <div>
            <div className="btn btn-primary  flex-column text-dark  lightbox_circle ">
                <figure>
                    <img src="https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/612256fc52b927d49d0637ef_Polygon%201.svg" alt="" />
                </figure>
                Watch video
            </div>
            <figure  className="d-flex">
                
                <img src="https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/612b6e3dd9c3537cf54b517f_Ellipse%2025.svg" id='vw1' className="vwi"     alt="" />
                <img src="https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/612b6e3d97627b0741810f87_Ellipse%2026.svg" id='vw2' className="vwi"  alt="" />
                <img src="https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/612b6e3d97627b0741810f87_Ellipse%2026.svg" id='vw3'  className="vwi" alt="" />
                <img src="https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/612b6e3e89146980d00b627d_Ellipse%2027.svg" id='vw4'  className="vwi"  alt="" />
            </figure>
            </div>
        </div>
                    </div>
                    

             

               


                </div>
            </div>
            
            </div>


        <TryIt/>
            </div>






            <div className="keyF my-5   ">
                
                <div className="row ">

                <div class="lines_wrap">
                    <div class="vert_line_bg">

                    </div>
                    </div>
                    
                <div className="col heads  text-light lynes kf   ">
                    
                      

                        <Lefth 
                        h1='KEY'
                        h2='FEATURES'
                        />

               


                </div>

                
                <div className="col-6  my-2">
                    

                    <div className="row">
        
                    <div className="col-6 my-3">
                <Kcards 
                h='Mitigate risks'
                p='Konsul AI automatically identifies suboptimal contract terms and suggests changes'
                img='https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/61225a77e0bf2677a059d193_123.svg'
                />

                    </div>

                    <div className="col-6 my-3">

                <Kcards 
                h='Match to templates'
                p='See if a document matches an approved template so you can   standard  your company'
                img='https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/61225a77411cba7f96f75f87_noun_abstract_1750748%201.svg'
                
/>

                    </div>
                  
                    <div className="col-6 my-3">

                <Kcards 
                h='Compare documents'
                p='Compare contracts side-by-side to see the difference between two versions'
                img='https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/613919addb794d4707700018_Group%20542.svg'
                
/>

                    </div>
                  
                    
                    <div className="col-6 my-3">

                <Kcards 
                h='Train algorithms'
                p='Add new risks and  algorithms to customize Konsul for your contracts and industry'
                img='https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/61225a77bc5a47c081d3930a_Frame%2047495.svg'
                
/>

                    </div>
                  
                    
                
                </div>


                </div>
                
                <div className="kta d-lg-flex  my-5">
                <div className="col-6 my-5 p-5 heads fontss text-light ">
                    <Lefth
                        h1='KEY '
                        h2='TECHNOLOGICAL'
                        h3='ADVANTAGES'
                    />

                </div>
                    <div className="col-6 my-5 p-5 text-light  ">
                        <h3>Konsul AI is based on several key technologies</h3>
                    
                        <div className="row mx-1 my-5    ">
                            <span className="d-lg-flex fontss fw  " style={{alignItems:'center'}} >
                                <p className="head2 fontss num fw">01</p>
                                <p className="mx-2">Our own neural network language model trained on millions of legal documents</p>
                                
                            </span>
                          
                            <span className="d-lg-flex fontss fw " style={{alignItems:'center'}}>
                                <p className="head2 fontss num blue  fw" >02</p>
                                <p className="mx-2">Heuristic methods developed by legal experts to improve quality of contract checking</p>
                                
                            </span>
                          
                            <span className="d-lg-flex fontss  fw" style={{alignItems:'center'}}>
                                <p className="head2 fontss num morblue fw">03</p>
                                <p className="mx-2">Deep Learning classification model based on new Transformer architecture</p>
                                
                            </span>
                          
                           


                        </div>

                        <div class="div-block-9"><div class="line_90"></div></div>



                        <p className="heads py-5 para pr-5 mr-5">Konsul AI is a complex system, which combines state-of-the-art deep learning technologies with heuristic methods, developed precisely to cope with tasks in the LegalTech domain</p>
                    </div>



                    
                </div>
                
                
                </div>
                <PM/>
    
        </div>
    
    
    </>);
}

export default KonsulAi;