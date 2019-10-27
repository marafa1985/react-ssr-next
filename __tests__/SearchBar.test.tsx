import React from 'react';
import ReactDOM from 'react-dom';
import App from '../pages';
import SearchBar from '../Components/SearchBar';

describe('With Jest', () => {
    it('SearchBar to match snapShot', () => {
        const filterFun = ()=>{};
        const div = document.createElement('div');
        ReactDOM.render(<SearchBar  onFilterJob={filterFun}/>, div);
        expect(div).toMatchSnapshot();
    })
})
