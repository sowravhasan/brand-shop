import { useEffect, useState } from 'react';
import SonyData from '../AllData/Sony/Sonydata';
import { useLoaderData, useParams } from 'react-router-dom';

const Details3 = () => {
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
        <div>
            <div className="px-20 py-10">
      {card && <SonyData card={card}></SonyData>}

    </div>
        </div>
    );
};

export default Details3;