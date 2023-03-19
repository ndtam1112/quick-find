import {Link} from "react-router-dom";
import styled from "styled-components";

export const CustomLink = styled(Link)
`
color: rgba(0, 0, 0, 0.6);
text-decoration: none;
&:hover,
&:focus{
   color: blue;
}
&:active{
   color: red;
};`
