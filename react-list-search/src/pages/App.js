import { Container } from 'react-bootstrap';
import { getBooks } from '../services/BooksService';
import { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import ListContainer from '../components/ListContainer';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(getBooks());
  }, [])

  return (
    <Container>
      <h1>LuizTools' Books</h1>
      <hr />
      <SearchBar setBooks={setBooks} />
      <ListContainer books={books} />
    </Container>
  );
}

export default App;
