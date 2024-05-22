import SubBanner from "../../../Components/SubBanner/SubBanner";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";


const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <SubBanner heading={'Bistro Boss'} />
            <CallUs />
        </div>
    );
};

export default Home;