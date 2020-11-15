import React from 'react';
import ReactDom from 'react-dom';
import MonthFilter from './MonthFilter';

it('Renders without crashing', () => {
    const filter = document.createElement("MonthFilter");
    ReactDom.render(<MonthFilter/>, filter);
})