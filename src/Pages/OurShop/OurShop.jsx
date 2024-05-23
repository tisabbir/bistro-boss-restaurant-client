import SubBanner from "../../Components/SubBanner/SubBanner";
import banner from '../../../public/assets/shop/banner2.jpg'
import TabForm from "./Tab/TabForm";


const OurShop = () => {
    return (
        <div>
           <SubBanner banner={banner} heading={'Our Shop'} /> 
           <TabForm />  
        </div>
    );
};

export default OurShop;