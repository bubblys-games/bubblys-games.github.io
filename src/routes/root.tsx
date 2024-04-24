import logo from '../assets/logo.png'
import '../styles/App.css'
import '../components/Footer';
import BackgroundContainer from '../components/Background';
import MainContainer from '../components/Main';
import FooterContainer from '../components/Footer';

import styled from '@emotion/styled'

const LogoContainer = styled.div`
  animation: float 4s ease-in-out infinite;

  @keyframes float {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);
    }
  }
`

export default function Root() {
    return (
      <>
        <BackgroundContainer />
        <LogoContainer>
          <img src={logo} className="logo" alt="Bubbly's Symphony: Guardians of the Depths" />
        </LogoContainer>
        <MainContainer />
        <FooterContainer />
      </>
    )
  }
