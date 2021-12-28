import styled from 'styled-components';

const MapContainer = styled.div`
    height: 100%;

    .gm-style-iw.gm-style-iw-c,
    .gm-style .gm-style-iw-d {
        max-width: unset !important;
        max-height: unset !important;
        padding: 0;
        border-radius: 0;
        visibility: hidden;
    }
    
    .gm-style .gm-style-iw-t::after,
    .gmnoprint {
        display: none;
    }
`;

export default MapContainer;
