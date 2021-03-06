import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
  --background-dark: #282a36;
  --background:#44475a;
  --font-dark:#44475a;
  --font-light:#f8f8f2	;
  --foreground:	#f8f8f2	;
  --input-border-color: #d7d7d7;
  --input-background:#e7e9ee;
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

.modal-overlay{
  display: flex;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  align-items: center;
  justify-content: center;
  background: rgba(105,51,255,0.2);
}
.modal-content{
  position: relative;
  width: 100%;
  max-width: 576px;
  background: var(--background-dark);
  padding: 3rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

}

.close-modal-button{
  position: absolute;
  right: 1.5rem;
  top:1.5rem;
  border: 0;
  background: transparent;
  transition: filter 0.2s;
  &:hover{
    filter: brightness(0.8)
  }
}

`;
