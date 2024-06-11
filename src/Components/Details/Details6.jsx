import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import XiomiData from '../AllData/Xiomi/XiomiData';

const Details6 = () => {
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
      {card && <XiomiData card={card}></XiomiData>}

    </div>
        </div>
    );
};

export default Details6;