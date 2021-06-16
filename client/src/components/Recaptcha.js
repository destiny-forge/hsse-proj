import { useEffect } from 'react';

const Recaptcha = ({ key, action, onToken }) => {
  const handleLoaded = (_) => {
    window.grecaptcha.ready((_) => {
      window.grecaptcha.execute(key, { action }).then((token) => {
        onToken(token);
      });
    });
  };

  useEffect(() => {
    // Add reCaptcha
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${key}`;
    script.addEventListener('load', handleLoaded);
    document.body.appendChild(script);
  }, []);

  return (
    <div className="g-recaptcha" data-sitekey={key} data-size="invisible"></div>
  );
};

export default Recaptcha;
