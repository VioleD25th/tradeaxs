import React from "react";
import Cookies from "cookies";
import AuthLayout from "../../components/Layouts/AuthLayout";
import Transactions from "../../components/Dashboard/Transactions";
import Link from "next/link";
import { getAllAssets } from "../../services/walletServices";
import { useState } from "react";
import WebSocketAsPromised from "websocket-as-promised"

const Wallet = (props) => {
  const me = "";
  return (
    <AuthLayout>
      <section className="w-full max-w-full text-white md:pt-4">
        <Transactions />
        <div className="space-y-[1rem] max-w-[35.8rem] mb-24">
          {["btc", "eth", "ltc", "doge", "bnb", "busdt", "usdt"].map(
            (item, i) => {
              return <WalletCard />;
            }
          )}
        </div>
      </section>
    </AuthLayout>
  );
};

const ws = new WebSocketAsPromised('wss://ws.coincap.io/prices?assets=bitcoin');
const initWebsocket = () => {
   
    ws.onmessage = (event) => {
        const stockObject = JSON.parse(event.data);
        const price = parseFloat(stockObject.bitcoin).toFixed(2);
        stockPriceElement.innerText = price;
        stockPriceElement.style.color =
          !lastPrice || lastPrice === price
            ? "black"
            : price > lastPrice
            ? "green"
            : "red";
        console.log(stockObject);
      };
    };

const WalletCard = () => {
  return (
      <a className="flex items-end justify-between bg-[rgba(12,77,174,0.37)] rounded-[0.625rem] py-[0.375rem] pl-[1.0625rem] pr-[0.75rem] transition-transform duration-200 hover:scale-105 focus:scale-105">
          <p id="bitcoin-price">---</p>
      </a>
     
  );
};

export default Wallet;

export async function getServerSideProps(context) {
  // getting Cookies
  const cookies = new Cookies(context.req, context.res);
  const Router = context.params;
  const coinType = Router?.crypto || "";
  const tokenId = cookies.get("accessToken");
  const values = {
    userId: cookies.get("userId") || null,
    coin_type: coinType.toUpperCase(),
  };
  // request for userWallet

  const { data, err } = await getAllAssets(tokenId);
  return {
    props: {
      assets: data?.data || {},
    }, // will be passed to the page component as props
  };
}
