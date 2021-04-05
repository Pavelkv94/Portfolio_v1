import './App.css';
import { Contacts } from './contacts/Contacts';
import { FindWork } from './findWork/FindWork';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { Projects } from './projects/Projects';
import { Skills } from './skills/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Projects/>
      <FindWork/>
      <Contacts />
      <Footer/>
    </div>
  );
}

export default App;
