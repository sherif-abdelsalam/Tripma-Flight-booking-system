import Image from "next/image";
import appStore from "@/public/images/appStore.jpg";
import googlePlay from "@/public/images/googlePlay.jpg";
export default function Details() {
  return (
    <>
      <ul>
        <li>About</li>
        <li>About Tripma</li>
        <li>How it works</li>
        <li>Careers</li>
        <li>Press</li>
        <li>Blog</li>
        <li>Forum</li>
      </ul>

      <ul>
        <li>Partner with us</li>
        <li>Partnership programs</li>
        <li>Affiliate program</li>
        <li>Connectivity partners</li>
        <li>Promotions and events</li>
        <li>Integrations</li>
        <li>Community</li>
        <li>Loyalty program</li>
      </ul>

      <ul>
        <li>Support</li>
        <li>Help Center</li>
        <li>Contact us</li>
        <li>Privacy policy</li>
        <li>Terms of service</li>
        <li>Trust and safety</li>
        <li>Accessibility</li>
      </ul>

      <ul>
        <li>Get the app</li>
        <li>Tripma for Android</li>
        <li>Tripma for iOS</li>
        <li>Mobile site</li>
        <li>
          <Image src={appStore} alt="Get it on App store" />
        </li>
        <li>
          <Image src={googlePlay} alt="Get it on Google Play" />
        </li>
      </ul>
    </>
  );
}
