import React, { useState } from 'react';
import './App.css';
import Shelf from './components/Shelf'; 
import Modal from './components/Modal';
import { booksData } from './data/books.js';
import newGif from './assets/new.gif';
import Snow from './components/Snow';
import logoSvg from './assets/logo.svg';
import { faFire, faCode, faBook, faSearch,faLayerGroup, faLaptopCode, faDna } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function App() {
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const handleOpenModal = (book) => {
    setSelectedBook(book);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
    document.body.style.overflow = 'auto';
  };

  const categories = [
  { id: 'All',    label: 'ทั้งหมด', icon: faLayerGroup },
  { id: 'New',    label: 'ใหม่',  icon: faFire },
  { id: 'Coding', label: 'คอม',     icon: faLaptopCode },
  { id: 'Bio',    label: 'ชีวะ',    icon: faDna },
];


 
  const searchResult = booksData.filter(book => {
    const bookName = book.title || ''; 
    return bookName.toLowerCase().includes(searchTerm.toLowerCase());
});

  return (
    <div className="app-container">
      <Snow />
      <header className="header" >
        <h1>คลังสรุป Chaqui.rl</h1>
        <div className="sub"><p>ติดตามกันได้ที่: </p> <div className="clearNoteProfileBox" onClick={() => window.location.href = 'https://www.clearnotebooks.com/ja/authors/6025681'}>
          <img src={logoSvg}></img>
          <h5>Chaqui.rl</h5></div></div>
      </header>
      <div className="controls-container">

        <div className="filter-group">
    {categories.map((cat) => (
        <button 
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
            style={{ display: 'flex', alignItems: 'center', gap: '8px' }} // จัดให้ไอคอนกับตัวหนังสืออยู่แนวเดียวกัน
        >
          
            <FontAwesomeIcon icon={cat.icon} />
            
           
            {cat.label}
        </button>
    ))}
</div>

     
        <div className="search-box">
            <FontAwesomeIcon icon={faSearch} className="search-icon"/>
            <input 
                type="text" 
                placeholder="ค้นหาชื่อหนังสือ..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
      </div>

      <main>
        
          {((activeCategory === 'All' || activeCategory === 'New') && searchResult.filter(b => b.isNew === 'yes').length !=0) && (
             <Shelf 
                title="หนังสือมาใหม่" 
                books={searchResult.filter(b => b.isNew === 'yes')} 
                onBookClick={handleOpenModal}
                icon={newGif}
                faIcon={faBook}
             />
          )}

          {((activeCategory === 'All' || activeCategory === 'Coding')) && searchResult.filter(b =>  b.type === 'Coding').length !=0 && (
             <Shelf 
                title="สรุปวิชาเขียนโปรแกรม" 
                books={searchResult.filter(b => b.type === 'Coding')} 
                onBookClick={handleOpenModal}
                faIcon={faBook}
             />
          )}

         
          {((activeCategory === 'All' || activeCategory === 'Bio')) && searchResult.filter(b =>  b.type === 'Bio').length !=0 && (
             <Shelf 
                title="สรุปวิชาชีววิทยา" 
                books={searchResult.filter(b => b.type === 'Bio')} 
                onBookClick={handleOpenModal}
                faIcon={faBook}
             />
          )}

          
          {(activeCategory === 'All' && searchResult.length === 0) 
          || (activeCategory === 'New' && searchResult.filter(b => b.isNew === 'yes').length === 0) 
          || (activeCategory === 'Coding' && searchResult.filter(b => b.type === 'Coding').length === 0) 
          || (activeCategory === 'Bio' && searchResult.filter(b => b.type === 'Bio').length === 0)&& (
             <div style={{textAlign: 'center', marginTop: '50px', color: '#666'}}>
                <h3>ไม่พบหนังสือที่คุณค้นหา</h3>
             </div>
          )}
      </main>

      {selectedBook && (
        <Modal book={selectedBook} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;