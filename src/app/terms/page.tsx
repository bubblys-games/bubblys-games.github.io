import HeaderContainer from "@/components/Header"

export default function Terms() {
  return (
    <>
      <HeaderContainer />
      <article className="m-5 p-5 text-left text-[#424242] bg-[#ffffff44] rounded-lg">
        <header>
          <h2 className="my-5 text-2xl font-semibold">Terms of Service</h2>
        </header>
        <main className="box-border relative mt-5 no-scrollbar">
          <ol className="list-decimal pl-8 font-light">
            <li>
              Introduction
              <p className="my-4">
                Welcome to Bubbly&apos;s Symphony: Guardians of the Depths (&quot;Game&quot;) operated by Seungmin Lee (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;). These Terms of Service govern your use of our game available on various platforms and devices. By accessing or using our game, you agree to be bound by these Terms and all applicable laws and regulations.
              </p>
            </li>
            <li>
              License to Use
              <p className="my-4">
                We grant you a non-exclusive, non-transferable, revocable license to use the Game for your personal, non-commercial purposes. You agree not to use the Game for any other purpose without our prior written consent.
              </p>
            </li>
            <li>
              User Conduct
              <ol className="list-decimal pl-10 my-4">
                You agree not to use the Game to:
                <li className="my-2">
                  Upload, post, email, or otherwise transmit any material that contains software viruses or any other computer code, files, or programs designed to interrupt, destroy, or limit the functionality of any computer software or hardware.
                </li>
                <li className="my-2">
                  Upload, post, email, or otherwise transmit any material that contains software viruses or any other computer code, files, or programs designed to interrupt, destroy, or limit the functionality of any computer software or hardware.
                </li>
                <li className="my-2">
                  Violate any applicable local, state, national, or international law.
                </li>
                <li className="my-2">
                  Harass, abuse, or harm another person.
                </li>
              </ol>
            </li>
            <li>
              Intellectual Property Rights
              <p className="my-4">
                All rights, title, and interest in and to the Game (excluding content provided by users) are and will remain the exclusive property of Seungmin Lee. The Game is protected by copyright, trademark, and other laws of both South Korea and foreign countries.
              </p>
            </li>
            <li>
              Disclaimer of Warranties
              <p className="my-4">
                The Game is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. We disclaim all warranties of any kind, whether express or implied, including, but not limited to, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </li>
            <li>
              Limitation of Liability
              <p className="my-4">
              In no event shall Seungmin Lee, nor his or her employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Game.
              </p>
            </li>
            <li>
              Governing Law
              <p className="my-4">
                These Terms shall be governed and construed in accordance with the laws of South Korea, without regard to its conflict of law provisions.
              </p>
            </li>
            <li>
              Changes to Terms
              <p className="my-4">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days&apos; notice prior to any new terms taking effect.
              </p>
            </li>
            <li>
              Contact Us
              <p className="my-4">
                If you have any questions about these Terms, please contact us at contact@bubblys.games.
              </p>
            </li>
          </ol>
          <section className="my-5 text-lg font-semibold">
            <h3>Effective Date: May 14, 2024</h3>
          </section>
        </main>
      </article>
    </>
  )
}