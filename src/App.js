import { GlobalStyle } from "./Style";
import MenuBar from "./components/MenuBar/MenuBar";
import Logo from "./components/Logo/Logo";
import Body from "./components/Body/Body";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <MenuBar></MenuBar>
      <Logo></Logo>
      {/* Big Picture */}
      <Body></Body>
    </>
  );
}

export default App;
