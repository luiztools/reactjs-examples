import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

import ListItem from '../components/ListItem';

export default {
    title: 'ListItem',
    component: ListItem,
};

const Template = (args) => <ListItem {...args} />;

export const NodeMongoBook = Template.bind({});
NodeMongoBook.args = {
    title: 'Programação Web com Node.js',
    image: 'https://m.media-amazon.com/images/I/4110e7iseFL.jpg',
    price: 14.99,
    url: "https://www.luiztools.com.br/livro-nodejs-amazon"
};

export const NodeMySQLBook = Template.bind({});
NodeMySQLBook.args = {
    title: 'Programação Web com Node.js (MySQL)',
    image: 'https://m.media-amazon.com/images/I/71+5-qGBkcL._AC_UL640_FMwebp_QL65_.jpg',
    price: 14.99,
    url: "https://www.luiztools.com.br/livro-node-mysql-amazon"
};

export const MicroservicesBook = Template.bind({});
MicroservicesBook.args = {
    title: 'Node.js e Microservices',
    image: 'https://m.media-amazon.com/images/I/41CUCsnLPML.jpg',
    price: 14.99,
    url: "https://www.luiztools.com.br/livro-node-ii-amazon"
};