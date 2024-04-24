import logo from '../assets/logo.png'
import '../styles/App.css'
import '../components/Footer';
import BackgroundContainer from '../components/Background';
import MainContainer from '../components/Main';
import FooterContainer from '../components/Footer';

export default function Root() {
    return (
      <>
        <BackgroundContainer />
        <img src={logo} className="logo" alt="Bubbly's Symphony: Guardians of the Depths" />
        <MainContainer />
        <FooterContainer />
      </>
    )
  }
