import Header from '../components/Header'
import BackgroundContainer from '../components/Background'
import Footer from '../components/Footer'

import styled from '@emotion/styled'

const Article = styled.article`
  margin: 20px;
  padding: 20px;
  text-align: left;
  color: #424242;
  background-color: #ffffff44;
  border-radius: 8px;
`

const Main = styled.main`
    box-sizing: border-box;
    position: relative;
    margin: 20px 0 0 0;

    /* Hide scrollbar for IE, Edge and Firefox */
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */

    /* Hide scrollbar for Chrome, Safari and Opera */
    :-webkit-scrollbar {
        display: none;
    }
`

export default function Privacy() {
  return (
    <>
      <BackgroundContainer />
      <Header />
      <Article>
        <header>
          <h2>Terms of Service</h2>
        </header>
        <Main>
          <ol>
            <li>
              Introduction
              <p>
                Welcome to Bubbly's Symphony: Guardians of the Depths ("Game") operated by Seungmin Lee ("us", "we", or "our"). These Terms of Service govern your use of our game available on various platforms and devices. By accessing or using our game, you agree to be bound by these Terms and all applicable laws and regulations.
              </p>
            </li>
            <li>
              License to Use
              <p>
                We grant you a non-exclusive, non-transferable, revocable license to use the Game for your personal, non-commercial purposes. You agree not to use the Game for any other purpose without our prior written consent.
              </p>
            </li>
            <li>
              User Conduct
              <ol>
                You agree not to use the Game to:
                <li>
                  Upload, post, email, or otherwise transmit any material that contains software viruses or any other computer code, files, or programs designed to interrupt, destroy, or limit the functionality of any computer software or hardware.
                </li>
                <li>
                  Upload, post, email, or otherwise transmit any material that contains software viruses or any other computer code, files, or programs designed to interrupt, destroy, or limit the functionality of any computer software or hardware.
                </li>
                <li>
                  Violate any applicable local, state, national, or international law.
                </li>
                <li>
                  Harass, abuse, or harm another person.
                </li>
              </ol>
            </li>
            <li>
              Intellectual Property Rights
              <p>
                All rights, title, and interest in and to the Game (excluding content provided by users) are and will remain the exclusive property of Seungmin Lee. The Game is protected by copyright, trademark, and other laws of both South Korea and foreign countries.
              </p>
            </li>
            <li>
              Disclaimer of Warranties
              <p>
                The Game is provided on an "AS IS" and "AS AVAILABLE" basis. We disclaim all warranties of any kind, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </li>
            <li>
              Limitation of Liability
              <p>
              In no event shall Seungmin Lee, nor his or her employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Game.
              </p>
            </li>
            <li>
              Governing Law
              <p>
                These Terms shall be governed and construed in accordance with the laws of South Korea, without regard to its conflict of law provisions.
              </p>
            </li>
            <li>
              Changes to Terms
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
              </p>
            </li>
            <li>
              Contact Us
              <p>
                If you have any questions about these Terms, please contact us at contact@bubblys.games.
              </p>
            </li>
          </ol>
          <section>
            <h3>Effective Date: May 19, 2024</h3>
          </section>
        </Main>
      </Article>
      <Footer />
    </>
  )
}