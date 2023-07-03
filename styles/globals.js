import { createGlobalStyle } from "styled-components";
import normalize from "styled-normalize";

const GlobalStyles = createGlobalStyle`
${normalize}

@font-face {
  font-family: "Futura";
  src: url("/fonts/Futura/Futura Light font.ttf") format("truetype");
  font-weight: 300;
  font-style: normal;
}

//Meyer Reset Start
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
//Meyer Reset End

html {
    scroll-behavior: smooth;
  }

body {
	font-family: ${props => props.theme.fonts.main};
	font-size: 1.5rem;
	background: linear-gradient(154deg, rgba(237, 242, 244, 1) 0%, rgba(236, 248, 250, 1) 55%, rgba(193, 204, 207, 1) 100%);
	//background-color: ${props => props.theme.colors.background1};
	color: ${props => props.theme.colors.primary};
	cursor: default;
    transition: 0.5s ease;  
}

main {
	@media ${props => props.theme.breakpoints.lg} {
      max-width: 80vw;
      margin: 0 auto;
      }
      
    @media ${props => props.theme.breakpoints.xl} {
      max-width: 70vw;
      margin: 0 auto;
      }
}

h1, h2, h3, h4, h5, h6 {
	font-size: 2rem;
	line-height: 1.5rem;
	letter-spacing: 1.5px;
	//text-align: center;
}
`;

export default GlobalStyles;
