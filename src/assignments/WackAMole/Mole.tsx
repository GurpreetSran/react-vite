const Mole = ({
  isActive,
  onMoleClick,
}: {
  isActive: boolean;
  onMoleClick: () => void;
}) => {
  return (
    <div>
      <div
        onClick={onMoleClick}
        style={{ display: !isActive ? "none" : "block" }}
        className="mole"
      ></div>
    </div>
  );
};

export default Mole;
