//ListItem.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { NodeMongoBook } from '../stories/ListItem.stories';

it('Renders the Node+Mongo book', () => {
  render(<NodeMongoBook {...NodeMongoBook.args} />);
  expect(screen.getByText(/\$/)).toHaveTextContent(NodeMongoBook.args.price);
});