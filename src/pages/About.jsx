function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Qui est Sablotin Trois-Chaussettes ?</h1>
      <p style={styles.text}>
        Sablotin Trois-Chaussettes est un lutin légendaire connu pour sa passion unique des chaussettes. Mais pourquoi trois chaussettes ?
      </p>
      <p style={styles.text}>
        <strong>Les raisons ?</strong> Tout dépend de son humeur :
      </p>
      <ul style={styles.list}>
        <li>« Au cas où l’une se perdrait ! »</li>
        <li>« Pour les urgences ! »</li>
        <li>« C’est mon porte-bonheur. »</li>
        <li>« Parce que trois, c’est plus joli ! »</li>
        <li>« C’est une tradition familiale. »</li>
      </ul>
      <p style={styles.text}>
        Quelle que soit la raison, Sablotin reste un personnage légendaire, apprécié pour son originalité et sa créativité sans limite.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2rem',
    color: '#B22222',
    marginBottom: '20px',
  },
  text: {
    fontSize: '1.2rem',
    marginBottom: '15px',
    lineHeight: '1.6',
  },
  list: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    marginLeft: '20px',
  },
};

export default About;
