import React from "react";
import item1 from "../assets/imagetest.jpg";
import ItemCard from "./ItemCard";

const ItemCards = () => {
  const itemsArr = [
    { title: "Lviv", image: item1, price: "500", date: "Jul 20 - Jul 27" },
    { title: "Kyiv", image: item1, price: "700", date: "Jul 20 - Jul 27" },
    { title: "Odesa", image: item1, price: "525", date: "Jul 20 - Jul 27" },
    { title: "Dnipro", image: item1, price: "375", date: "Jul 20 - Jul 27" },
    { title: "Kharkiv", image: item1, price: "420", date: "Jul 20 - Jul 27" },
    { title: "Kharkiv", image: item1, price: "420", date: "Jul 20 - Jul 27" },
    { title: "Kharkiv", image: item1, price: "420", date: "Jul 20 - Jul 27" },
    { title: "Kharkiv", image: item1, price: "420", date: "Jul 20 - Jul 27" },
    { title: "Kharkiv", image: item1, price: "420", date: "Jul 20 - Jul 27" },
    { title: "Kharkiv", image: item1, price: "420", date: "Jul 20 - Jul 27" },
  ];
  return (
    <div className="py-3 sm:py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {itemsArr.map((item) => (
          <ItemCard
            title={item.title}
            image={item.image}
            price={item.price}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemCards;
