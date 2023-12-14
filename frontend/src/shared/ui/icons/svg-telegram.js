import * as React from "react";
const SvgTelegram = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="currentColor"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20Z"
      />
      <path
        fill="#fff"
        d="M8.324 19.827s10-4.104 13.468-5.55c1.33-.578 5.838-2.427 5.838-2.427s2.081-.81 1.908 1.156c-.058.809-.52 3.641-.983 6.705-.694 4.335-1.445 9.075-1.445 9.075s-.116 1.33-1.098 1.56c-.983.232-2.602-.808-2.89-1.04-.232-.173-4.336-2.774-5.839-4.046-.404-.347-.867-1.04.058-1.85 2.08-1.907 4.566-4.277 6.07-5.78.693-.694 1.387-2.312-1.504-.347-4.104 2.833-8.15 5.492-8.15 5.492s-.925.578-2.659.057c-1.734-.52-3.757-1.213-3.757-1.213s-1.387-.868.983-1.792Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgTelegram;