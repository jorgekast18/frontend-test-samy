import React, { useState } from 'react';
import { useFetchAndLoad, useInfiniteScroll } from '../hooks';
import { getImages } from '../services';
import { Image } from '@models';
import ImageCard from './ImageCard';

const ImageList: React.FC = () => {
  const { callEndpoint, isLoading, setIsLoading } = useFetchAndLoad();
  const [images, setImages] = useState<Image[]>([]);
  

  const loadMore = async () => {
    if (isLoading) return;
    
    console.log('loadMore function called');
    try {
      const response = await callEndpoint(getImages());
      setImages(prev => [...prev, ...response]);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const { target } = useInfiniteScroll(loadMore);

  const handleLike = (id: string) => {
    setImages(prev =>
      prev.map(img => img.id === id ? { ...img, liked: !img.liked } : img)
    );
  };

  return (
    <div className="image-list">
      {images.map(image => (
        <ImageCard key={image.id} image={image} onLike={handleLike} />
      ))}
      <div ref={target} style={{ height: '20px' }}></div>
    </div>
  );
};

export default ImageList;