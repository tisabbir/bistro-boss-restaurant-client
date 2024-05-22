import SubBanner from "../../../Components/SubBanner/SubBanner";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import Menu from "../Menu/Menu";


const Home = () => {
    return (
        <div>
            <Banner />
            <Category />
            <SubBanner heading={'Bistro Boss'} />
            <Menu />
            <CallUs />
        </div>
    );
};

export default Home;