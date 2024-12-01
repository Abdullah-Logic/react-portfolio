import { headerSocials } from "../../const";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      {headerSocials.map(({ id, icon, link }) => (
        <a href={link} target="_blank" rel="noopener noreferrer" key={id}>
          <div>{icon}</div>
        </a>
      ))}
    </div>
  );
};

export default HeaderSocials;
