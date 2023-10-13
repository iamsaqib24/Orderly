import { CDN_URL } from "../utils/constants";
import { BsFillStarFill } from "react-icons/bs";

export default function RestaurantCard({
  cloudinaryImageId,
  name,
  avgRating,
  cuisines,
  costForTwo,
  sla,
}) {
  return (
    <div className="w-72 h-80 hover:border mx-3 hover:shadow-lg hover:border-zinc-300 m-auto my-6 px-4 py-4 cursor-pointer">
      <img alt="res-logo" src={CDN_URL + cloudinaryImageId} />
      <h3 className="text-[1.1rem] font-semibold mt-3">
        {name.length < 20 ? name : name.substring(0, 20) + "..."}
      </h3>
      <h4 className="font-thin w-52 overflow-y-hidden text-sm ">
        {cuisines.slice(0, 2).join(", ")}
        {cuisines.length - 3 > 0 ? ", +" + (cuisines.length - 3) : ""}
      </h4>
      <div className="flex flex-wrap">
        <h4
          className={
            avgRating > 0
              ? avgRating >= 4
                ? "bg-green-500 mt-[0.7rem] mr-3 w-12 h-[1.4rem] rounded-sm justify-center pr-1 text-white font-semibold flex text-sm"
                : "bg-amber-700 w-12 h-[1.4rem] mt-[0.7rem] mr-3 justify-center pr-1 rounded-sm text-white font-semibold flex text-sm"
              : "flex font-thin mt-[0.5rem] mr-4 text-zinc-700"
          }
        >
          <BsFillStarFill className=" mx-1 my-1" />{" "}
          {isNaN(avgRating) ? "--" : avgRating}
        </h4>
        <div className="font-semibold text-slate-800 text-xs">
          {costForTwo !== "" ? (
            <span className="text-2xl font-semibold">.</span>
          ) : (
            <></>
          )}{" "}
          &nbsp;&nbsp;
          {costForTwo} &nbsp;&nbsp;{" "}
          {sla.slaString !== "" ? (
            <span className="text-2xl font-semibold">.</span>
          ) : (
            <></>
          )}{" "}
          &nbsp;&nbsp;{sla.slaString}
        </div>
      </div>
    </div>
  );
}
