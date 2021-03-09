import React from 'react';
import './UrlContainer.css';

const UrlContainer = props => {
  let key = 0
  const urlEls = props.urls.map(url => {
    key += 1
    return (
      <div 
        className="url"
        key={key}
      >
        <h3>{url.title}</h3>
        <a href={url.short_url} target="blank">{url.short_url}</a>
        <p>{url.long_url}</p>
      </div>
    )
  });

  return (
    <section>
      { urlEls.length ? urlEls : <p>No urls yet! Find some to shorten!</p> }
    </section>
  )
}

export default UrlContainer;
