
import '../index.css'
import ProjectHolder from '../components/ProjectHolder'
import Words from "../assets/Portfolio Website.png"
import BBQSandwich from "../assets/bbq-sandwich-1.jpg"
import BarMockup from "../assets/chocolatePics/Mockup-Chocolate-Bars.png"
import { Link } from 'react-router-dom'



function Designs() {

  return (
    <div className='max-w-[100vw]'>
      <div className='max-w-370 mx-auto py-5'>
        <div className='w-[80%] mx-auto gap-5 flex flex-col'>
          <h1 className='text-[30px] text-center'>Designs</h1>
          <div className='flex md:flex-row flex-col justify-evenly'>
            <Link to="/Project" className="border-none">
              <div className='hover:cursor-pointer hover:shadow-lg flex flex-col gap-2 p-1'>
                <img src={BarMockup} className="lg:h-40 lg:w-[22vw] md:w-[30vw]" />
                <div>
                  <h2 className='text-[19px]' style={{ textDecoration: 'none' }}>Cacao Del Sol Project</h2>
                  <p className='text-[15px]' style={{ textDecoration: 'none' }}>Skills: Adobe Illustrator</p>
                </div>
              </div>
            </Link>
            <ProjectHolder link="https://www.figma.com/design/NAxrwEL3HYhPI8tZXH50tZ/Portfolio-Website-Design?node-id=0-1&t=7tXiPB5qFAIEQran-1" title="Portfolio Website Design" imge={Words} list="Figma" />
            <ProjectHolder link="https://www.figma.com/design/AHSdeKaOWrpyvxmxQfMyaV/BBQ-Festival-Figma-File--Copy-?node-id=0-1&t=fN65eG5YiRwaTYVQ-1" title="BBQ Figma Group Project" imge={BBQSandwich} list="Figma" />
          </div>
        </div>


      </div>
    </div>
  )
}

export default Designs
