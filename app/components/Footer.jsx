import Image from "next/image";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import logoImg from "../../public/logo.png"; // Adjust the path as necessary
import Link from "next/link";
import appstoreImg from "../../public/appstore.png"; // Adjust the path as necessary
import googleplayImg from "../../public/googleplay.png"; // Adjust the path as necessary
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="flex pb-20 cursor-pointer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          <div>
            <Link href={"/"}>
              <Image width={128} height={50} src={logoImg} alt="logo" />
            </Link>
            <p className="font-normal w-[250] text-lg text-primary pt-4 pb-8">
              Awesome grocery store website template
            </p>

            <div className="flex items-center gap-2 ">
              <CiLocationOn className="text-2xl text-brand" />
              <p className="w-[250] text-secondary text-sm">
                Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United
                States
              </p>
            </div>

            <div className="flex items-center gap-2">
              <CiLocationOn className="text-2xl text-brand"/>
            <p className="text-secondary text-sm">Call Us:(+91) - 540-025-124553</p>
            </div>
            <div className="flex items-center gap-2">
              <CiLocationOn className="text-2xl text-brand"/>
            <p className="text-secondary text-sm">Hours:10:00 - 18:00, Mon - Sat</p>
            </div>
          </div>
          <div >
            <p className="font-normal text-base text-secondary">Company</p>
            <ul className="flex flex-col text-base text-primary gap-2 pt-4">
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link href="/">Delivery Information</Link>
              </li>
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
              <li>
                <Link href="/">Support Center</Link>
              </li>
              <li>
                <Link href="/">Careers</Link>
              </li>
            </ul>
          </div>
          <div className="">
              <p className="font-bold text-xl text-primary">Account</p>
            <ul className="flex flex-col text-base text-primary gap-2 pt-4">
              <li>
                <Link href="/">Sign In</Link>
              </li>
              <li>
                <Link href="/">View Cart</Link>
              </li>
              <li>
                <Link href="/">My Wishlist</Link>
              </li>
              <li>
                <Link href="/">Track My Order</Link>
              </li>
              <li>
                <Link href="/">Help Ticket</Link>
              </li>
              <li>
                <Link href="/">Shipping Details</Link>
              </li>
              <li>
                <Link href="/">Compare products</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl text-primary">Corporate</h3>
            <ul className="flex flex-col text-base text-secondary gap-2 pt-4">
              <li>
                <Link href="/">Become a Vendor</Link>
              </li>
              <li>
                <Link href="/">Affiliate Program</Link>
              </li>
              <li>
                <Link href="/">Farm Business</Link>
              </li>
              <li>
                <Link href="/">Farm Careers</Link>
              </li>
              <li>
                <Link href="/">Our Suppliers</Link>
              </li>
              <li>
                <Link href="/">Accessibility</Link>
              </li>
              <li>
                <Link href="/"> Promotions</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-bold text-xl text-primary">Popular</h2>
            <ul className="flex flex-col text-base text-secondary gap-2 pt-4">
              <li>
                <Link href="/">Milk & Flavoured Milk</Link>
              </li>
              <li>
                <Link href="/">Butter and Margarine</Link>
              </li>
              <li>
                <Link href="/">Eggs Substitutes</Link>
              </li>
              <li>
                <Link href="/">Marmalades</Link>
              </li>
              <li>
                <Link href="/">Sour Cream and Dips</Link>
              </li>
              <li>
                <Link href="/">Tea & Kombucha</Link>
              </li>
              <li>
                <Link href="/">Cheese</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-xl text-primary">Install App</h3>
            <p className="flex flex-col text-base text-secondary gap-2 pt-4">From App Store or Google Play</p>
            <div>
              <div>
                <Image
                  width={20}
                  height={20}
                  placeholder="blur"
                  layout="responsive"
                  src={appstoreImg}
                  alt="appstore"
                />
              </div>
              <div>
                <Image
                  width={50}
                  height={50}
                  placeholder="blur"
                  layout="responsive"
                  src={googleplayImg}
                  alt="googleplay"
                />
              </div>
              <p>Secured Payment Gateways</p>
              <div className="flex text-3xl items-center gap-2 pt-4">
                <FaCcVisa />
                <FaCcVisa />
                <FaCcMastercard />
                <FaCcMastercard />
                <FaCcMastercard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
