import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import initialState from 'initialState';
import PostalCodeSearch from './index';

describe('PostalCodeSearch component', () => {
    const store = createStore(() => (initialState));

    const markerSetVisible = jest.fn();
    const mapSetZoom = jest.fn();
    const mapSetOptions = jest.fn();

    const windowGoogle = {
        maps: {
            Map() {
                return {
                    setOptions: mapSetOptions,
                    setZoom: mapSetZoom,
                };
            },
            LatLng: class {},
            Marker() {
                return {
                    setVisible: markerSetVisible,
                };
            },
        },
    };

    beforeEach(() => {
        window.google = windowGoogle;

        render(<Provider store={store}><PostalCodeSearch /></Provider>);
    });

    test('should render Welcome component initially', () => {
        expect(screen.getByText('POSTAL CODE LOCATOR')).toBeInTheDocument();
        expect(screen.getByText('Search for the postal code which you want to locate.')).toBeInTheDocument();
        expect(screen.getByText('Click on the postal code to locate it on map.')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /start/i })).toBeInTheDocument();
    });

    test('when start button clicked, should render SearchWindow and GoogleMap', () => {
        fireEvent.click(screen.getByRole('button', { name: /start/i }));
        expect(screen.getByPlaceholderText('Search postal code')).toBeInTheDocument();
        expect(screen.getByText('Click on the postal code to locate it.')).toBeInTheDocument();
    });
});
