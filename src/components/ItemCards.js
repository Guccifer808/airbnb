import React from "react";
import item1 from "../assets/images/item1.jpg";
import item2 from "../assets/images/item2.jpg";
import item3 from "../assets/images/item3.jpg";
import item4 from "../assets/images/item4.jpg";
import item5 from "../assets/images/item5.jpg";
import item6 from "../assets/images/item6.jpg";
import item7 from "../assets/images/item6.jpg";
import ItemCard from "./ItemCard";

const ItemCards = () => {
  const itemsArr = [
    {
      title: "Lviv",
      image: item1,
      price: "500",
      date: "Jul 20 - Jul 27",
      rating: "5.0",
    },
    {
      title: "Kyiv",
      image: item2,
      price: "700",
      date: "Jul 20 - Jul 27",
      rating: "4.9",
    },
    {
      title: "Odesa",
      image: item3,
      price: "525",
      date: "Jul 20 - Jul 27",
      rating: "5.0",
    },
    {
      title: "Dnipro",
      image: item4,
      price: "375",
      date: "Jul 20 - Jul 27",
      rating: "4.7",
    },
    {
      title: "Kharkiv",
      image: item5,
      price: "420",
      date: "Jul 20 - Jul 27",
      rating: "4.8",
    },
    {
      title: "Ternopil",
      image: item6,
      price: "420",
      date: "Jul 20 - Jul 27",
      rating: "4.8",
    },
    {
      title: "Chernihiv",
      image: item7,
      price: "420",
      date: "Jul 20 - Jul 27",
      rating: "4.7",
    },
    {
      title: "Kharkiv",
      image: item2,
      price: "420",
      date: "Jul 20 - Jul 27",
      rating: "4.8",
    },
    {
      title: "Kharkiv",
      image: item4,
      price: "420",
      date: "Jul 20 - Jul 27",
      rating: "4.7",
    },
    {
      title: "Kharkiv",
      image: item3,
      price: "420",
      date: "Jul 20 - Jul 27",
      rating: "4.6",
    },
    {
      title: "Lviv",
      image: item1,
      price: "500",
      date: "Jul 20 - Jul 27",
      rating: "5.0",
    },
    {
      title: "Kyiv",
      image: item2,
      price: "700",
      date: "Jul 20 - Jul 27",
      rating: "4.9",
    },
    {
      title: "Odesa",
      image: item3,
      price: "525",
      date: "Jul 20 - Jul 27",
      rating: "5.0",
    },
    {
      title: "Dnipro",
      image: item4,
      price: "375",
      date: "Jul 20 - Jul 27",
      rating: "4.7",
    },
    {
      title: "Kharkiv",
      image: item5,
      price: "420",
      date: "Jul 20 - Jul 27",
      rating: "4.8",
    },
    {
      title: "Ternopil",
      image: item6,
      price: "420",
      date: "Jul 20 - Jul 27",
      rating: "4.8",
    },
    {
      title: "Chernihiv",
      image: item7,
      price: "420",
      date: "Jul 20 - Jul 27",
      rating: "4.7",
    },
    {
      title: "Kharkiv",
      image: item2,
      price: "420",
      date: "Jul 20 - Jul 27",
      rating: "4.8",
    },
    {
      title: "Kharkiv",
      image: item4,
      price: "420",
      date: "Jul 20 - Jul 27",
      rating: "4.7",
    },
    {
      title: "Kharkiv",
      image: item3,
      price: "420",
      date: "Jul 20 - Jul 27",
      rating: "4.6",
    },
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
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemCards;
