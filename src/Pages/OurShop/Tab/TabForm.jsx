import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../Hooks/useMenu";
import OrderItems from "../OrderItems/OrderItems";

const TabForm = () => {
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  const [tabIndex, setTabIndex] = useState(0);
  console.log(salad, pizza, soup, dessert, drinks);

  return (
    <div className="my-12 max-w-5xl mx-auto">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderItems items={salad} />
        </TabPanel>
        <TabPanel>
          <OrderItems items={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderItems items={soup} />
        </TabPanel>
        <TabPanel>
          <OrderItems items={dessert} />
        </TabPanel>
        <TabPanel>
          <OrderItems items={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabForm;
