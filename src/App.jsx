import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PostalCodeSearch from './js/components';
import rootReducer from './js/reduxStore';
import PoppinsRegular from './fonts/poppins_regular.ttf';
import PoppinsBold from './fonts/poppins_bold.ttf';

function App() {
    const store = createStore(rootReducer);

    const GlobalStyle = createGlobalStyle`
        @font-face {
            font-family: 'PoppinsRegular';
            src: url('${PoppinsRegular}') format('opentype');
        }
        @font-face {
            font-family: 'PoppinsBold';
            src: url('${PoppinsBold}') format('opentype');
        }
    `;

    return (
        <Provider store={store}>
            <>
                <GlobalStyle />
                <PostalCodeSearch />
            </>
        </Provider>
    );
}

export default App;
