import React from 'react';
import ReactDom from 'react-dom';
import SeasonList from './SeasonList';

it('Renders without crashing', () => {
    const foodList = document.createElement("SeasonList");
    ReactDom.render(<SeasonList/>, foodList);
})