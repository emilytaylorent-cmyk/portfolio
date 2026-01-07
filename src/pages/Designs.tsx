
import '../index.css'
import ProjectHolder from '../components/ProjectHolder'
import Words from "../assets/Portfolio Website.png"
import BBQSandwich from "../assets/bbq-sandwich-1.jpg"
import BarMockup from "../assets/chocolatePics/Mockup-Chocolate-Bars.png"


function Designs() {

  return (
    <div className='max-w-[100vw]'>
      <div className='max-w-370 mx-auto py-5'>
        <div className='w-[80%] mx-auto gap-5 flex flex-col'>
          <h1 className='text-[30px] text-center'>Designs</h1>
          <div className='flex flex-row justify-evenly'>
            <ProjectHolder link="/Project" title="Cacao Del Sol Project" imge={BarMockup} list="Adobe Illustrator" />
            <ProjectHolder link="https://www.figma.com/design/NAxrwEL3HYhPI8tZXH50tZ/Portfolio-Website-Design?node-id=0-1&t=7tXiPB5qFAIEQran-1" title="Portfolio Website Design" imge={Words} list="Figma" />
            <ProjectHolder link="https://www.figma.com/design/AHSdeKaOWrpyvxmxQfMyaV/BBQ-Festival-Figma-File--Copy-?node-id=0-1&t=fN65eG5YiRwaTYVQ-1" title="BBQ Figma Group Project" imge={BBQSandwich} list="Figma" />

          </div>
        </div>


      </div>
    </div>
  )
}

export default Designs
