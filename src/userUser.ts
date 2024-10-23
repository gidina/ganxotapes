import { useEffect, useId } from "react";
import { IGanxoTapa } from "./IGanxoTapa";

const useUser = () => {
  // console.log("---useUser---");
  const userVisitedRestaurantIds = sessionStorage.getItem(
    "ganxotapes-tardor-23",
  );
  // console.log("---userVisitedRestaurantIds---", userVisitedRestaurantIds);

  useEffect(() => {
    if (userVisitedRestaurantIds) {
      return;
    }

    // const newUserVisitedRestaurantIds = useId();
    const newUserVisitedRestaurantIds: string[] = [];
    sessionStorage.setItem(
      "ganxotapes-tardor-23",
      JSON.stringify(newUserVisitedRestaurantIds),
    );
    // console.log(
    //   "---newUserVisitedRestaurantIds---",
    //   newUserVisitedRestaurantIds,
    // );

    // return newUserVisitedRestaurantIds;
  }, []);

  const getVisitedRestaurant = (id: IGanxoTapa["id"]) => {
    // const visitedRestaurant = userVisitedRestaurantIds
    //   ? JSON.parse(userVisitedRestaurantIds)
    //   : [];

    return userVisitedRestaurantIds?.includes(id) ? true : false;
  };
  // const getVisitedRestaurant = (id: IGanxoTapa["id"]) => {
  //   const visitedRestaurants = userVisitedRestaurantIds
  //     ? JSON.parse(userVisitedRestaurantIds)
  //     : [];

  //   visitedRestaurants.includes(id) ?
  //     visitedRestaurants.push(id) :
  //     visitedRestaurants.filter(
  //       (restaurantId) => restaurantId !== id,
  //     );

  //   sessionStorage.setItem(
  //     "ganxotapes-tardor-23",
  //     JSON.stringify(newUserVisitedRestaurantIds),
  //   );
  //   return visitedRestaurant.includes(id) ? true : false;
  // };

  const setVisitedRestaurant = (id: IGanxoTapa["id"]) => {
    const visitedRestaurant = getVisitedRestaurant(id);
    const newUserVisitedRestaurantIds: string[] = userVisitedRestaurantIds
      ? JSON.parse(userVisitedRestaurantIds)
      : [];

    console.log(
      "userVisitedRestaurantIds",
      userVisitedRestaurantIds,
      "visitedRestaurant",
      id,
      "newUserVisitedRestaurantIds",
      newUserVisitedRestaurantIds,
      "visitedRestaurant",
      visitedRestaurant,
    );

    // visitedRestaurant
    //   ? newUserVisitedRestaurantIds.filter(
    //       (restaurantId) => restaurantId !== id,
    //     )
    //   : newUserVisitedRestaurantIds.push(id);

    const newVR = visitedRestaurant
      ? newUserVisitedRestaurantIds.filter(
          (restaurantId) => restaurantId !== id,
        )
      : [...newUserVisitedRestaurantIds, id];
    console.log("AFTER: ", JSON.stringify(newVR));

    sessionStorage.setItem("ganxotapes-tardor-23", JSON.stringify(newVR));
  };

  return { getVisitedRestaurant, setVisitedRestaurant };
};

export default useUser;
