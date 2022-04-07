import {Slide , Fade } from 'react-reveal'

function Intro() {

    return (
        <>
        <div className="row  ">
            <div className="intro p-5">

            <Fade bottom>

            <p className="p-5 ">
         <span>
               We develop intelligent solutions based on our
Data Science platform to help professionals
make their job easier and more efficient. 
Our team consists of experts in Machine
Learning 
{/* <figure className=''>  */}
<img   className='mx-3' src="https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/612232049deca1d163aa4ec3_%E2%9C%A6.svg" alt="" />

{/* </figure> */}
, Natural Language Processing
 {/* <figure> */}
    <img   className='mx-3'  src="https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/612232043ccadc0d6f6203a9_%E2%9C%BA.svg" alt="" />
{/* </figure> */}
Linguistics 
{/* <figure> */}
    <img  className='mx-3'  src="https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/61223204e6fa2a3cf3a29c96_Star%201.svg" alt="" />
    {/* </figure> */}
and Software Engineering
 {/* <figure> */}
    <img  className='mx-3'  src="https://uploads-ssl.webflow.com/61221299a58304224ec08ab2/61223204e6fa2a3cf3a29c96_Star%201.svg" alt="" />
{/* </figure> */}

.
</span> 

            </p>
            </Fade>
        </div>

            </div>
        </>
      );
}

export default Intro;