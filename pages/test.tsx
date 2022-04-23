/** @format */

import Collapse from "../components/Collapse";
import Slider, { SliderButton, SliderProvider } from "../components/Slider";

export default function Test() {
  return <Collapse header={<>Testing</>}>Hello</Collapse>;
  return (
    <SliderProvider>
      <SliderButton>+</SliderButton>
      <Slider>
        <div style={{ width: 9999, background: "#EEE" }}>Hello!! </div>
      </Slider>
    </SliderProvider>
  );
}
