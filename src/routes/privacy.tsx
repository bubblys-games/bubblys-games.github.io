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
                            Welcome to Bubbly's Symphony: Guardians of the Depths, a mobile game developed by Seungmin Lee designed to provide entertainment across the globe. This Privacy Policy (“Policy”) outlines how Seungmin Lee (“We”, “Us”, or “Our”) collects, manages, uses, and shares your information when you (“You”, “Players” or “Users”) engage with our game and related services (collectively, the “Service”).
                            <br /><br />
                            This Policy applies solely to information collected through your use of the Service. It does not cover any information or actions of third parties, including other companies or individuals, who may use the information you provide to them or offer their own products and services. By accessing and using the Service, you consent to this Policy and to the processing of your information as described herein. If you disagree with any part of this Policy, please do not use the Service.
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
                            While this Privacy Policy addresses only the collection, use, and disclosure of information we collect from you, our Service connects you to external sites and includes services provided by third-party service providers. These external entities have their own privacy policies and data collection, use, and disclosure practices that may differ from ours.
                        </p>
                        <ul>
                            <li>
                                <a href="https://policies.google.com/privacy?hl=en" target="blank">Google AdMob Privacy Policy</a>
                            </li>
                        </ul>
                        <p>
                            We do not control, and are not responsible for, the privacy practices of these third parties. Their information practices are not covered by this Privacy Policy. We encourage you to review the privacy policies of any third-party service provider or advertiser with whom you interact to understand their specific privacy and information usage practices. If you have questions about how they use your information, you should contact them directly.
                        </p>
                    </section>
                    <section>
                        <h3>Data Security</h3>
                        <p>We employ modern cryptography and secure handling procedures to protect the data we collect.</p>
                    </section>
                    <section>
                        <h3>Data Retention and Deletion</h3>
                        <p>
                            Information is retained only as long as necessary to provide you with our services and for legitimate and essential business purposes, such as maintaining the performance of our game, making data-driven business decisions, complying with our legal obligations, and resolving disputes. We specify the retention time for data retention in our data retention policy available upon request.
                        </p>
                    </section>
                    <section>
                        <h3>Children's Privacy</h3>
                        <p>
                            Our game does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
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
                        <h3>Marketing Communications</h3>
                        <p>
                            With your consent, we may send you emails about new product features, special offers, and other updates. You have the right at any time to stop us from contacting you for marketing purposes.
                        </p>
                    </section>
                    <section>
                        <h3>Changes to This Privacy Policy</h3>
                        <p>
                            We reserve the right to update our Privacy Policy at any time. We will notify you of any changes by posting the new policy on this page and updating the effective date.
                        </p>
                    </section>
                    <section>
                        <h3>Contact Us</h3>
                        <p>
                            If you have any questions or suggestions about our Privacy Policy, please contact us at privacy@bubblys.games.
                        </p>
                    </section>
                    <section>
                        <h3>Effective Date: April 26, 2024</h3>
                    </section>
                </Main>
            </Article>
            <Footer />
        </>
    )
}