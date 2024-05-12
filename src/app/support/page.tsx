import HeaderContainer from "@/components/Header"

export default function Support() {
  return (
    <>
      <HeaderContainer />
      <article className="m-5 p-5 text-left text-[#424242] bg-[#ffffff44] rounded-lg">
        <section>
          <h2 className="my-5 text-2xl font-semibold">Support</h2>
          <p>
            Welcome to the support page for Bubbly&apos;s Symphony! We&apos;re here to help you with any questions, issues, or concerns you may have while playing our game. Please check out the FAQ section below for answers to common questions. If you can&apos;t find what you&apos;re looking for, don&apos;t hesitate to contact our support team.
          </p>
        </section>
        <section className="box-border relative mt-5 no-scrollbar font-light">
          <h3 className="mt-8 mb-2 text-lg font-semibold">FAQ</h3>
          <ol>
            <li>
              <h4 className="mt-4 mb-2 text-md font-semibold">How do install Bubbly&apos;s Symphony?</h4>
              <p className="my-2">
                Bubbly&apos;s Symphony is available for download on the App Store and Google Play. To download the game, simply search for &quot;Bubbly&apos;s Symphony&quot; in the app store and follow the on-screen instructions to install the game on your device.
              </p>
            </li>
            <li>
              <h4 className="mt-4 mb-2 text-md font-semibold">How do I create an account in Bubbly&apos;s Symphony?</h4>
              <p className="my-2">
                Bubbly&apos;s Symphony does not require you to create an account to play the game. You can start playing immediately after downloading the game without having to sign up or log in.
              </p>
            </li>
            <li>
              <h4 className="mt-4 mb-2 text-md font-semibold">How do I play Bubbly&apos;s Symphony?</h4>
              <p className="my-2">
                Bubbly&apos;s Symphony is a mobile game that you can download from the App Store or Google Play. To play, simply open the app and follow the on-screen instructions to start your underwater adventure with Bubbly.
              </p>
            </li>
          </ol>
        </section>
        <section className="box-border relative mt-5 no-scrollbar font-light">
          <h3 className="mt-8 mb-2 text-lg font-semibold">Contact Us</h3>
          <p className="my-2">
            If you have any questions, issues, or concerns while playing Bubbly&apos;s Symphony, please contact our support team at <a href="mailto:support@bubblys.games">support@bubblys.games</a>. Our team is available to assist you with any problems you may encounter while playing the game.
          </p>
          <p className="my-2">
            You can also reach out to us on social media for updates, news, and announcements about Bubbly&apos;s Symphony. Follow us on <a href="https://x.com/bubbly_robot" target="_blank">X</a>, <a href="https://www.instagram.com/bubbly_robot/" target="_blank">Instagram</a>, <a href="https://www.youtube.com/@BubblysSymphony" target="_blank">YouTube</a>, <a href="https://www.twitch.tv/senamonry" target="_blank">Twitch</a>, and <a href="https://discord.gg/9abeaP2eb7" target="_blank">Discord</a> to stay connected with the Bubbly community.
          </p>
          <p className="my-2">
            Thank you for playing Bubbly&apos;s Symphony! We appreciate your support and hope you enjoy your underwater adventure with Bubbly. If you have any feedback or suggestions for the game, please let us know. We&apos;re always looking for ways to improve the player experience and make the game more enjoyable for everyone.
          </p>
        </section>
      </article>
    </>
  );
} 