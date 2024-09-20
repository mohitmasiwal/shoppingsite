import React from "react";

function Footer() {
  return (
    <div className="bg-gray-800 text-white py-10">
      <footer className="text-center">
        <h1 className="text-lg font-bold mb-6 cursor-pointer hover:text-gray-400">
          Back to top
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-10">
          <div>
            <h2 className="text-xl font-semibold mb-2">Get to Know Us</h2>
            <ul className="space-y-1">
              <li>Careers</li>
              <li>Blog</li>
              <li>About Rentify</li>
              <li>Investor Relations</li>
              <li>Rentify Devices</li>
              <li>Rentify Science</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Make Money with Us</h2>
            <ul className="space-y-1">
              <li>Sell products on Rentify</li>
              <li>Sell on Rentify Business</li>
              <li>Sell apps on Rentify</li>
              <li>Become an Affiliate</li>
              <li>Advertise Your Products</li>
              <li>Self-Publish with Us</li>
              <li>Host an Rentify Hub</li>
              <li className="cursor-pointer hover:text-gray-400">
                See More Make Money with Us
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Rentify Payment Products</h2>
            <ul className="space-y-1">
              <li>Rentify Business Card</li>
              <li>Shop with Points</li>
              <li>Reload Your Balance</li>
              <li>Rentify Currency Converter</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">Let Us Help You</h2>
            <ul className="space-y-1">
              <li>Rentify and COVID-19</li>
              <li>Your Account</li>
              <li>Your Orders</li>
              <li>Shipping Rates & Policies</li>
              <li>Returns & Replacements</li>
              <li>Manage Your Content and Devices</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
      </footer>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        <p className="mb-2">
          Conditions of Use | Privacy Notice | Consumer Health Data | Privacy Disclosure | Your Ads Privacy Choices
        </p>
        <p>© 1996-2024, Rentify.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
}

export default Footer;
