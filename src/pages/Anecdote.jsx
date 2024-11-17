import { useParams } from 'react-router-dom';

const titres = [
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

const anecdotes = [
    'Sablotin a convaincu un marchand ambulant d’échanger une mule contre une chaussette en prétendant qu’elle était "bénie par les elfes". La mule s’est révélée plus malicieuse que Sablotin lui-même.',
    'Une nuit, Sablotin jura qu’une de ses chaussettes volait autour de sa chambre. Après enquête, il s’avéra qu’un hibou avait piqué une chaussette pour construire son nid.',
    'Lors d’un bal, Sablotin attacha des clochettes à ses chaussettes pour "rythmer" ses pas de danse. Le problème ? Il dansait si mal que tout le monde pensait qu’il s’agissait d’un appel à l’aide.',
    'Un jour, Sablotin sauta d’une falaise, certain qu’une grande chaussette nouée suffirait à le ralentir. Heureusement, il atterrit dans un tas de foin.',
    'Quand des objets commencèrent à disparaître dans le village, tout le monde soupçonna Sablotin. Finalement, le coupable était un raton laveur… portant une chaussette sur la tête comme un masque.',
    'Sablotin envoya une chaussette au roi comme "offrande unique". Le roi, amusé, ajouta l’objet à sa collection d’art, ce qui fit de Sablotin un "artiste reconnu".',
    'Sablotin affronta un groupe de gobelins en prétendant que ses chaussettes étaient empoisonnées. Ils fuirent, effrayés par l’odeur.',
    'Sablotin gagna un tournoi de tir à l’arc… en utilisant une chaussette comme bandeau pour ses yeux. Tout le monde pense encore qu’il a triché.',
    'Un jour, Sablotin utilisa un sac rempli de chaussettes comme radeau. Étonnamment, ça marcha, bien que tout le monde se moqua de son "invention".',
    'Sablotin attrapa un ours avec une chaussette remplie de miel. L’ours ne l’attaqua pas, mais il partit avec la chaussette, laissant Sablotin se plaindre de sa perte.',
    'Sablotin attacha des messages secrets à ses chaussettes et les lança par-dessus les murs d’un château assiégé. Personne ne comprit pourquoi les chaussettes sentaient le fromage.',
    'Sablotin défia un chevalier en duel… avec des chaussettes mouillées comme armes. Le chevalier, trop décontenancé, abandonna.',
    'Lors d’une fête, Sablotin souffla dans une chaussette pour produire un son étrange. Il insista pour appeler cela "l’art du souffle textile".',
    'Sablotin tenta de tricoter une chaussette pour un géant. Malheureusement, il s’emmêla dans les fils et dut être secouru par tout le village.',
    'Sablotin monta un "cirque" où il jonglait avec des chaussettes. Les enfants adoraient, mais les adultes étaient moins impressionnés.',
    'Un magicien tenta de comprendre pourquoi Sablotin portait trois chaussettes. Après des heures d’étude, il conclut que c’était "juste de la folie".',
    'Sablotin offrit ses chaussettes au dragon local comme "couvre-oreilles". Le dragon, amusé, décida de ne plus terroriser le village.',
    'Sablotin utilisa une chaussette pour cacher des pièces d’or. Il oublia où il l’avait mise… jusqu’à ce qu’un poulet la retrouve.',
    'Sablotin essaya de vendre un parfum qu’il appela "Essence de laine". Personne ne l’acheta, mais le flacon devint une pièce de collection.',
    'Sablotin participa à une course à pied, mais avec ses chaussettes aux pieds… et pas de chaussures. Il perdit, mais obtint le prix du concurrent le plus courageux.',
    'Une voyante affirma que Sablotin trouverait l’amour grâce à ses chaussettes. Peu de temps après, il rencontra une marchande de bas qui partageait sa passion.',
    'Lors d’un orage, Sablotin accrocha ses chaussettes sur un mât pour "calmer les dieux". Étonnamment, l’orage s’arrêta… ou peut-être était-ce juste la météo.',
    'Sablotin déclencha une dispute entre deux familles rivales en lançant une chaussette dans leur campement. Il jura que c’était un accident.',
    'Sablotin organisa une cérémonie fictive pour unir "les deux chaussettes parfaites". Le village entier participa… et tout le monde porta des chaussettes dépareillées pour l’occasion.',
  ];
  

function Anecdote() {
  const { day } = useParams();
  const titre = titres[day - 1];
  const anecdote = anecdotes[day - 1];

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Anecdote du jour {day} : {titre}</h2>
      <p style={styles.anecdote}>{anecdote}</p>
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
    title: {
      fontSize: '2rem',
      color: '#B22222',
      marginBottom: '20px',
    },
    anecdote: {
      fontSize: '1.5rem', 
      lineHeight: '1.8',
      color: '#333',
      marginBottom: '20px',
    },
    link: {
      color: '#B22222',
      textDecoration: 'none',
      fontSize: '1rem',
    },
  };
  
export default Anecdote;
