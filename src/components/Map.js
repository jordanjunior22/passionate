import React from 'react';

function Map() {
  const iframeStyle = {
    border: '0',
    width: '100%',
  };

  return (
    <section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d777.0020041922076!2d-77.12973462420501!3d38.83227723838041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b3be53a453f7%3A0xb7e107ae5c2c3822!2s5721%20Eliot%20Ct%2C%20Alexandria%2C%20VA%2022311!5e0!3m2!1sen!2sus!4v1693516893929!5m2!1sen!2sus"
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
