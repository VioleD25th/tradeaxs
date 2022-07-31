import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import LineChart from "../../components/Dashboard/Chart";
import History from "../../components/Dashboard/History";
import Trends from "../../components/Dashboard/Trends";
import Wallets from "../../components/Dashboard/Wallets";
import AuthLayout from "../../components/Layouts/AuthLayout";
//import TradeViewChart from "react-crypto-chart";
import dynamic from "next/dynamic";
import axios from "axios";

// const CryptoChart = dynamic(() => import("react-crypto-chart"), {
//   ssr: false,
// });

const Profile = () => {
  useEffect(() => {
    const loginmodal = localStorage.getItem("login-modal");
    if (loginmodal) {
      toast.success("Successfully Logged In");
      localStorage.removeItem("login-modal");
    } else {
    }

  }, []);
  function DataFetching() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
      axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false").then(res => {setCoins(res.data)
      console.log(res.data)}).catch(err => console.log(err))
  }, []);

  return (
    <ul>
      {data.map(data => (<li key="x-api-key">{data.body}</li>))}
      </ul>
  )

};
  return (
    <AuthLayout>
      <ToastContainer autoClose={1000} />
      <section className="w-full text-white md:pt-4">
        <Wallets />

        <div className="w-full max-w-full my-10 h-20 lg:h-96">
         {/* <DataFetching />  */}

          <script defer src="https://api.livecoinwatch.com/coins/list"></script> <div className="livecoinwatch-widget-5" lcw-base="USD" lcw-color-tx="#999999" lcw-marquee-1="coins" lcw-marquee-2="movers" lcw-marquee-items="10" ></div>
          {/* <LineChart /> */}
          {/* <CryptoChart
            pair="BTCBUSD"
            chartLayout={{
              layout: {
                backgroundColor: "#000000",
                textColor: "#ffffff",
              },
              grid: {
                vertLines: {
                  color: "transparent",
                  // style: LineStyle.SparseDotted,
                },
                horzLines: {
                  color: "transparent",
                  // style: LineStyle.SparseDotted,
                },
              },
              // crosshair: {
              //   mode: CrosshairMode.Normal,
              // },
              priceScale: {
                borderColor: "#485c7b",
              },
              timeScale: {
                borderColor: "#485c7b",
                timeVisible: true,
                secondsVisible: false,
              },
            }}
            containerStyle={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          /> */}
        </div>
        <div className="flex flex-col mt-5 mb-10 space-y-10 lg:flex-row lg:space-y-0 lg:space-x-10">
          <Trends />
          <History />
        </div>
      </section>
    </AuthLayout>
  );
};

export default Profile;
