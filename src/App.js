import { GlobalStyle, MainPicture } from "./Style";
import MenuBar from "./components/MenuBar/MenuBar";
import Logo from "./components/Logo/Logo";
import Body from "./components/Body/Body";
import strings from "./strings.json";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <MenuBar></MenuBar>
      <Logo></Logo>
      {/* Big Picture */}
      <MainPicture image={strings.MAIN_IMAGE}></MainPicture>
      <Body></Body>
    </>
  );
}

export default App;
