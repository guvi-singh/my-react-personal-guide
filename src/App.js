import "./App.css";
import EventSheet from "./components/EventSheet";
import UseStateExample from "./components/Hooks/UseStateExample";
import MapUssage from "./components/MapUssage";
import SampleComponent from "./components/SampleComponent";

function App() {
  const carDetails = {
    name: "Honda City",
    model: "2006",
  };
  return (
    <div className='App'>
      {/* <p>
        <SampleComponent name='Hello from gurveer'></SampleComponent>
      </p> */}
      <p> {/* <SampleComponent car={carDetails}></SampleComponent> */}</p>
      {/* <EventSheet name='Gurveer Singh'></EventSheet> */}
      /* /* <MapUssage arr={[1, 2, 3, 4, "Gurveer", true]}></MapUssage> */
      <p>
        <UseStateExample></UseStateExample>
      </p>
    </div>
  );
}

export default App;
