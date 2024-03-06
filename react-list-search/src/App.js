import ListItem from './ListItem';
import { Container } from 'react-bootstrap';
import { getBooks } from './BooksService';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #ccc;
  padding: 10px;
`;

function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(getBooks());
  }, [])

  return (
    <Container>
      <h1>LuizTools Books</h1>
      <hr />
      <SearchBar setBooks={setBooks} />
      <ListContainer>
        {
          books.map(book => {
            return (
              <ListItem key={book.url} title={book.title} image={book.image} price={book.price} url={book.url} />
            )
          })
        }
      </ListContainer>
    </Container>
  );
}

export default App;
