import PageContent from './components/PageContent';
import GlobalStyle from './components/GlobalStyle';
import { FontContext } from './context/FontContext';
import { useContext } from 'react';
function App() {
  const { fontSize } = useContext(FontContext);
  return (
    <>
      <GlobalStyle size={fontSize}></GlobalStyle>
      <PageContent></PageContent>
    </>
  );
}

export default App;
