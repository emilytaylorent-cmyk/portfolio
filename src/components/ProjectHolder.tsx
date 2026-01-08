
function ProjectHolder({ link, imge, title, list }) {
    return (
        <a href={link} className="border-none">
            <div className='hover:cursor-pointer hover:shadow-lg flex flex-col gap-2 p-1'>
                <img src={imge} className="lg:h-40 lg:w-[22vw] md:w-[30vw]" />
                <div>
                    <h2 className='text-[19px]' style={{ textDecoration: 'none' }}>{title}</h2>
                    <p className='text-[15px]' style={{ textDecoration: 'none' }}>Skills: {list}</p>
                </div>
            </div>
        </a>
    )
}

export default ProjectHolder