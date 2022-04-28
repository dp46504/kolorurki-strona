import { GlobalStyle, MainPicture } from "./Style";
import MenuBar from "./components/MenuBar/MenuBar";
import Logo from "./components/Logo/Logo";
import Body from "./components/Body/Body";
import strings from "./strings.json";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDvyBtGbeDbiiIAkYVqJFwJg-1Uq146gLs",
    authDomain: "kolorurki-strona.firebaseapp.com",
    projectId: "kolorurki-strona",
    storageBucket: "kolorurki-strona.appspot.com",
    messagingSenderId: "1057411669609",
    appId: "1:1057411669609:web:d139e8c52ff6a7a7ad8cf8",
    measurementId: "G-J8LG7JDJD3",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
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
