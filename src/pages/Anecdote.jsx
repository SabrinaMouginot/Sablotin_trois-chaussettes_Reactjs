import { useParams } from 'react-router-dom';

const anecdotes = [
  "Le marché des chaussettes",
  "La chaussette fantôme",
  "Le concours de danse",
  "La chaussette-parachute",
  "Le voleur mystère",
  "La collection royale",
  "La ruse contre les gobelins",
  "La chaussette porte-bonheur",
  "Le radeau flottant",
  "Le piège à ours",
  "Le messager héroïque",
  "Le duel de chaussettes",
  "La chaussette musicale",
  "La chaussette géante",
  "Le cirque des chaussettes",
  "Le mystère des trois chaussettes",
  "L’incident du dragon",
  "La cachette secrète",
  "Le parfum de chaussette",
  "La course folle",
  "La prédiction des chaussettes",
  "La tempête de chaussettes",
  "La guerre des chaussettes",
  "Le mariage des chaussettes",
];

function Anecdote() {
  const { day } = useParams();
  const anecdote = anecdotes[day - 1];

  return (
    <div style={styles.container}>
      <h2>Anecdote du jour {day}</h2>
      <p>{anecdote}</p>
      <a href="/" style={styles.link}>
        Retour à l&#39;accueil
      </a>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  link: {
    color: '#B22222',
    textDecoration: 'none',
  },
};

export default Anecdote;
