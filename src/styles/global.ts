import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
  --background-dark: #282a36;
  --background:#44475a;
  --font-dark:#44475a;
  --font-light:#f8f8f2	;
  --foreground:	#f8f8f2	;
  --comment:	#6272a4	;
  --cyan:	#8be9fd	;
  --green:	#50fa7b	;
  --orange:	#ffb86c;
  --pink:	#ff79c6	;
  --purple:	#bd93f9;
  --purple-light:#6933FF;
  --red:	#ff5555	;
  --yellow:	#f1fa8c;
  --white: #ffffff;
  --black: #000000;

}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html{
 @media (max-width: 1080px){
   font-size: 93.75%;
 }
 @media (max-width: 720px){
   font-size: 87.5%;
 }
}

body{
  background: var(--background);
  -webkit-font-smoothing: antialiased;
  color: var(--foreground);
}

body, input, button, textarea {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;

}
h1, h2,h3,h4,h5,h6,strong {
  font-weight: 700;
}

button{
  cursor:pointer;
}

[disabled]{
  opacity: 0.6;
  cursor: not-allowed;
}


`;
