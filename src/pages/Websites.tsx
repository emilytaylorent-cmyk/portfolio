
import '../index.css'
import ProjectHolder from '../components/ProjectHolder'
import Bethel from '../assets/BethelCOC.png'
import Flower from '../assets/corina-ardeleanu-sWlxCweDzzs-unsplash.jpg'

function Websites() {

  return (
    <div className='max-w-[100vw]'>
      <div className='max-w-370 mx-auto py-5'>
        <div className='w-[80%] mx-auto gap-5 flex flex-col'>
          <div className='flex flex-row justify-evenly'>
            <ProjectHolder link="https://bethelchurchofchrist.net/" title="Bethel Church of Christ" imge={Bethel} list="Wordpress and CSS"/>
            <ProjectHolder link="https://magic-carousel.netlify.app/" title="Magic Carousel" imge={Flower} list="HTML, CSS, and Javascript"/>
            <ProjectHolder link="https://magic-carousel.netlify.app/" title="Magic Carousel" imge={Flower} list="HTML, CSS, and Javascript"/>
          </div>


        </div>


      </div>
    </div>
  )
}

export default Websites
