import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import postalCodeLocations from 'postalCodeData';
import MapContainer from './GoogleMap.style';

let map;
const markers = [];

function GoogleMap() {
    const mapRef = useRef();
    const { google } = window;
    const selectedPostalCode = useSelector(state => state.selectedPostalCode);

    function createMarkers(markerData) {
        markerData.map((item) => {
            const marker = new google.maps.Marker({
                position: new google.maps.LatLng(item.lat, item.lang),
                map,
                visible: false,
                clickable: false,
            });
            markers.push(marker);
            return item;
        });
    }

    function initMap() {
        const mapOptions = {
            center: new google.maps.LatLng(34.961202, -40.825691),
            zoom: 4,
            minZoom: 3,
            disableDefaultUI: true,
            gestureHandling: 'greedy',
        };
        map = new google.maps.Map(mapRef.current);
        map.setOptions(mapOptions);

        createMarkers(postalCodeLocations);
    }

    function updateMapFocus() {
        for (let i = 0; i < postalCodeLocations.length; i += 1) {
            const location = postalCodeLocations[i];
            if (location.postalCode === selectedPostalCode) {
                markers[i].setVisible(true);
                map.setOptions({
                    zoom: 8,
                    center: new google.maps.LatLng(location.lat, location.lang),
                });
            } else if (markers[i].visible) {
                markers[i].setVisible(false);
            }
        }
    }

    useEffect(() => {
        initMap();
    }, []);

    useEffect(() => {
        updateMapFocus();
    }, [selectedPostalCode]);

    return (
        <MapContainer ref={mapRef} />
    );
}

export default GoogleMap;
