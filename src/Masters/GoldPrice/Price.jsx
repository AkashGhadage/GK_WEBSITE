import { useEffect, useState } from "react";

function GoldSilverPrice() {
  const [gold, setGold] = useState(null);
  const [silver, setSilver] = useState(null);

  useEffect(() => {
    fetch("https://data-asg.goldprice.org/dbXRates/INR")
      .then(res => res.json())
      .then(data => {
        const item = data.items[0];

        const goldPer10g = (item.xauPrice / 31.1035) * 10;
        const silverPerKg = (item.xagPrice / 31.1035) * 1000;

        setGold(goldPer10g.toFixed(2));
        setSilver(silverPerKg.toFixed(2));
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Today's Metal Prices</h2>
      <p>Gold (10g): ₹{gold}</p>
      <p>Silver (1kg): ₹{silver}</p>
    </div>
  );
}

export default GoldSilverPrice;
