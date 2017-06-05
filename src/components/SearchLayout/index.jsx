import React from 'react';
import Results from '../Results';

const SearchLayout = (props) => {
    const { onSearch, search } = props
    let input
    
    return (
        <div className="Search">
            {/*<pre><code>{JSON.stringify(props, null, 4)}</code></pre>*/}
            <form onSubmit={(e) => {
                    e.preventDefault()
                    if (!input.value.trim()) {
                        return
                    }
                    onSearch(input.value)
                }} >
                Search an artist: 
                <input type='text' 
                    ref={ (node) => {
                        input = node
                    }}
                    defaultValue='Michael Jackson'
                    />
                <input type='submit' value='submit' />
            </form>
            <Results topTracks={search.topTracks} />            
        </div>
    )
  }

export default SearchLayout