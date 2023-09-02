import React from 'react';

function Map() {
  const iframeStyle = {
    border: '0',
    width: '100%',
  };

  return (
    <section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1770.51584027148!2d-77.12672528437805!3d38.83213809945262!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b3be53a453f7%3A0xb7e107ae5c2c3822!2s5721%20Eliot%20Ct%2C%20Alexandria%2C%20VA%2022311!5e1!3m2!1sen!2sus!4v1693654739669!5m2!1sen!2sus"
        height="450"
        style={iframeStyle}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

export default Map;
