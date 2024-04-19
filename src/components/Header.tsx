import icon from '../../public/icon.png'

import { Link } from "react-router-dom"
import styled from '@emotion/styled'

const Header = styled.header`
    padding: 40px 40px 0;
    text-align: left;
    
    img {
        width: 120px;
    }
    img:hover {
        animation: float 1.2s ease-in-out infinite;
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