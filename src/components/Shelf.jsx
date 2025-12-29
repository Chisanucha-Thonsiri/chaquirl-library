import React, { useState } from 'react'; 
import './Shelf.css';
import BookCard from './BookCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBookOpen } from '@fortawesome/free-solid-svg-icons';

const Shelf = ({ title, books, onBookClick, icon, faIcon }) => {
  const [isOpen, setIsOpen] = useState(true); 

  return (
    <div>
      <h2 
        onClick={() => setIsOpen(!isOpen)} 
        style={{ cursor: 'pointer', userSelect: 'none' }}
      >{faIcon && (
                <FontAwesomeIcon icon={faIcon} className="shelf-icon" />
            )}
        {title} 
        {icon && <img src={icon} alt="new" style={{ height: '20px' , margin: '0 10px'}} />} 
        <span>{isOpen ? '▼' : '▶'}</span>
      </h2>
      {isOpen && (
        <div className="shelf">
          <div className="library-grid">
            {books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onOpen={() => onBookClick(book)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Shelf;