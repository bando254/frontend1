import React, { useState } from 'react';
import axios from 'axios';
import '../style/Book.css';

const Book = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    sessionType: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/book', formData);
      if (res.data.success) {
        setStatus('✅ Booking sent successfully!');
        setFormData({
          name: '',
          email: '',
          date: '',
          sessionType: '',
          message: ''
        });
      } else {
        setStatus('❌ Failed to send booking.');
      }
    } catch (err) {
      console.error(err);
      setStatus('❌ Server error. Try again.');
    }
  };

  return (
    <div className="book-container">
      <h1 className="book-title">Book a Session</h1>
      <p className="book-description">
        Let’s create something amazing. Choose your session type and let’s talk.
      </p>

      <form onSubmit={handleSubmit} className="book-form">
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name}
          onChange={handleChange}
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
        <input 
          type="date" 
          name="date" 
          value={formData.date}
          onChange={handleChange}
          required 
        />
        <select 
          name="sessionType" 
          value={formData.sessionType} 
          onChange={handleChange}
          required
        >
          <option value="">-- Select Session Type --</option>
          <option value="Wedding">Wedding</option>
          <option value="Birthday">Birthday</option>
          <option value="Portrait">Portrait</option>
          <option value="Couple">Couple</option>
          <option value="Event">Event</option>
          <option value="Product">Product Shoot</option>
        </select>
        <textarea 
          name="message" 
          placeholder="Any details or ideas?" 
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Send Booking</button>
      </form>

      {status && (
        <p className={`book-status ${status.includes('❌') ? 'error' : ''}`}>
          {status}
        </p>
      )}
    </div>
  );
};

export default Book;
