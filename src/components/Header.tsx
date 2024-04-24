import icon from '../../public/icon.png'

import { Link } from "react-router-dom"
import styled from '@emotion/styled'

const Header = styled.header`
    margin: 88px 40px 20px;
    text-align: left;
    animation: float 4s ease-in-out infinite;
    
    img {
        width: 120px;
    }

    @keyframes float {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-20px);
        }
    }
`

export default function HeaderContainer() {
    return (
        <Header>
            <Link to={`/`}>
                <img src={icon} className="icon" alt="Bubbly's Symphony: Guardians of the Depths" />
            </Link>
        </Header>
    );
}