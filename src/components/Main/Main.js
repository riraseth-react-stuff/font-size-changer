import useScreenWidth from '../../Hooks/useScreenWidth';
import Hero from './Hero';
import Links from './Links';
import FontChanger from './FontChanger';

import { rightLinks, leftLinks } from '../../data';
const Main = () => {
  const { width } = useScreenWidth();
  const breakpoint = 768;
  return (
    <main className="container content">
      {width > breakpoint ? (
        <>
          <section className="content__left">
            <Hero></Hero>
            <Links links={leftLinks}></Links>
            <FontChanger></FontChanger>
          </section>
          <section className="content__right">
            <Links links={rightLinks}></Links>
          </section>
        </>
      ) : (
        <>
          <section className="content__top">
            <Hero></Hero>
          </section>
          <section className="content__bottom">
            <Links links={leftLinks}></Links>
            <Links links={rightLinks}></Links>
          </section>
          <FontChanger></FontChanger>
        </>
      )}
    </main>
  );
};

export default Main;
