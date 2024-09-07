import React, { useState } from 'react';
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />
      <ImageList />
    </div>
  );
};

export default App;