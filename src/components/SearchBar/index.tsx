import React from 'react';
import { IoIosSearch } from 'react-icons/io';

import { Container } from './styles';

const SearchBar = () => (
  <Container>
    <IoIosSearch size={24} />
    <form name="search-user">
      <input type="text" placeholder="Search User" />
    </form>
  </Container>
);

export default SearchBar;
