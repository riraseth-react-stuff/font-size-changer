import useScreenWidth from '../Hooks/useScreenWidth';
const Link = ({ url, title, img_url, text, link_type }) => {
  const { width } = useScreenWidth();
  const breakpoint = 768;
  return (
    <>
      {link_type === 'right' ? (
        <a href={url} className="content__link content__link--right p-1">
          <h2 className="content__title">{title}</h2>
          {width > breakpoint ? (
            <div className="content__details">
              <img
                src={img_url}
                alt=""
                className="content__img content__img--right"
              />
              <p>{text}</p>
            </div>
          ) : null}
          <span className="hide-desktop">link ></span>
        </a>
      ) : (
        <a href={url} className="content__link content__link--left">
          <img
            src={img_url}
            alt=""
            className="content__img content__img--left"
          />
          <h2 className="content__title p-1">{title}</h2>
        </a>
      )}
    </>
  );
};

export default Link;
