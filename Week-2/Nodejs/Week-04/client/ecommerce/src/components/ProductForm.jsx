import React from 'react';
import { useState } from 'react';
import './forms.css';
import './product.css';
import Navigation from '../includes/Navigation';

const ProductForm = ({ editing = false, product = {} }) => {
  const [title, setTitle] = useState(editing ? product.title : '');
  const [imageUrl, setImageUrl] = useState(editing ? product.imageUrl : '');
  const [price, setPrice] = useState(editing ? product.price : '');
  const [description, setDescription] = useState(editing ? product.description : '');

  const formAction = editing ? '/admin/edit-product' : '/admin/add-product';

  return (
    <>
      <head>
        <link rel="stylesheet" href="/css/forms.css" />
        <link rel="stylesheet" href="/css/product.css" />
      </head>

      <body>
        <Navigation />

        <main>
          <form className="product-form" action={formAction} method="POST">
            <div className="form-control">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label htmlFor="imageUrl">Image URL</label>
              <input
                type="text"
                name="imageUrl"
                id="imageUrl"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label htmlFor="price">Price</label>
              <input
                type="number"
                name="price"
                id="price"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>

            <div className="form-control">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                rows="5"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {editing && (
              <input type="hidden" name="productId" value={product.id} />
            )}

            <button className="btn" type="submit">
              {editing ? 'Update Product' : 'Add Product'}
            </button>
          </form>
        </main>
      </body>
    </>
  );
};

export default ProductForm;
