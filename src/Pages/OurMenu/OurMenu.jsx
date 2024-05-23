import { Helmet } from "react-helmet-async";
import SubBanner from "../../Components/SubBanner/SubBanner";
import banner from '../../../public/assets/menu/banner3.jpg'


const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Menu
                </title>
            </Helmet>
            <SubBanner heading={'Our Menu'} banner={banner}  />
        </div>
    );
};

export default OurMenu;