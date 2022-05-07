import React, { useState } from "react";
import Timer from "../../../Components/Timer/Timer";
import nftsm from "../../../images/header_bg -mobile.png";
import nft from "../../../images/header_bg.png";
import "./Hero.css";

export async function getMetaMask() {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
  });
  const account = accounts[0];
  return account;
}

const Hero = () => {
  const [accountAddress, setAccountAddress] = useState("");
  const conectmetaMask = () => {
    if (typeof window !== "undefined") {
      getMetaMask().then((res) => {
        setAccountAddress(res);
      });
    }
  };
  const firstTwo = accountAddress?.slice(0, 2);
  const lastFour = accountAddress?.slice(accountAddress.length - 4);
  const accountDottedAddress = firstTwo + "..." + lastFour;

  return (
    <div
      className="flex flex-col mt-24 md:mt-36 items-center"
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <span className="text-5xl leading-normal text-white max-w-lg md:text-6xl font-bold text-center md:leading-normal">
        Welcome to <span>iLoopSwap.</span>
      </span>
      <span className="font-medium opacity-70 max-w-xs mx-4 md:max-w-sm mt-4 text-xl text-center text-white">
        Home of the $ILX Native Tokens and a lifetime of Passive Income &
        Rewards
      </span>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 items-center justify-center w-full mt-5">
        <button
          type="button"
          className="text-white bg-blue-600 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-green-300 rounded-full text-xl font-bold ml-8 mr-8 w-full md:w-48 md:px-10 py-4 text-center mb-2"
        >
          <a
            target="_blank"
            rel="noreferrer"
            href="https://iloop.gitbook.io/infinite-loop/"
          >
            WhitePaper
          </a>
        </button>
        <button
          type="button"
          className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 rounded-full text-xl font-bold ml-8 mr-8 w-full md:w-48 md:px-10 py-4 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          onClick={conectmetaMask}
        >
          {!!accountAddress ? accountDottedAddress : "Connect"}
        </button>
      </div>
      <Timer />
      <div className="nft_img">
        <img className="hidden md:block" src={nft} alt="" />
        <img className="md:hidden" src={nftsm} alt="" />
      </div>
    </div>
  );
};

export default Hero;
