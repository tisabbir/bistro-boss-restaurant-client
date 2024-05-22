import banner1 from '../../../public/assets/home/chef-service.jpg'

const SubBanner = ({heading}) => {
    return (
        <div className='w-full px-4 relative'>
            <img className='w-full' src={banner1} alt="" />
            <div className=' text-[#151515] text-center  px-12 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full'>
                <div className='bg-white py-20'>
                <h1 className='text-3xl'>{heading}</h1>
                <p className='max-w-[700px] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default SubBanner;