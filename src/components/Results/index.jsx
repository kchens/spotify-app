import React from 'react';
import Result from '../Result';

const Results = (props) => {
    const { topTracks } = props

    return (
        <div>
            <h2>TopTracks</h2>
            {   topTracks &&
                topTracks.map((track, idx) => {
                    return <Result track={track} key={idx} />
                })
            }
        </div>
    )
}

export default Results