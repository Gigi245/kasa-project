
import Banner from '../components/Banner';
import Card from '../components/Card';
import logements from '../data/logements.json';

function Home() {
  return (
    <main>
      <Banner title="Chez vous, partout et ailleurs" />

      <div className="cards-container">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </main>
  );
}

export default Home;

