import { Link } from 'react-router-dom';

function generateDates() {
    const startDate = new Date(2024, 11, 1); // 1er Décembre 2024
    const dates = [];
  
    for (let i = 0; i < 24; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      const dayName = currentDate.toLocaleDateString('fr-FR', { weekday: 'long' });
      const day = currentDate.getDate();
      const month = currentDate.toLocaleDateString('fr-FR', { month: 'long' });
      dates.push(`${dayName} ${day} ${month.charAt(0).toUpperCase() + month.slice(1)} 2024`);
    }
  
    return dates;
  }

function Card() {
    const dates = generateDates();
    return (
<div style={styles.grid}>
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
</div>
  );
}

const styles = {
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
  };

export default Card;
