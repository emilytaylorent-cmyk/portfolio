
import '../index.css'
import ProjectHolder from '../components/ProjectHolder'
import Bethel from '../assets/BethelCOC.png'
import Flower from '../assets/corina-ardeleanu-sWlxCweDzzs-unsplash.jpg'
import Pig from "../assets/pig.svg"


function Websites() {

  return (
    <div className='max-w-[100vw]'>
      <div className='max-w-370 mx-auto py-5'>
        <div className='w-[80%] mx-auto gap-5 flex flex-col'>
          <h1 className='text-[30px] text-center'>Websites</h1>
          <div className='flex md:flex-row flex-col justify-evenly gap-10 md:gap-5'>
            <ProjectHolder link="https://bethelchurchofchrist.net/" title="Bethel Church of Christ" imge={Bethel} list="Wordpress" />
            <ProjectHolder link="https://magic-carousel.netlify.app/" title="Magic Carousel" imge={Flower} list="HTML, CSS, and Javascript" />
            <ProjectHolder link="https://purple-bbq-v2.netlify.app/" title="BBQ Festival Group Project" imge={Pig} list="HTML, CSS, Javascript" />
          </div>

        </div>


      </div>
    </div>
  )
}

export default Websites
