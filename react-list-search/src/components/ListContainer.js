import React from 'react';
import styled from 'styled-components';
import ListItem from '../components/ListItem';

const ListContent = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #ccc;
  padding: 10px;
`;

function ListContainer(props) {
    return (
        <ListContent>
            {props.books.map(book => {
                return (
                    <ListItem
                        key={book.url}
                        title={book.title}
                        image={book.image}
                        price={book.price}
                        url={book.url}
                    />
                )
            })}
        </ListContent>
    );
}

export default ListContainer;