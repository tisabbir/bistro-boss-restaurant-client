import { useEffect, useState } from "react";
import SectionTitles from "../../../Components/SectionTitles/SectionTitles";
import MenuItem from "../../../Components/MenuItem/MenuItem";



const Menu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(()=>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            const popularData = data.filter(item => item.category === 'salad')
            console.log(popularData);
            setMenu(popularData);
        })

    },[])
    return (
        <section className="mt-12">
            <SectionTitles headings={'From our Menu'} subheadings={'check it out'} />

            <div className="grid md:grid-cols-2 gap-4 mt-12">
                {
                    menu.map(item => <MenuItem key={item._id} item={item} /> )
                }
            </div>
        </section>
    );
};

export default Menu;