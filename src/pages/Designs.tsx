
import '../index.css'
import ProjectHolder from '../components/ProjectHolder'
import Bethel from '../assets/BethelCOC.png'
import Flower from '../assets/corina-ardeleanu-sWlxCweDzzs-unsplash.jpg'
import BarMockup from "../assets/chocolatePics/Mockup-Chocolate-Bars.png"


function Designs() {

  return (
    <div className='max-w-[100vw]'>
      <div className='max-w-370 mx-auto py-5'>
        <div className='w-[80%] mx-auto gap-5 flex flex-col'>
          <h1 className='text-[30px] text-center'>Designs</h1>
          <div className='flex flex-row justify-evenly'>
            <ProjectHolder link="https://bethelchurchofchrist.net/" title="Bethel Church of Christ" imge={Bethel} list="Wordpress" />
            <ProjectHolder link="https://magic-carousel.netlify.app/" title="Magic Carousel" imge={Flower} list="HTML, CSS, and Javascript" />
            <ProjectHolder link="/Project" title="Cacao Del Sol Project" imge={BarMockup} list="Adobe Illustrator" />
          </div>

        </div>


      </div>
    </div>
  )
}

export default Designs
