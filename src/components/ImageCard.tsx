import React from 'react';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Image } from '@models';

interface ImageCardProps {
  image: Image;
  onLike: (id: string) => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, onLike }) => {
  const handleLikeClick = () => {
    onLike(image.id);
  };

  return (
    <div className="image-card">
      <img src={image.main_attachment.small} alt={image.description} />
      <IconButton 
        onClick={handleLikeClick} 
        className="like-button"
        aria-label={image.liked ? 'Unlike' : 'Like'}
      >
        {image.liked ? (
          <Favorite color="error" />
        ) : (
          <FavoriteBorder color="action" />
        )}
      </IconButton>
    </div>
  );
};

export default ImageCard;