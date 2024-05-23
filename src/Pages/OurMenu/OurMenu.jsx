import { Helmet } from "react-helmet-async";
import SubBanner from "../../Components/SubBanner/SubBanner";
import banner from '../../../public/assets/menu/banner3.jpg'
import SectionTitles from "../../Components/SectionTitles/SectionTitles";
import Menu from "../Home/Menu/Menu";


const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>
                    Bistro Boss | Menu
                </title>
            </Helmet>
            <SubBanner heading={'Our Menu'} banner={banner}  />
            <SectionTitles headings={'Todays Offer'} subheadings={'Do not miss'} />
            <Menu categoryName={'offered'} />
            <SubBanner heading={'desserts'} />
            <Menu categoryName={'dessert'} />
            <SubBanner heading={'Pizza'} />
            <Menu categoryName={'pizza'} />
            <SubBanner heading={'salads'} />
            <Menu categoryName={'salad'} />
            <SubBanner heading={'soups'} />
            <Menu categoryName={'soup'} />

        </div>
    );
};

export default OurMenu;