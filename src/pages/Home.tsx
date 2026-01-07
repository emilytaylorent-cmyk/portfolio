
import ProjectHolder from '../components/ProjectHolder'
import Bethel from '../assets/BethelCOC.png'
import Flower from '../assets/corina-ardeleanu-sWlxCweDzzs-unsplash.jpg'
import BarMockup from "../assets/chocolatePics/Mockup-Chocolate-Bars.png"

import Pig from "../assets/pig.svg"
import Words from "../assets/Portfolio Website.png"
import BBQSandwich from "../assets/bbq-sandwich-1.jpg"
import '../index.css'

import MobileDesign from "../assets/Frame 2.png"

function Home() {

  return (
    <div className='max-w-[100vw]'>
      <div className='max-w-370 mx-auto py-5'>

        <div className='w-[80%] mx-auto gap-5 flex flex-col'>
          <div className='flex flex-row justify-between'>
            <ProjectHolder link="https://bethelchurchofchrist.net/" title="Bethel Church of Christ" imge={Bethel} list="Wordpress" />
            <ProjectHolder link="https://magic-carousel.netlify.app/" title="Magic Carousel" imge={Flower} list="HTML, CSS, and Javascript" />
            <ProjectHolder link="/Project" title="Cacao Del Sol Project" imge={BarMockup} list="Adobe Illustrator" />
          </div>

          <div className='flex flex-row justify-between'>
            <ProjectHolder link="https://www.figma.com/design/NAxrwEL3HYhPI8tZXH50tZ/Portfolio-Website-Design?node-id=0-1&t=7tXiPB5qFAIEQran-1" title="Portfolio Website Design" imge={Words} list="Figma" />
            <ProjectHolder link="https://purple-bbq-v2.netlify.app/" title="BBQ Festival Group Project" imge={Pig} list="HTML, CSS, Javascript" />
            <ProjectHolder link="https://www.figma.com/design/AHSdeKaOWrpyvxmxQfMyaV/BBQ-Festival-Figma-File--Copy-?node-id=0-1&t=fN65eG5YiRwaTYVQ-1" title="BBQ Figma Group Project" imge={BBQSandwich} list="Figma" />
          </div>

          <div className='flex flex-row justify-between items-center mt-10'>
            <div className='gap-3 flex flex-col w-[45%]'>
              <h2 className="text-[24px]">Other Skills</h2>
              <p className="text-[18px]">I have created mobile apps in React Native and have coded a small guided Full-stack project using Express API and Prisma.</p>
            </div>
            <img src={MobileDesign} className="h-[60vh]" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home
