import { Link } from "react-router-dom"
import styled from '@emotion/styled'

const Footer = styled.footer`
  width: 100%;
  position: absolute;
  left: 50%;
  bottom: 4%;
  color: #5b3f3e;
  transform: translateX(-50%);

  a {
    margin-right: 20px;

    :last-of-type {
      margin-right: 0;
    }
  }
`

export default function FooterContainer() {
    return (
        <Footer>
          <Link to={'/terms'}>Terms of Conduct</Link>
          <Link to={'/privacy'}>Privacy Policy</Link>
          <a href="mailto:support@bubblys.games">Contact</a>
          <p>© {new Date().getFullYear()} Seungmin Lee. All rights reserved.</p>
        </Footer>
    )
}