import React, { useState } from 'react';
import { getBooks } from './BooksService';

import styled from 'styled-components';
import { InputGroup, FormControl, Button, Form, Col, Row } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchHeader = styled.div`
    margin-top: 4px;
`;

function SearchBar(props) {

    const [search, setSearch] = useState('');

    function newBook() {
        window.location.href = '/books/new';
    }

    function handleOnSubmit(event) {
        event.preventDefault();
        const books = getBooks();
        const results = books.filter(book => book.title.toLowerCase().indexOf(search) !== -1);
        props.setBooks(results);
    }

    function handleSearchChange(event) {
        setSearch(event.target.value.toLowerCase());
    }

    return (
        <SearchHeader>
            <Form onSubmit={handleOnSubmit}>
                <Row>
                    <Col className="col-xl-3">
                        <InputGroup className="mb-3">
                            <FormControl placeholder="Search your books" onChange={handleSearchChange} />
                            <Button type="submit">
                                <FontAwesomeIcon icon={faSearch} />
                            </Button>
                        </InputGroup>
                    </Col>
                    <Col className="col-xl-2">
                        <Form.Group controlId="order">
                            <Form.Control as="select">
                                <option>Newest</option>
                                <option>Oldest</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Button variant="primary" className="float-right" onClick={newBook}> New Book </Button>
                    </Col>
                </Row>
            </Form>
        </SearchHeader>
    );
}

export default SearchBar;