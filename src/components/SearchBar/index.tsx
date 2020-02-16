import React, { useState, useRef } from 'react';
import { IoIosSearch, IoIosClose } from 'react-icons/io';

import { Container } from './styles';

const SearchBar = () => {
  const [open, setOpen] = useState(false);
  const [focus, setFocus] = useState(false);
  const searchInput = useRef<HTMLInputElement>(null);

  const openSearchBar = () => {
    if (!open) {
      setOpen(true);
      setTimeout(() => {
        searchInput.current?.focus();
      }, 500);
    } else {
      searchInput.current?.focus();
    }
  };

  const closeSearchBar = () => {
    return setOpen(false);
  };

  return (
    <Container open={open} focus={focus}>
      <button type="button" onClick={openSearchBar}>
        <IoIosSearch size={24} />
      </button>
      <form name="search-user">
        <input
          type="text"
          placeholder="Search User"
          ref={searchInput}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          disabled={!open}
        />
      </form>
      <button
        type="button"
        onClick={closeSearchBar}
        className="close"
        disabled={!open}
      >
        <IoIosClose size={24} />
      </button>
    </Container>
  );
};

export default SearchBar;
