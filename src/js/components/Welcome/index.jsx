import React from 'react';
import PropTypes from 'prop-types';
import {
    WelcomeWrapper, Header, UnorderedList, StartButton,
} from './Welcome.style';

function Welcome(props) {
    const { startButtonClicked } = props;

    return (
        <WelcomeWrapper>
            <Header>POSTAL CODE LOCATOR</Header>
            <UnorderedList>
                <li>Search for the postal code which you want to locate.</li>
                <li>Click on the postal code to locate it on map.</li>
            </UnorderedList>
            <StartButton onClick={startButtonClicked} title="Start">
                Start
            </StartButton>
        </WelcomeWrapper>
    );
}

Welcome.propTypes = {
    startButtonClicked: PropTypes.func.isRequired,
};

export default Welcome;
