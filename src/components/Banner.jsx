import './Banner.scss';

function Banner({ title, variant = 'home' }) {
  return (
    <div className={`banner banner--${variant}`}>
      {title && <h1>{title}</h1>}
    </div>
  );
}

export default Banner;