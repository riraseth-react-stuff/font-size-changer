import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer';

const PageContent = () => {
  return (
    <div className="page-container">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
};

export default PageContent;
