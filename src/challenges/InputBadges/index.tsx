import React, { useState } from "react";

interface Badge {
  label: string;
  onBadgeClick: () => void;
}

const Badge: React.FC<Badge> = ({ label, onBadgeClick }) => {
  return (
    <div>
      {label}
      <button onClick={onBadgeClick}>Close</button>
    </div>
  );
};

const Badges: React.FC = () => {
  const [badges, setBadges] = useState(["this", "is", "a", "test"]);
  const [currentInput, setCurrentInput] = useState("");

  const onBadgeRemove = (index: number) => {
    const filtered = badges.filter((_badge, i) => index !== i);
    setBadges([...filtered]);
  };

  const onAddClick = () => {
    if (currentInput) {
      setBadges([...badges, currentInput]);
      setCurrentInput("");
    }
  };

  return (
    <div>
      <input
        value={currentInput}
        onChange={(e) => setCurrentInput(e.target.value)}
      />
      <button onClick={() => onAddClick()}>Add</button>
      <div className="badges">
        {badges.map((badge, index) => (
          <Badge label={badge} onBadgeClick={() => onBadgeRemove(index)} />
        ))}
      </div>
    </div>
  );
};

export default Badges;
