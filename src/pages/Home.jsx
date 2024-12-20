import Card from "../components/card";

function Home() {
  // const dates = generateDates();

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
        {/* <div style={styles.grid}>
          {dates.map((date, index) => (
            <Link
              key={index}
              to={`/anecdote/${index + 1}`}
              style={styles.card}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05) translateY(-5px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1) translateY(0)')}
            >
              <p>{date}</p>
            </Link>
          ))}
        </div> */}
        <Card/>
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '20px',
    marginTop: '20px',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFAF0',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    textAlign: 'center',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    textDecoration: 'none',
    color: '#B22222',
  },
  list: {
    fontSize: '1.2rem',
    lineHeight: '1.8',
    marginLeft: '20px',
  },
};

export default Home;
