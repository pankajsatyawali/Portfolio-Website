import React, { useEffect, useState } from 'react';
import styles from './FooterStyles.module.css';

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <section id="footer" className={styles.container}>
      <p>
        © Copyrights {currentYear}<br /> by Devansh Gulati.
        <br />
        All rights reserved
      </p>
    </section>
  );
}

export default Footer;