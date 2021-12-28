import React, { useState, useCallback } from 'react';
import Welcome from './Welcome';
import GoogleMap from './GoogleMap';
import SearchWindow from './SearchWindow';
import InteractiveWrapper from './PostalCodeSearch.style';

function PostalCodeSearch() {
    const [showWelcome, setShowWelcome] = useState(true);

    const startButtonClicked = useCallback(() => {
        setShowWelcome(false);
    }, [showWelcome]);

    return (
        <InteractiveWrapper>
            {showWelcome && <Welcome startButtonClicked={startButtonClicked} />}
            {!showWelcome && (
                <>
                    <GoogleMap />
                    <SearchWindow />
                </>
            )}
        </InteractiveWrapper>
    );
}

export default PostalCodeSearch;
