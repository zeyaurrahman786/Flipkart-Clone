// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
// import './AddRestro.css'; // Import the CSS file
import axios from 'axios';
import {useParams } from 'react-router-dom'
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://gtdntrclpnwqfgwldpiy.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0ZG50cmNscG53cWZnd2xkcGl5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI3NzM4NTMsImV4cCI6MjAzODM0OTg1M30.bbawHpDOwvNhC5jaWOR8jhxLRTvIWqh6iWpNlDblEms';
const supabase = createClient(supabaseUrl, supabaseKey);

const AddProduct = () => {

  let { restroId } = useParams()

  const [restaurantData, setRestaurantData] = useState({
    name: '',
    description: '',
    image: '',
    price: ''


  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setRestaurantData({ ...restaurantData, image: file });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurantData({ ...restaurantData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Upload image to Supabase
      const { error } = await supabase.storage.from('Flipkart Clone').upload('products/' + restaurantData.image.name, restaurantData.image);
      if (error) {
        throw error;
      }
      // https://fzdfcdjjbsnwmdvxhfrh.supabase.co/storage/v1/object/public/Flipkart Clone/restaurant_images/india-flag.jpg
      // Get the URL of the uploaded image
      const imageUrl = `${supabaseUrl}/storage/v1/object/public/Flipkart Clone/product_images/${restaurantData.image.name}`;
      console.log(imageUrl, "blocking zzzzzzz");

      // Save restaurant data to MongoDB with image URL
      const response = await axios.post('http://localhost:4000/api/product', { ...restaurantData, image: imageUrl, restroId });
      if (response) {
        alert('Restaurant added successfully');
        // Reset form fields

      } else {
        alert('Failed to add restaurant');
      }
    } catch (error) {
      console.error('Error adding restaurant:', error);
      alert('Failed to add restaurant');
    }
  };

  return (
    <div>
      <h2>Add Products</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={restaurantData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input type="text" name="price" value={restaurantData.price} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <input type="text" name="description" value={restaurantData.description} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input type="file" onChange={handleImageChange} accept="image/*" required />
        </div>


        <button type="submit">Add Product</button>
        {/* <img   src='https://fzdfcdjjbsnwmdvxhfrh.supabase.co/storage/v1/object/public/Flipkart Clone/restaurant_images/india-flag.jpg'/> */}
        {/* <img  src='https://fzdfcdjjbsnwmdvxhfrh.supabase.co/storage/v1/object/public/Flipkart Clone/restaurant_images/taro-ohtani-TWJnM9MQlt8-unsplash.jpg'/> */}
      </form>
    </div>
  );
};

export default AddProduct;
// const { data, error } = await supabase.storage.from('Flipkart Clone').upload('restaurant_images/' + restaurantData.image.name, restaurantData.image);