import { FaStar } from "react-icons/fa6";

interface handleFavouritesButtonProps {
  handleFavouritesButton: () => void;
  favouritesButtonColor: string;
}
const FavouritesButton: React.FC<handleFavouritesButtonProps> = ({
  handleFavouritesButton,
  favouritesButtonColor
}) => {
  return (
    <div className="hover:cursor-pointer" onClick={handleFavouritesButton}>
      <FaStar size={40} color={favouritesButtonColor} />
    </div>
  );
};

export default FavouritesButton;
