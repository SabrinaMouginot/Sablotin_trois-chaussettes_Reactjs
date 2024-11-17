function Header() {
    return (
      <header style={styles.header}>
        <h1 style={styles.title}>🎄 Sablotin Trois-Chaussettes 🎄</h1>
        <p style={styles.subtitle}>Le lutin du Père Noël et ses anecdotes hilarantes !</p>
      </header>
    );
  }
  
  const styles = {
    header: {
      backgroundColor: '#B22222',
      color: '#FFF',
      textAlign: 'center',
      padding: '20px',
    },
    title: {
      fontSize: '2rem',
      margin: 0,
    },
    subtitle: {
      fontSize: '1.2rem',
      margin: '10px 0 0',
    },
  };
  
  export default Header;
  