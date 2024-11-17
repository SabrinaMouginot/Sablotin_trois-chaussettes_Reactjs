// function Header() {
//     return (
//       <header style={styles.header}>
//         <h1 style={styles.title}>🎄 Sablotin Trois-Chaussettes 🎄</h1>
//         <p style={styles.subtitle}>Le lutin du Père Noël et ses anecdotes hilarantes !</p>
//       </header>
//     );
//   }
  
//   const styles = {
//     header: {
//       backgroundColor: '#B22222',
//       color: '#FFF',
//       textAlign: 'center',
//       padding: '20px',
//     },
//     title: {
//       fontSize: '2rem',
//       margin: 0,
//     },
//     subtitle: {
//       fontSize: '1.2rem',
//       margin: '10px 0 0',
//     },
//   };
  
//   export default Header;
  

import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>🎄 Sablotin Trois-Chaussettes 🎄</h1>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Accueil</Link>
        <Link to="/about" style={styles.link}>Qui est Sablotin ?</Link>
      </nav>
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
  nav: {
    marginTop: '10px',
  },
  link: {
    color: '#FFF',
    textDecoration: 'none',
    margin: '0 15px',
    fontSize: '1.2rem',
  },
};

export default Header;
