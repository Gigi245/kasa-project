import { useParams } from 'react-router-dom';
import logements from '../data/logements.json';
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';
import Error from './Error';
import './Housing.scss';

function Housing() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);
  if (!logement) {
    return <Error />;
  }
  console.log('Selected property:', logement);
  return (
    <main>
      {logement && <Carousel pictures={logement.pictures} />}
      <div className="housing-details">
        <div className="housing-info">
          {logement && <h1>{logement.title}</h1>}
          {logement && <p>{logement.location}</p>}
          {logement && (
            <div className="housing-tags">
              {logement.tags.map((tag) => (
                <span key={tag} className="housing-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="housing-sidebar">
          {logement && (
            <div className="housing-host">
              <span>{logement.host.name}</span>
              <img src={logement.host.picture} alt={logement.host.name} />
            </div>
          )}

          {logement && (
            <div className="housing-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  style={{
                    color: star <= Number(logement.rating) ? '#ff6060' : '#e3e3e3'
                  }}
                >
                  ★
                </span>
              ))}
            </div>
          )}
        </div>



      </div>

      {logement && (
        <div className="housing-collapses">
          <Collapse title="Description">
            {logement.description}
          </Collapse>
          <Collapse title="Amenities">
            {logement.equipments.map((equipment, index) => (
              <div key={index}>{equipment}</div>
            ))}
          </Collapse>
        </div>
      )}
    </main>
  );
}

export default Housing;
