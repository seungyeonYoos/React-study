import logo from './logo.svg';
import './App.css';
function Header(){
  return <header>
  <h1><a href='#'>WEB</a></h1>
</header>
}
function Nav(){
  return <nav>
        <oi>
          <li><a href='/read/1'>html</a></li>
          <li><a href='/read/2'>css</a></li>
          <li><a href='/read/3'>java</a></li>
        </oi>
      </nav>
}
function Article(){
  return <article>
  <h2>Welcome</h2>
  Hello, WEB
</article>
}

function App() {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Article></Article>
    </>
  );
}

export default App;
