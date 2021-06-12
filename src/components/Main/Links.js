import Link from '../Link';

const Links = (data) => {
  const { links } = data;
  return (
    <div
      className={`content__links ${
        links[0].link_type === 'left'
          ? 'content__links--left'
          : 'content__links--right'
      }`}
    >
      {links.map((link) => {
        return <Link key={link.id} {...link}></Link>;
      })}
    </div>
  );
};

export default Links;
