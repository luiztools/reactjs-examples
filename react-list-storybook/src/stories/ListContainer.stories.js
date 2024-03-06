import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ListContainer from '../components/ListContainer';
import * as ListItemStories from './ListItem.stories';

export default {
    title: 'ListContainer',
    component: ListContainer,
};

const Template = (args) => <ListContainer {...args} />;

export const DefaultList = Template.bind({});
DefaultList.args = {
    books: [{ ...ListItemStories.NodeMongoBook.args },
    { ...ListItemStories.NodeMySQLBook.args },
    { ...ListItemStories.MicroservicesBook.args }]
};