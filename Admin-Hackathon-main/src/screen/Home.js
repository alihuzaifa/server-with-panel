import React from "react";
import AllUser from "../Components/Home/AllUserData";
import Navbar from "../Components/Home/Navbar";
import OrderCard from "../Components/Home/OrderCard";
import OrderTable from "../Components/Home/OrderTable";

const Home = () => {
  return (
    <>
      <Navbar />
      <OrderCard />
      <AllUser />
      <OrderTable />
    </>
  );
};

export default Home;
