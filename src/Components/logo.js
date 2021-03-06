import { useEffect } from "react";
import Vivus from "vivus";

export const Logo = ({ stroke = "black", fill = "black", ...props }) => {
  let strokeColor = stroke;
  let strokeWidth = "1.08332086";
  let fillColor = fill;
  useEffect(() => {
    new Vivus("menu-div", { duration: 160, file: "logo.svg" });
  }, []);

  return <div id="menu-div" {...props}></div>;

  /* export const Logo = ({ stroke = "black", fill = "none", ...props }) => {
  let strokeColor = stroke;
  let strokeWidth = "5.5";
  let fillColor = fill;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 399 420" {...props}>
      <g
        style={{
          stroke: strokeColor,
          fill: fillColor,
          strokeWidth: strokeWidth,
          strokeOpacity: "1",
          strokeMiterlimit: "4",
          strokeDasharray: "none",
          fillOpacity: "1",
          fillRule: "nonzero",
          opacity: "1",
          strokeLinejoin: "round",
          strokeLinecap: "butt",
        }}
      >
        <path
          d="M165.843 38.441V64.38s28.142-1.977 28.142 16.38c0 18.196 1.353 18.866 0 34.296 0 20.608-28.142 19.608-28.142 19.608s.3 21.974 0 31.199c0 0 29.272 2.586 28.783 42.34l-.64 52.075.11 60.79h68.08v-44.563L273 261.879l-.38-24.96-10.444-19.137.628-178.585L250.271 26c5.779 12.47-18.913 21.124-19.367 10.174v-9.068l-30.264-.756L182.455 38z"
          transform="translate(60)"
        />
        <path
          d="M63.015 38h59.879v27.793h-29.94c-15.729 0-29.939 0-29.939-13.897zM63.015 101S78.57 101.435 79 88h43.894v33H63.015zM.085 88h34.824v33H.085zM63.015 134h59.879v226H63.015zM135.938 337h29.905v23h-29.905zM193.985 337h68.191v23h-68.19zM165.843 321.066h-29.905V190s29.905-2.071 29.905 20.556v110.51zM149.907 88h5.656S162 89.994 162 95.651v19.092s0 6.257-9.088 6.257h-10.43s-8.162 0-8.162-6.257V95.651S135.028 88 143.896 88z"
          transform="translate(60)"
        />
      </g>
    </svg>
  );*/
};
