import React from "react";
import rocket from "../../images/road-map.svg";
import Image from "../../images/tokeno.svg";
import RoadMap from "../RoadMap/RoadMap";
import "./Tokenomics.css";

const Tokenomics = () => {
  return (
    <div className="bg-[#15051c] text-white py-20 road_map" id="tokenomics">
      <div className="my-container">
        <div className="grid grid-cols-12 gap-4 ">
          <div
            className="col-span-12 lg:col-span-6 content-center items-center flex order-last lg:order-first"
            data-aos="zoom-in"
            data-aos-duration="2000"
          >
            <img src={Image} alt="" />
          </div>
          <div className="col-span-12 lg:col-span-6 content-center items-center flex">
            <div
              className="space-y-4 w-full lg:w-3/4"
              data-aos="zoom-in"
              data-aos-duration="2000"
            >
              <h1 className="text-[30px] md:text-[54px] text-center lg:text-left font-bold">
                Tokenomics
              </h1>
              <p className="text-[#a7a1aa] text-[16px] md:text-[20px] text-center lg:text-left font-bold">
                $ILX is a deflationary token.
              </p>
              <p className="text-[#a7a1aa] text-[16px] md:text-[20px] text-center lg:text-left font-bold">
                Token Name: $ILX <br />
                Mainnet: Plygon & Binance Smart Chain <br />
                Total Supply: 80,000,000,000 <br />
                Max 12 Month Mint: 10% of Total Supply <br />
                Mint Cycle Completed in 10 Years from First Mint <br />
                All Unsold Tokens Will Be Destroyed Upon Completion.
              </p>
              <p className="text-[#a7a1aa] text-[16px] md:text-[20px] text-center lg:text-left font-bold">
                60% of the total supply will be locked into our native DEX
                portal, iLoopSwap.
              </p>
              <p className="text-[#a7a1aa] text-[16px] md:text-[20px] text-center lg:text-left font-bold">
                8% dedicated to the community.
              </p>
              <p className="text-[#a7a1aa] text-[16px] md:text-[20px] text-center lg:text-left font-bold">
                5% is allocated to charity
              </p>
              <p className="text-[#a7a1aa] text-[16px] md:text-[20px] text-center lg:text-left font-bold">
                5% goes to the Public Presale IDO.
              </p>
              <p className="text-[#a7a1aa] text-[16px] md:text-[20px] text-center lg:text-left font-bold">
                5% is locked in PancakeSwap.
              </p>
              <p className="text-[#a7a1aa] text-[16px] md:text-[20px] text-center lg:text-left font-bold">
                5% is locked in UniSWAP DEX.
              </p>
              <p className="text-[#a7a1aa] text-[16px] md:text-[20px] text-center lg:text-left font-bold">
                5% goes to Private Presale IDO
              </p>
              <p className="text-[#a7a1aa] text-[16px] md:text-[20px] text-center lg:text-left font-bold">
                5% dedicated to Burn/Buybacks.
              </p>
              <p className="text-[#a7a1aa] text-[16px] md:text-[20px] text-center lg:text-left font-bold">
                2% goes to the team{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <RoadMap />
      <img className="road_map_img" src={rocket} alt="" />
    </div>
  );
};

export default Tokenomics;
