// src/components/BookCard.jsx
import React from 'react';
import './BookCard.css';

const BookCard = ({ book, onOpen }) => {
  return (
    // เมื่อคลิกที่การ์ด ให้เรียกฟังก์ชัน onOpen ที่รับมาจาก App.jsx
    <div className="book-card" onClick={onOpen}>
      <div className="cover-wrapper">
        {/* ดึงรูปจากโฟลเดอร์ public/BookThumb */}
        <img 
          src={`/BookThumb/${book.coverImage}`} 
          alt={book.title} 
          className="book-cover" 
        />
        <div className="hover-overlay">
          <span>คลิกเพื่อดูรายละเอียด</span>
        </div>
      </div>
      <h3 className="book-title">{book.title}</h3>
    </div>
  );
};

export default BookCard;