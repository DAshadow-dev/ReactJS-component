import React from 'react';

function AboutMe(){
    return(
        <div style={styles.containe}>
            <h1 style={styles.header}>Hello, I'm Duy An</h1>
            <p style={styles.paragraph}>I'm a student in major Web Developer in DN FPT University</p>
        </div>
    )
}

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f0f0f0',
      fontFamily: 'Arial, sans-serif',
    },
    header: {
      color: '#333',
    },
    paragraph: {
      color: '#666',
      maxWidth: '600px',
      textAlign: 'center',
    },
  };

export default AboutMe;