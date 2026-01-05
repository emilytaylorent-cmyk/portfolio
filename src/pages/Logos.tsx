
import '../index.css'
import ASLBlack from "../assets/logoPics/ASL-Black-Logo.png"
import ASLWhite from "../assets/logoPics/ASL-WhiteBG-Logo.png"
import ASLColor from "../assets/logoPics/ASL-Color-Logo.png"


import Peculiar from "../assets/logoPics/Logo-For-Peculiar-People.png"
import SectionCompo from '../components/SectionCompo'
import ImgHolder from '../components/ImgHolder'

function Logos() {

    return (
        <div className='max-w-[100vw]'>
            <div className='max-w-370 py-5 flex flex-col gap-5 justify-center'>
                <h1 className='text-[30px] text-center'>Logos</h1>

                <SectionCompo title="Design Info">
                    <p className="text-[18px]">These logos were designed with Adobe Illustator.</p>
                </SectionCompo>


                <SectionCompo title="Freed-Hardeman University ASL Club">
                    <p className="text-[18px]">Professional Student-Led Club on Freed-Hardeman University's Campus. They learn ASL in meetings to help spread the Gospel.</p>
                    <ImgHolder>
                        <img src={ASLColor} className='w-[32%] block border-gray-400 border-solid border-2 rounded-md' />
                        <img src={ASLWhite} className='w-[32%] block border-gray-400 border-solid border-2 rounded-md' />
                        <img src={ASLBlack} className='w-[32%]  block border-gray-400 border-solid border-2 rounded-md' />
                    </ImgHolder>
                </SectionCompo>

                <SectionCompo title="Peculiar People">
                    <p className="text-[18px]">Potential Student-Led work on Freed-Hardeman University's Campus. They gather together to participate in volunteer work and fellowship together, chosen by God. 1 Peter 2:9 (KJV).</p>
                    <ImgHolder>
                        <img src={Peculiar} className='w-[32%] block border-gray-400 border-solid border-2 rounded-md' />
                    </ImgHolder>
                </SectionCompo>




            </div>
        </div>
    )
}

export default Logos