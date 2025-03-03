import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div
      data-testid="resCard"
      className="relative m-4 p-5 w-[280px] rounded-2xl bg-[#FDF7E3] hover:bg-gray-100  shadow-xl shadow-[#9BA38E] transition-all duration-300"
    >
      <img
        className="rounded-lg w-full h-48 object-cover rounded-t-2xl"
        alt="res-card"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold font -['Poppins'] py-2 text-xl truncate">{name}</h3>
      <p className="text-md text-gray-700 font-semibold whitespace-nowrap overflow-hidden text-ellipsis max-w-[260px]">
        {cuisines.join(", ")}
      </p>
      <h4 className="text-md font-semibold mt-2 flex items-center">
          <span className="bg-[#2F402F] text-white px-2  rounded-md flex items-center gap-1">
     {avgRating} ⭐
  </span>
</h4>

      <h4 className="text-md text-gray-800 font-semibold">{costForTwo}</h4>
      <h4 className="text-md text-gray-700 font-semibold">{deliveryTime} min</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute top-2 left-2 bg-black text-white px-2 py-1 rounded-md text-lg font-['Poppins'] font-semibold z-10">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
