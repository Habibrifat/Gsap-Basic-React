import { useRef, useState } from "react";
import FlyImage from "./assets/flyimages.webp";
import "./App.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function App() {
  const imageRef = useRef();

  // const [xValue, setXValue] = useState(0);
  // const [yValue, setYValue] = useState(0);
  // const [rValue, setRValue] = useState(0);

  // const randomX = gsap.utils.random(-500, 500, 100);
  // const randomY = gsap.utils.random(-360, 360, 30);
  // const rotateX = gsap.utils.random(-200, 200, 30);

  const { contextSafe } = useGSAP();

  const mosquitoFly = contextSafe(
    () => {
      const randomX = gsap.utils.random(-500, 500, 100);
      const randomY = gsap.utils.random(-360, 360, 30);
      const rotateX = gsap.utils.random(-200, 200, 30);

      gsap.to(imageRef.current, {
        x: randomX,
        y: randomY,
        rotation: rotateX,
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
    },
    { scope: "main" }
  );

  // useGSAP(
  //   () => {
  //     gsap.to(imageRef.current, {
  //       x: xValue,
  //       y: yValue,
  //       rotation: rValue,
  //       duration: 1,
  //       ease: "elastic.out(1, 0.3)",
  //     });
  //   },
  //   { scope: "main", dependencies: [xValue, yValue, rValue] }
  // );

  return (
    <>
      <main>
        <img
          onMouseMove={() => {
            // setXValue(randomX);
            // setYValue(randomY);
            // setRValue(roateX);
            // console.log(" random x: " + randomX);
            // console.log(" random y: " + randomY);
            // console.log(" roate x: " + roateX);

            mosquitoFly();
          }}
          ref={imageRef}
          src={FlyImage}
          alt="FlyImage"
        />
      </main>
    </>
  );
}

export default App;
