import React from 'react';
import PhotoCard from './PhotoCard';

export default function PhotoGrid({ photos, onRemove }) {
    console.log("photo",photos)
  return (
    <div className="photo-grid">
      {photos.map(photo => (
        <PhotoCard key={photo.id} photo={photo}  onRemove={onRemove}/>
      ))}
    </div>
  );
}
