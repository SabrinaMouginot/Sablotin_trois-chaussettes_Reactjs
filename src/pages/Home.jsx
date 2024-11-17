import { Link } from 'react-router-dom';

const anecdotes = Array.from({ length: 24 }, (_, i) => ({
  day: i + 1,
  title: `Jour ${i + 1}`,
}));

function Home() {
  return (
    <div>
      <h1>Bienvenue sur le calendrier de l&#39;avent de Sablotin Trois-Chaussettes !</h1>
      <p>Découvrez chaque jour une anecdote hilarante en attendant Noël :</p>
      <ul>
        {anecdotes.map((a) => (
          <li key={a.day}>
            <Link to={`/anecdote/${a.day}`}>{a.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
