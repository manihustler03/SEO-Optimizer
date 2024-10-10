import React from "react";
import "./RankPageOP.css";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { SocialIcon } from "react-social-icons";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const RankPageOP = () => {
  const TickSvg = (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: "rgb(0 253 76)" }}
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </>
  );

  const InstagramSvg = (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="29"
        height="29"
        viewBox="0 0 102 102"
        id="instagram"
      >
        <defs>
          <radialGradient
            id="a"
            cx="6.601"
            cy="99.766"
            r="129.502"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".09" stop-color="#fa8f21"></stop>
            <stop offset=".78" stop-color="#d82d7e"></stop>
          </radialGradient>
          <radialGradient
            id="b"
            cx="70.652"
            cy="96.49"
            r="113.963"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset=".64" stop-color="#8c3aaa" stop-opacity="0"></stop>
            <stop offset="1" stop-color="#8c3aaa"></stop>
          </radialGradient>
        </defs>
        <path
          fill="url(#a)"
          d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
        ></path>
        <path
          fill="url(#b)"
          d="M25.865,101.639A34.341,34.341,0,0,1,14.312,99.5a19.329,19.329,0,0,1-7.154-4.653A19.181,19.181,0,0,1,2.5,87.694,34.341,34.341,0,0,1,.364,76.142C.061,69.584,0,67.617,0,51s.067-18.577.361-25.14A34.534,34.534,0,0,1,2.5,14.312,19.4,19.4,0,0,1,7.154,7.154,19.206,19.206,0,0,1,14.309,2.5,34.341,34.341,0,0,1,25.862.361C32.422.061,34.392,0,51,0s18.577.067,25.14.361A34.534,34.534,0,0,1,87.691,2.5a19.254,19.254,0,0,1,7.154,4.653A19.267,19.267,0,0,1,99.5,14.309a34.341,34.341,0,0,1,2.14,11.553c.3,6.563.361,8.528.361,25.14s-.061,18.577-.361,25.14A34.5,34.5,0,0,1,99.5,87.694,20.6,20.6,0,0,1,87.691,99.5a34.342,34.342,0,0,1-11.553,2.14c-6.557.3-8.528.361-25.14.361s-18.577-.058-25.134-.361"
        ></path>
        <path
          fill="#fff"
          d="M461.114,477.413a12.631,12.631,0,1,1,12.629,12.632,12.631,12.631,0,0,1-12.629-12.632m-6.829,0a19.458,19.458,0,1,0,19.458-19.458,19.457,19.457,0,0,0-19.458,19.458m35.139-20.229a4.547,4.547,0,1,0,4.549-4.545h0a4.549,4.549,0,0,0-4.547,4.545m-30.99,51.074a20.943,20.943,0,0,1-7.037-1.3,12.547,12.547,0,0,1-7.193-7.19,20.923,20.923,0,0,1-1.3-7.037c-.184-3.994-.22-5.194-.22-15.313s.04-11.316.22-15.314a21.082,21.082,0,0,1,1.3-7.037,12.54,12.54,0,0,1,7.193-7.193,20.924,20.924,0,0,1,7.037-1.3c3.994-.184,5.194-.22,15.309-.22s11.316.039,15.314.221a21.082,21.082,0,0,1,7.037,1.3,12.541,12.541,0,0,1,7.193,7.193,20.926,20.926,0,0,1,1.3,7.037c.184,4,.22,5.194.22,15.314s-.037,11.316-.22,15.314a21.023,21.023,0,0,1-1.3,7.037,12.547,12.547,0,0,1-7.193,7.19,20.925,20.925,0,0,1-7.037,1.3c-3.994.184-5.194.22-15.314.22s-11.316-.037-15.309-.22m-.314-68.509a27.786,27.786,0,0,0-9.2,1.76,19.373,19.373,0,0,0-11.083,11.083,27.794,27.794,0,0,0-1.76,9.2c-.187,4.04-.229,5.332-.229,15.623s.043,11.582.229,15.623a27.793,27.793,0,0,0,1.76,9.2,19.374,19.374,0,0,0,11.083,11.083,27.813,27.813,0,0,0,9.2,1.76c4.042.184,5.332.229,15.623.229s11.582-.043,15.623-.229a27.8,27.8,0,0,0,9.2-1.76,19.374,19.374,0,0,0,11.083-11.083,27.716,27.716,0,0,0,1.76-9.2c.184-4.043.226-5.332.226-15.623s-.043-11.582-.226-15.623a27.786,27.786,0,0,0-1.76-9.2,19.379,19.379,0,0,0-11.08-11.083,27.748,27.748,0,0,0-9.2-1.76c-4.041-.185-5.332-.229-15.621-.229s-11.583.043-15.626.229"
          transform="translate(-422.637 -426.196)"
        ></path>
      </svg>
    </>
  );
  return (
    <div className="rankpageop-main">
      <div className="rankpageop-controls">
        <div
          style={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <FaArrowLeftLong size={"25px"} />
          <h2>Back</h2>
        </div>
        <div
          style={{
            display: "flex",
            gap: "5px",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <h2>Logout</h2>
          <MdOutlineLogout size={"25px"} />
        </div>
      </div>
      <div className="rankpageop-webinfo">
        <div className="rankpageop-webname">
          <h2>Report of </h2>
          <p>Generated on </p>
        </div>
        <div className="rankpageop-webintro">
          <h2>Introduction</h2>
          <p>
            This SEO Tool Report is designed to enhance search engine rankings
            and boost online visibility. By offering valuable insights, it helps
            optimize the overall health and performance of your website. The
            report highlights essential features and benefits of SEO tools,
            including on-page SEO optimization, keyword analysis, site
            performance, social media engagement, and link management. It also
            addresses potential challenges and limitations while underscoring
            the transformative power of SEO tools in driving digital success and
            increasing your online presence.
          </p>
        </div>
        <div className="rankpageop-table-content">
          <h2>TABLE OF CONTENT</h2>
          <ul>
            <li>
              {TickSvg}
              <span> On Page SEO</span>
            </li>
            <li>
              {TickSvg}
              <span>Social Media Report</span>
            </li>
            <li>
              {TickSvg}
              <span>Keyword Analysis</span>
            </li>
            <li>
              {TickSvg}
              <span>Links</span>
            </li>
            <li>
              {TickSvg}
              <span>Performance</span>
            </li>
          </ul>
        </div>
        <div className="rankpageop-onpage-result">
          <h2>ON PAGE SEO RESULT</h2>
          <div className="title-tag ">
            <h3>TITLE TAG</h3>
            <p>Title:</p>
            <p>Length:</p>
          </div>
          <div className="meta-tag ">
            <h3>META TAG</h3>
            <p>Description:</p>
            <p>Length:</p>
          </div>
          <div className="header-count ">
            <h3>HEADER TAGS COUNT</h3>
            <p>Count : </p>
          </div>
          <div className="h1-tag">
            <h3>H1 TAG CONTENT</h3>
          </div>
          <div className="amount-content">
            <h3>AMOUNT OF CONTENT</h3>
          </div>
          <div className="alt-count">
            <h3>ALT COUNT TAG</h3>
          </div>
          <div className="ssl-layer">
            <h3>SECURE SOCKET LAYER(SSL)</h3>
          </div>
          <div className="ssl-info">
            <h3>SSL CERTIFICATE INFORMATION</h3>
            <p>Expiration Date:</p>
          </div>
          <div className="rotots-txt">
            <h3>ROBOTS TXT</h3>
          </div>
          <div className="site-map">
            <h3>SITE MAP</h3>
            <p> Sitemap count : </p>
          </div>
          <div className="analytics">
            <h3>ANALYTICS</h3>
            <p> Sitemap count : </p>
          </div>
        </div>
        <div className="keyword-analysis">
          <h2>KEYWORD ANALYSIS</h2>
        </div>
        <div className="performance">
          <h2>PERFORMANCE</h2>
          <div>
            <h3>PAGE SPEED</h3>
            <p>Your page loads in seconds</p>
          </div>
          <div>
            <h3>PAGE SIZE</h3>
            <p>The page size is appoximately MB</p>
          </div>
          <div>
            <h3>RESOURCES</h3>
          </div>
        </div>
        <div className="social-media-report">
          <h2> SOCIAL MEDIA REPORT</h2>
          <div className="grid">
            <div>
              <SocialIcon
                url="www.facebook.com"
                style={{ height: 30, width: 30 }}
              />
              <h3>FACEBOOK</h3>
            </div>
            <div>
              {InstagramSvg}
              <h3>INSTAGRAM</h3>
            </div>
            <div>
              <SocialIcon
                url="www.twitter.com"
                style={{ height: 30, width: 30 }}
              />
              <h3>TWITTER</h3>
            </div>
            <div>
              <SocialIcon
                url="www.linkedin.com"
                bgColor="#0077B5"
                style={{ height: 30, width: 30 }}
              />
              <h3>LINKEDIN</h3>
            </div>
            <div>
              <SocialIcon
                url="www.youtube.com"
                bgColor="#FF0000"
                style={{ height: 30, width: 30 }}
              />
              <h3>YOUTUBE</h3>
            </div>
          </div>
        </div>
        <div className="links">
          <h2>LINKS</h2>
          <p>Total Links</p>
          <p>Total Internal Links</p>
          <p>Total External Links</p>
          <p>Duplicate Links</p>
        </div>
      </div>
      <div className="rankpageop-download">
        <button>Download</button>
        <form>
          <label htmlFor="">Send To Email</label>
          <input type="text" />
          <button><MdOutlineArrowRightAlt size={'30px'} className="send-email"/></button>
        </form>
      </div>
    </div>
  );
};

export default RankPageOP;
