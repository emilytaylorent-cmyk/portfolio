
import ProjectHolder from '../components/ProjectHolder'
import Bethel from '../assets/BethelCOC.png'
import Flower from '../assets/corina-ardeleanu-sWlxCweDzzs-unsplash.jpg'
import BarMockup from "../assets/chocolatePics/Mockup-Chocolate-Bars.png"
import Feather from "../assets/Feather Icon.png"


import '../index.css'
import SectionCompo from '../components/SectionCompo'


function Home() {

  return (
    <div className='max-w-[100vw]'>
      <div className='max-w-370 mx-auto py-5'>
        <div className='w-[80%] mx-auto gap-5 flex flex-col'>
          <div className='flex flex-row justify-evenly'>
            <ProjectHolder link="https://bethelchurchofchrist.net/" title="Bethel Church of Christ" imge={Bethel} list="Wordpress" />
            <ProjectHolder link="https://magic-carousel.netlify.app/" title="Magic Carousel" imge={Flower} list="HTML, CSS, and Javascript" />
            <ProjectHolder link="/Project" title="Cacao Del Sol Project" imge={BarMockup} list="Adobe Illustrator" />
          </div>
          <div className='flex flex-row justify-evenly'>
            <ProjectHolder link="https://www.figma.com/design/xtEUCocdlHYo1dZ03ldvzv/Christian-Writer?node-id=0-1&t=YugQ8wOdRxZec3Wi-1" title="Christian Writer App" imge={Feather} list="Figma" />
            <ProjectHolder link="https://magic-carousel.netlify.app/" title="Magic Carousel" imge={Flower} list="HTML, CSS, and Javascript" />
            <ProjectHolder link="/Project" title="Cacao Del Sol Project" imge={BarMockup} list="Adobe Illustrator" />
          </div>



          <SectionCompo title="Design Info">
            <p className="text-[18px]">These logos were designed with Adobe Illustator.</p>
          </SectionCompo>

          <p>I have also created mobile apps in React Native and have coded a small guided fullstack project using Express API and Prisma. I also have collaborated in a school project designing a multi-page website with Figma.</p>



        </div>
      </div>
    </div>
  )
}

export default Home
