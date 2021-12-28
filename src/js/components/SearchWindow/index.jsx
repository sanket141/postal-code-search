import React, { useState, useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import updateSelectedPostalCode from 'actions';
import postalCodeLocations from 'postalCodeData';
import {
    SearchInput, Window, UnorderedList, List, Instruction,
} from './SearchWindow.style';

function SearchWindow() {
    const [searchText, setSearchText] = useState('');
    const searchInputRef = useRef();
    const dispatch = useDispatch();

    function onListClicked(postalCode) {
        dispatch(updateSelectedPostalCode(postalCode));
    }

    const searchKeyUp = useCallback(() => {
        setSearchText(searchInputRef.current.value);
    }, [searchText]);

    return (
        <Window>
            <SearchInput ref={searchInputRef} placeholder="Search postal code" onKeyUp={searchKeyUp} />
            <UnorderedList>
                {postalCodeLocations.map(item => (
                    <List
                        key={item.postalCode}
                        display={item.postalCode.indexOf(searchText) < 0 ? 'none' : ''}
                        onClick={() => onListClicked(item.postalCode)}
                    >
                        {item.postalCode}
                    </List>
                )) }
            </UnorderedList>
            <Instruction>Click on the postal code to locate it.</Instruction>
        </Window>
    );
}

export default SearchWindow;
