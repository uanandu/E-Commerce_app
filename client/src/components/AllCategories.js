import styled from "styled-components";
import { NavLink } from "react-router-dom";
import background from "../styles/images/categoriesBackground.jpeg";

const AllCategories = () => {
    const categories = ["category1", "category2", "category3", "category4", "category5"]
    return(
        <Wrapper>
            {categories.map((category) => {
                return (
                    <Links to="/categories/:categoryId">
                    <Div>{category}</Div>
                    </Links>
                )
                
            })}
        </Wrapper>
    )
}


const Links = styled(NavLink)`
text-decoration: none;
color: black;
`
const Wrapper = styled.div`
display: flex;
height: 100vh;
align-items: center;
justify-content: center;
gap: 15px;
background-image: url(${background});
background-size: cover;
`

const Div = styled.div`
border-radius: 5%;
background-color: rgba(255, 255, 255, 0.5);
font-size: 40px;
padding: 10px;
`
export default AllCategories;