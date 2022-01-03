export const Menu = ({ stroke = "black", fill = "black", ...props }) => {
  let strokeColor = stroke;
  let strokeWidth = "1.08332086";
  let fillColor = fill;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 53.181 59.713"
      {...props}
    >
      <g
        style={{
          fill: fillColor,
          stroke: strokeColor,
          strokeWidth: strokeWidth,
          strokeOpacity: "1",
          opacity: "0.97",
        }}
      >
        <path
          d="M19.315 283.045c0-2.064.723-2.167 15.167-2.167 14.444 0 15.166.103 15.166 2.167 0 2.063-.722 2.166-15.166 2.166s-15.167-.103-15.167-2.166zM1.982 265.712c0-2.101.722-2.167 23.833-2.167 23.111 0 23.833.065 23.833 2.167 0 2.1-.722 2.166-23.833 2.166-23.11 0-23.833-.065-23.833-2.166zm0-17.334c0-2.063.722-2.166 15.167-2.166 14.444 0 15.166.103 15.166 2.166 0 2.064-.722 2.167-15.166 2.167-14.445 0-15.167-.103-15.167-2.167z"
          transform="translate(0 -237.287)"
        />
      </g>
    </svg>
  );
};
