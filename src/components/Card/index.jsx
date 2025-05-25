import GithubLogo from '../../utils/img/github-mark-white.svg';
import './styles.css';

const Card = ({ image, title, description, link, tags }) => {
  return (
    <div className="card w-full h-full rounded-lg relative border-2 p-1 justify-between hover:scale-110 duration-200">
      <img src={image} alt={title} />
      <div className="card-info opacity-0 flex flex-col absolute -top-5 scale-0 left-0 w-full h-full items-center p-5">
        <div className="absolute top-0 left-0 w-full h-full bg-slate-800 opacity-70 z-0"></div>
        <h3 className="text-white text-2xl z-10">{title}</h3>
        {description &&
          <p className="text-white z-10">{description}</p>}
        <div className="link flex z-10 mb-4">
          <a href={link} target="_blank" rel="noreferrer">
            <img src={GithubLogo} alt="github-logo" width={50} />
          </a>
        </div>
        <div className="tags flex">
          {tags.length && tags.map(item => (
            <span className="flex-row m-1 rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset z-10">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
