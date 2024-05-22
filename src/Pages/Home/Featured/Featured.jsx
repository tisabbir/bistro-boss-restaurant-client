import SectionTitles from "../../../Components/SectionTitles/SectionTitles";
import featuredImg from '../../../../public/assets/home/featured.jpg'

const Featured = () => {
    return (
        <div className="">
            <SectionTitles headings={'From Our Menu'} subheadings={'Check it out'} />
            <div className="flex mt-12 mb-12 gap-6 items-center justify-center">
            <img className="w-[500px] h-[400px]" src={featuredImg} alt="" />
            <div className="space-y-4">
                <h1>March 30, 2024</h1>
                <h2>Where can I get some? </h2>
                <p className="max-w-[550px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse pariatur soluta blanditiis perferendis quaerat repellendus dolorum odio. Perspiciatis praesentium veniam ipsum quibusdam optio facilis! Mollitia qui reiciendis amet tempora repudiandae.</p>
                <button className="btn btn-outline border-0 border-b-2">Read More</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;