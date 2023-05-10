import React from 'react'
import Header from '../components/Header'
import iconmemory from '../images/icon-memory.svg'
import iconreaction from '../images/icon-reaction.svg'
import iconverbal from '../images/icon-verbal.svg'
import iconvisual from '../images/icon-visual.svg'

// https://www.youtube.com/watch?v=KqFAs5d3Yl8&t=797s
const Home = () => {
  return (
    <React.Fragment>
      <main>
        <section className=" container m-auto  font-Hanken">
          <div className='flex flex-row h-screen  items-start sm:items-center   justify-center'>

          
          <div className=" flex flex-col xl:flex-row  rounded-3xl  w-ful sm:max-w-3xl sm:m-auto shadow-xl shadow-Neutral-Paleblue">
            <div className='  bg-Primary-CobaltBlue-600 w-full  sm:w-1/2 text-center  text-Neutral-Lightlavender rounded-b-3xl  sm:rounded-3xl '>
              <div className='p-8'>Your Result</div>
              <div className=' flex flex-col   space-y-4 '>
                <div className=' flex flex-col  items-center  justify-center  w-32 h-32  sm:w-52 sm:h-52 rounded-full bg-gradient-to-r  from-Gradients-Lightroyalblue to-Gradients-Violetblue  m-auto'>
                  <div className=' text-4xl  sm:text-8xl font-bold text-Neutral-White'>76</div>
                  <div>of 100</div>
                </div>
                
                <div className=' font-semibold text-2xl text-Neutral-White'>Great</div>
                <div className='mx-8  pb-8'>You scored higher than 65% of the people who have taken these tests.</div>
              </div>
              
              
            </div>
            <div className='sm:w-1/2 rounded-3xl    '>
              <h1 className='  p-8 font-semibold'>Summay</h1>

              <div className=' flex flex-row   mx-8 my-4 mt-0  bg-Primary-Lightred-50 p-4 rounded-lg'>
                <div className=' w-10'>
                  <img src={iconreaction}></img>
                </div>
                <div className=' flex-1'>
                Reaction
                </div>
                <div className=' w-1/5'>
                  50/100
                </div>
              </div>
              <div className=' flex flex-row mx-8 my-4  bg-Primary-OrangeyYellow-50 p-4 rounded-lg'>
              <div className=' w-10'>
              <img src={iconmemory}></img>
                </div>
                <div className=' flex-1'>
                Reaction
                </div>
                <div className=' w-1/5'>
                  50/100
                </div>
              </div>
              <div className=' flex flex-row mx-8 my-4  bg-Primary-GreenTeal-50 p-4 rounded-lg'>
              <div className=' w-10'>
              <img src={iconverbal}></img>
                </div>
                <div className=' flex-1'>
                Reaction
                </div>
                <div className=' w-1/5'>
                  50/100
                </div>
              </div>
              <div className=' flex flex-row mx-8 my-4   bg-Primary-CobaltBlue-50 p-4 rounded-lg'>
              <div className=' w-10'>
              <img src={iconvisual}></img>
                </div>
                <div className=' flex-1'>
                Reaction
                </div>
                <div className=' w-1/5'>
                  50/100
                </div>
              </div>
              <div className='flex  flex-row p-8'>
              <button className=' w-full  m-auto bg-Neutral-Darkgrayblue  text-Neutral-White  rounded-2xl  px-8  py-3 cursor-pointer leading-none hover:bg-Primary-CobaltBlue-600'> Continue</button>
              </div>
              
            </div>

          </div>
          </div>
        </section>
      
      </main>
    </React.Fragment>
  );
};

export default Home
