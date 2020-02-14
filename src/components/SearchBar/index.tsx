import React, { useRef } from 'react';
import { IoIosSearch } from 'react-icons/io';

import { Container } from './styles';

const SearchBar = () => {
  const searchInput = useRef<HTMLInputElement>(null);
  const focusSearch = () => searchInput.current?.focus();
  return (
    <Container onClick={focusSearch}>
      <IoIosSearch size={24} />
      <form name="search-user">
        <input type="text" placeholder="Search User" ref={searchInput} />
      </form>
    </Container>
  );
};

export default SearchBar;
