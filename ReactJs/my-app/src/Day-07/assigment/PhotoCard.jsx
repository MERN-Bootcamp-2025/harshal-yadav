import React from 'react';

export default function PhotoCard({ photo, onRemove }) {
  return (
    <div className="photo-card">
         <button className="remove-btn" onClick={() => onRemove(photo.id)}>×</button>
      <img src={photo.thumbnailUrl} alt={photo.title} />
      <p>{photo.title}</p>
    </div>
  );
}
