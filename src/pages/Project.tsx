
import '../index.css'
import Brand1 from "../assets/chocolatePics/Brand-Guideline Book-01.jpg"
import Brand2 from "../assets/chocolatePics/Brand-Guideline Book-02.jpg"
import Brand3 from "../assets/chocolatePics/Brand-Guideline Book-03.jpg"
import Brand4 from "../assets/chocolatePics/Brand-Guideline Book-04.jpg"
import Brand5 from "../assets/chocolatePics/Brand-Guideline Book-05.jpg"
import Brand6 from "../assets/chocolatePics/Brand-Guideline Book-06.jpg"
import Moodboard from "../assets/chocolatePics/CacaoDelSolMoodboard.png"
import LogoBlack from "../assets/chocolatePics/LogoBlack.png"
import LogoColored from "../assets/chocolatePics/Logo1.png"
import LogoWhite from "../assets/chocolatePics/WhiteLogo.png"
import BarMockup from "../assets/chocolatePics/Mockup-Chocolate-Bars.png"
import BarDieline from "../assets/chocolatePics/Packet-Dieline.png"
import BarDielineColor from "../assets/chocolatePics/Colored-Chocolate.png"
import HotMockup1 from "../assets/chocolatePics/Mockup-Packet-1.png"
import HotMockup2 from "../assets/chocolatePics/Mockup-Packet-2.png"
import HotDieline from "../assets/chocolatePics/Hot-Packet.png"
import HotDielineColor from "../assets/chocolatePics/Colored-Hot-Packet.png"
import Flower from "../assets/Flower.png"
import SectionCompo from '../components/SectionCompo'
import ImgHolder from '../components/ImgHolder'

function Project() {

  return (
    <div className='max-w-[100vw]'>
      <div className='max-w-370 py-5 flex flex-col gap-5 justify-center'>
        <h1 className='text-[30px] text-center'>Cacao Del Sol Project </h1>
        <div className='w-[80%] mx-auto'>
           <p className="text-[16px] md:text-center text-left mb-5 mx-auto max-w-[500px]">This project goes through my process of creating a story, logos, and  packaging for a fictional chocolate brand. My chosen name was  "Cacao del Sol," with roots in Mexican culture.</p>
        </div>
       
        <div className='w-[80%] mx-auto flex md:flex-row flex-col justify-between items-center gap-5 md:gap-0'>
          <div className='gap-3 flex flex-col md:w-[45%]'>
            <h2 className="text-[24px]">Brand Story</h2>
            <p className="text-[16px]">Cacao del Sol leans deeply into their Mexican culture with fun bright colors, while creating a family-friendly chocolate. They are a family business run on hope, love, and papel picado.</p>
          </div>
          <img src={Moodboard} className='h-90' />
        </div>


        <SectionCompo title="Logos">
          <ImgHolder>
            <img src={LogoBlack} className='md:w-[32%] block border-gray-400 border-solid border-2 rounded-md' alt="Black Logo of Cacao del Sol"/>
            <img src={LogoWhite} className='md:w-[32%] block border-gray-400 border-solid border-2 rounded-md' alt="White Logo of Cacao del Sol"/>
            <img src={LogoColored} className='md:w-[32%] block border-gray-400 border-solid border-2 rounded-md' alt="Colored Logo of Cacao del Sol" />
          </ImgHolder>
        </SectionCompo>

        <SectionCompo title="Chocolate Bars">
          <ImgHolder>
            <img src={BarMockup} className='md:w-[49%] block border-gray-400 border-solid border-2 rounded-md' alt="The Three Chocolate Bars of Cacao del Sol"/>
            <div className='hidden md:flex w-[49%] justify-center items-center border-gray-400 border-solid border-2 rounded-md '>
              <img src={Flower} alt="Placeholder"/>
            </div>
          </ImgHolder>
          <ImgHolder>
            <img src={BarDielineColor} className='md:w-[49%] block border-gray-400 border-solid border-2 rounded-md' alt="Chocolate Bar Package dieline with color"/>
            <img src={BarDieline} className='md:w-[49%] block border-gray-400 border-solid border-2 rounded-md' alt="Chocolate Bar Package dieline without color"/>
          </ImgHolder>
        </SectionCompo>

        <SectionCompo title="Hot Chocolate Packets">
          <ImgHolder>
            <img src={HotMockup1} className='md:w-[49%] block border-gray-400 border-solid border-2 rounded-md' alt="Hot Chocolate Packets for Cacao del Sol, almond, dark, and cinnamon"/>
            <img src={HotMockup2} className='md:w-[49%] block border-gray-400 border-solid border-2 rounded-md' alt="Hot Chocolate Packets for Cacao del Sol, almond, dark, and cinnamon"/>

          </ImgHolder>
          <ImgHolder>
            <img src={HotDielineColor} className='md:w-[49%] block border-gray-400 border-solid border-2 rounded-md' alt="Hot Chocolate Package dieline without color"/>
            <img src={HotDieline} className='md:w-[49%] block border-gray-400 border-solid border-2 rounded-md' alt="Hot Chocolate Package dieline without color"/>
          </ImgHolder>
        </SectionCompo>

        <SectionCompo title="Brand Guidelines">
          <ImgHolder>
            <img src={Brand1} className='md:h-100 border-gray-400 border-solid border-2' alt="Color Guidelines - Cacao dek Sol is a family brand proud of their MExican Heritage. The brand uses bright colors pulled form a line of papel picado. Bigger text is seperated Script MT Bold, Smaller (English) text is in the Consolas font."/>
            <img src={Brand2} className='md:h-100 border-gray-400 border-solid border-2' alt="Illustations - Illustations use one of the previous colors as a background. The three stars are essential to any illustation for heritage and cohesiveness."/>
            <img src={Brand3} className='md:h-100 border-gray-400 border-solid border-2' alt="Illustations - Illustrations consist of shapes. Minimal lines may be included for recognition. Include heart-shaped cutouts if possible, but is not essential. In conclusion, try to simplify as much as possible. Don't sacrifice recognizability for cohesive papel picado illustations. Never put it on a dull or intensely saturated color. You can't go wrong with a simple flavor!"/>
          </ImgHolder>
          <ImgHolder>
            <img src={Brand4} className='md:h-100 border-gray-400 border-solid border-2' alt="Logos - The Logo for Cacao del Sol is inspired by papel picado, so always use at the top of a product for it to hang. DOn't distory the logo in any way. The black logo will generally be used, unless the white logo is necessary for color-contrast or readability. The Cacao del Sol needs to be in the center of the logo, do not move it to the side or straighten it."/>
            <img src={Brand5} className='md:h-100 border-gray-400 border-solid border-2' alt="Logos - Ensure that none of the papel picado is cut off as well. The logo can be used without its background if there is not enough room. It can also be used where a logo would not be appropriate." />
            <img src={Brand6} className='md:h-100 border-gray-400 border-solid border-2' alt="Logos- Don't add width to the stroke of the sun. Don't put a curl in the sun. Make sure there is a c length between anything and logo. Ensure color contrast and pick colors that are cohesive (don't pick just any bright color). Don't put on  a busy background, since we're Mexican, not crazy. Respect Mexican traditions with our chocolate brand. Do not use on anything offensive."/>
          </ImgHolder>
        </SectionCompo>

      </div>
    </div>
  )
}

export default Project