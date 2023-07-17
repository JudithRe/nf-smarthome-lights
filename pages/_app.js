import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState([
    { id: 1, name: "Living Room", isOn: false },
    { id: 2, name: "Kitchen", isOn: false },
    { id: 3, name: "Bedroom", isOn: false },
    { id: 4, name: "Bathroom", isOn: false },
    { id: 5, name: "Garage", isOn: false },
    { id: 6, name: "Porch", isOn: false },
    { id: 7, name: "Garden", isOn: false },
    { id: 8, name: "Office", isOn: false },
  ]);

  const turnedOnLights = lights.filter((light) => light.isOn).length;

  function handleToggle(id) {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function handleTurnOffAll() {
    setLights(
      lights.map((light) =>
        light.isOn ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function handleTurnOnAll() {
    setLights(
      lights.map((light) =>
        light.isOn ? light : { ...light, isOn: !light.isOn }
      )
    );
  }

  return (
    <Layout isDimmed={turnedOnLights === 0 ? true : false}>
      <GlobalStyle />
      <Component
        handleTurnOffAll={handleTurnOffAll}
        handleTurnOnAll={handleTurnOnAll}
        turnedOnLights={turnedOnLights}
        toggleLight={handleToggle}
        lights={lights}
        {...pageProps}
      />
    </Layout>
  );
}
