import { Link } from 'react-router-dom';

const anecdotes = Array.from({ length: 24 }, (_, i) => ({
  day: i + 1,
  title: `Jour ${i + 1}`,
}));

function Home() {
  return (
    <div style={styles.container}>
      <h2>Bienvenue sur le calendrier de l&#39;avent de Sablotin !</h2>
      <section style={styles.story}>
        <h3>L&#39;histoire de Sablotin Trois-Chaussettes</h3>
        <p>
          Sablotin Trois-Chaussettes n’a pas toujours été un lutin ordinaire. Avant de rejoindre l’atelier du Père Noël,
          il vivait dans une chaumière isolée, fabriquant des chaussettes pour les créatures magiques de la forêt. Mais
          un jour, une chaussette tricotée par Sablotin atterrit dans le sac de cadeaux du Père Noël...
        </p>
        <p>
          Intrigué par ce talent unique, le Père Noël invita Sablotin à rejoindre son équipe. Depuis, il tricote des
          chaussettes magiques pour les enfants du monde entier tout en partageant ses anecdotes hilarantes chaque jour
          de décembre !
        </p>
      </section>
      <section>
        <h3>Les anecdotes</h3>
        <ul style={styles.list}>
          {anecdotes.map((a) => (
            <li key={a.day}>
              <Link to={`/anecdote/${a.day}`} style={styles.link}>
                {a.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  story: {
    backgroundColor: '#F5F5DC',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '20px',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  link: {
    color: '#B22222',
    textDecoration: 'none',
  },
};

export default Home;
