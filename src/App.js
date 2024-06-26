import "./App.css";
import Accordian from "./components/accordian";
// import Loginform from "./components/inputForm/input";
import RandomColor from "./components/random-color";
import StarRating from "./components/stra-rating";
import QRCodeGenerator from "./components/qr-code-generator";
import SearchAutocomplete from "./components/search-autocomplete-with-apis";

function App() {
  return (
    <div className="App">
      <Accordian /> <hr />
      <StarRating /> <hr />
      <QRCodeGenerator /> <hr />
      <SearchAutocomplete /> <hr />
      <RandomColor /> <hr />
    </div>
  );
}

export default App;
