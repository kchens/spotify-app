import React from 'react';

const Result = (props) => {
    const { track } = props
    return (
        <div>
            {track.popularity} | {track.name}
        </div>
    )
}

export default Result