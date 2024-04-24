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
                    <h2>Privacy Policy</h2>
                </header>
                <Main>
                    <section>
                        <h3>Introduction</h3>
                        <p>
                            Welcome to Bubbly's Symphony: Guardians of the Depths! Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you play our game. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the game.
                        </p>
                    </section>
                    <section>
                    <h3>Information Collection and Use</h3>
                        <ol>
                            <li>
                                User Content for Ads
                                <ul>
                                    <li>
                                        Type of Information Collected: We may collect information that you provide directly or through user interaction with in-game advertising content. This may include engagement data or preferences within ads.
                                    </li>
                                    <li>
                                        Purpose of Collection: The information is used to deliver personalized advertising content provided by third-party advertisers, to enhance user experience, and improve ad relevance.
                                    </li>
                                    <li>
                                        Sharing of Information: We may share this information with third-party advertising partners in compliance with our contractual obligations and privacy standards.
                
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Player Name for Results Page
                                <ul>
                                    <li>
                                        Type of Information Collected: We collect player names that you submit for the purpose of displaying them on game results pages.
                                    </li>
                                    <li>
                                        Purpose of Collection: This information is used to identify player scores and rankings in the game’s results page.
                                    </li>
                                    <li>
                                        Storage and Protection: Player names are not stored beyond the scope of the game session.
                                    </li>
                                </ul>
                            </li>
                        </ol>
                    </section>
                    <section>
                        <h3>Third-Party Service Providers</h3>
                        <p>
                            We may share your information with third parties that perform services for us or on our behalf, including data analysis, email delivery, hosting services, customer service, and marketing assistance.
                        </p>
                        <ul>
                            <li>
                                <a href="https://policies.google.com/privacy?hl=en" target="blank">Google AdMob Privacy Policy</a>
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3>Marketing Communications</h3>
                        <p>
                            With your consent, we may send you emails about new product features, special offers, and other updates. You have the right at any time to stop us from contacting you for marketing purposes.
                        </p>
                    </section>
                    <section>
                        <h3>Legal Basis for Processing</h3>
                        <p>
                            We process your information under the following legal bases:
                        </p>
                        <ul>
                            <li>
                                Your consent;
                            </li>
                            <li>
                                The necessity to fulfill our contractual obligations to you;
                            </li>
                            <li>
                                The necessity for compliance with a legal obligation;
                            </li>
                            <li>
                                The necessity to protect your vital interests;
                            </li>
                            <li>
                                The necessity for the performance of a task carried out in the public interest;
                            </li>
                            <li>
                                The necessity for the purposes of legitimate interests pursued by us or a third party.
                            </li>
                        </ul>
                    </section>
                    <section>
                        <h3>Your Data Protection Rights</h3>
                        <p>
                            You have certain rights under applicable data protection laws. These may include the right to (i) request access and obtain a copy of your personal information, (ii) request rectification or erasure; (iii) restrict the processing of your personal information; and (iv) if applicable, to data portability.
                        </p>
                    </section>
                    <section>
                        <h3>Children's Privacy</h3>
                        <p>
                            Our game does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
                        </p>
                    </section>
                    <section>
                        <h3>Changes to This Privacy Policy</h3>
                        <p>
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                        </p>
                    </section>
                    <section>
                        <h3>Contact Us</h3>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at privacy@bubblys.games.
                        </p>
                    </section>
                    <section>
                        <h3>Effective Date: May 19, 2024</h3>
                    </section>
                </Main>
            </Article>
            <Footer />
        </>
    )
}