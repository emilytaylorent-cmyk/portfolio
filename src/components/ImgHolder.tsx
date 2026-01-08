
import '../index.css'

const ImgHolder = ({children}) => {
    return (
        <div className='flex md:flex-row justify-between flex-col md:gap-0 gap-5'>
          {children}
        </div>
    )
}

export default ImgHolder