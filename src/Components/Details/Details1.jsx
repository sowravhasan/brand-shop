import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SamsungDetails from "../AllData/SamsungDetails";

const Details1 = () => {
  const [card, setCard] = useState({});
  const { _id } = useParams();
  const cards = useLoaderData();

  useEffect(() => {
    // Check if cards is an array and use find method to search for a card
    if (Array.isArray(cards)) {
      const allCards = cards.find((card) => card._id === _id);
      if (allCards) {
        setCard(allCards);
      }
    }
  }, [_id, cards]);

  return (
    <div className="px-20 py-10">
      {card && <SamsungDetails card={card}></SamsungDetails>}

    </div>
  );
};

export default Details1;
