import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { TvContext } from "../../contexts/tvContext";

const RemoveFromTvFavoritesIcon = ({ show }) => {
  const context = useContext(TvContext);

  const handleRemoveFromTvFavorites = (s) => {
    s.preventDefault();
    context.removeFromTvFavorites(show);
  };
  return (
    <IconButton
      aria-label="remove from tv show favorites"
      onClick={handleRemoveFromTvFavorites}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromTvFavoritesIcon;