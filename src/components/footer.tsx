"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";


const Footer: React.FC = () => {

  return (
    <footer className="bg-black text-white xl:py-12 pt-[89px] xl:pt-32  overflow-hidden   ">
      <div className=" flex flex-col items-center justify-center px-8">
        <div
          className="max-w-4xl w-full text-start md:text-center mx-auto"
        >
          {/* Main Heading */}
          <h1 className="fade-up text-[32px] md:text-[36px] xl:text-[64px] 2xl:text-[96px] mb-[19px] xl:mb-[60px] font-[300] flex items-start md:items-center justify-center flex-col text-[#E2E2E2] gap-[19px] 2xl:gap-[60px]">
            Reserve a LumynXR
            <svg className="hidden md:block xl:hidden" xmlns="http://www.w3.org/2000/svg" width="27" height="2" viewBox="0 0 27 2" fill="none">
              <path d="M1 1C9.33333 1 26 1 26 1" stroke="#C5C5C5" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="6"
              viewBox="0 0 52 6"
              fill="none"
              className="hidden xl:block"
            >
              <path
                d="M3 3C18.3333 3 49 3 49 3"
                stroke="#C5C5C5"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </h1>

          {/* Description */}
          <div className="fade-up mx-auto mb-[60px]">
            <p className="hidden md:block text-[14px] md:text-[20px] xl:text-[20px] 2xl:text-[24px] font-[150] text-[#C5C5C5] md:leading-[32px] xl:tracking-[0.04px]">
              We are ready for the enterprise market and actively seeking close
              collaborations <br /> to bring our headset to your teams. For more
              details or to reserve a LumynXR, <br /> please contact our sales
              team.
            </p>
            <p className="w-[346px] md:hidden text-[14px] xl:text-[20px] 2xl:text-[24px] font-[200] text-[#C5C5C5] xl:leading-[32px] xl:tracking-[0.04px]">
              We are ready for the enterprise market and actively seeking close
              collaborations  to bring our headset to your teams. For more
              details or to reserve a LumynXR,  please contact our sales
              team.
            </p>
          </div>

          {/* CTA Button */}
          <div onClick={() => window.open("https://calendly.com/oneimmersive/30min?month=2025-07", "_blank")} className="fade-up w-full flex items-center justify-center  ">
            <div className="card w-fit  ">
              <div className={`box-base   box h-12 w-[200px] `}>
                <div className="glass  h-12 w-[200px]"></div>
                <div className={clsx(
                  "rounded-[51px] font-[600]",
                  // Desktop Large
                  "px-[24px] py-[14px]",
                  // Desktop Medium
                  "2xl:px-[22px] 2xl:py-[12px]",
                  // Desktop Small/Laptop Large
                  "xl:px-[20px] xl:py-[10px]",
                  "bg-gradient-to-b from-[rgba(221,221,221,0.13)] to-[rgba(67,67,67,0.13)] h-12 w-[200px] flex items-center justify-center "
                )}>
                  <h1 className={clsx(
                    "mt-[1px]",
                    // Desktop Large
                    "text-base",
                    // Desktop Medium
                    "2xl:text-[15px]",
                    // Desktop Small/Laptop Large
                    "xl:text-sm"
                  )}>Talk to Sales</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mb-[78px] xl:mb-[242px] w-full mt-[123px] xl:mt-[38px] 2xl:mt-[160px]">
        <Image
          src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/Footer.png`}
          alt="LumynXR Logo"
          width={1630}
          height={861}
          className="w-[110vw] 2xl:w-[140vw]  h-auto max-w-none"
          priority
        />
      </div>


      <div className="w-full  md:px-[10vw] ">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:mb-7 lg:mb-5  mb-[62px] xl:mb-[70px] 2xl:mb-[62px]">
          {/* Left Section - Logos */}
          <div className="flex flex-col space-y-6 items-center  w-full xl:w-[379px] 2xl:w-[487px] ">
            {/* LumynXR Logo */}
            <div className="flex items-center  w-[356px] md:w-[203px] h-[77px] xl:w-[379px] xl:h-[61px]  2xl:w-[487px] 2xl:h-[79px]">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 487 79"
                fill="none"              >
                <path
                  d="M14.9872 45.6538H59.9494V58.2107H0V0H14.9872V45.6538ZM117.785 9.23031H132.023V58.2101H117.785V49.6446C110.79 55.1333 101.132 59.0414 89.2255 59.0414C76.1531 59.0414 63.9131 54.3846 63.747 36.3391L63.9138 9.22969H78.2353V30.9336C78.2353 41.3282 81.7322 46.7337 93.4726 46.7337C103.048 46.7337 113.373 41.8272 117.786 36.6715L117.785 9.23031ZM223.815 8.39898C234.805 8.39898 244.797 13.0558 244.964 30.7683L244.797 58.2107H230.559V36.5068C230.559 26.1121 228.81 20.7067 218.652 20.7067C211.158 20.7067 203.831 24.2824 199.502 28.1911C199.585 29.0224 199.585 29.8543 199.585 30.7689L199.419 58.2113H185.18V36.5074C185.18 26.1128 183.431 20.7073 173.273 20.7073C165.03 20.7073 157.037 24.9484 152.957 29.3554V58.2113H138.719V9.23031H152.957V17.2136C158.286 12.9725 166.28 8.39898 178.436 8.39898C185.847 8.39898 192.84 10.5612 196.587 17.3801C202.915 12.6401 211.658 8.39898 223.815 8.39898ZM300.032 9.23031H315.769L282.63 79H266.893L276.801 58.2107H269.474L244.079 9.23092H259.899L280.882 49.6458L300.032 9.23031ZM362.109 8.39898C375.182 8.39898 387.422 13.0558 387.588 31.1013L387.421 58.2107H373.099V36.5068C373.099 26.1121 369.603 20.7067 357.862 20.7067C348.287 20.7067 337.962 25.6132 333.549 30.7689V58.2113H319.311V9.23031H333.549V17.7958C340.543 12.3071 350.203 8.39898 362.109 8.39898ZM436.905 0.831326L420.252 28.3563L437.987 58.2101H434.074L416.506 28.3563L432.991 0.831326H436.905ZM398.936 0.831326L415.505 28.3563L397.937 58.2101H394.024L411.676 28.3563L395.106 0.831326H398.936ZM419.003 26.8602V29.6878H413.507V26.8602H419.003ZM467.848 0.166512C472.012 0.166512 475.342 0.637679 477.84 1.58001C480.338 2.46684 482.142 4.10236 483.252 6.48656C484.363 8.81526 484.918 12.1134 484.918 16.3823C484.918 19.7088 484.557 22.4526 483.835 24.6148C483.113 26.7215 481.976 28.3292 480.422 29.4381C478.868 30.4914 476.842 31.1846 474.344 31.517V31.9327C475.343 32.1547 476.231 32.6536 477.008 33.4294C477.841 34.2058 478.59 35.1482 479.257 36.257C479.923 37.3104 480.478 38.5302 480.922 39.916L487 58.2107H483.253L477.424 40.1657C476.537 37.5046 475.343 35.6477 473.844 34.5944C472.401 33.4855 470.597 32.9311 468.432 32.9311C465.212 32.9311 462.326 32.9034 459.773 32.8479C457.275 32.7923 455.193 32.7368 453.528 32.6813C451.863 32.6258 450.669 32.5703 449.948 32.5148L450.197 29.8537H467.849C471.18 29.7982 473.816 29.3826 475.759 28.6061C477.757 27.8297 479.2 26.4994 480.089 24.6148C480.977 22.6746 481.421 19.958 481.421 16.4656C481.421 12.9731 480.977 10.2843 480.089 8.39898C479.201 6.45881 477.757 5.1002 475.759 4.32437C473.816 3.54794 471.18 3.16002 467.849 3.16002C463.519 3.16002 459.772 3.18778 456.608 3.24328C453.5 3.29878 451.39 3.35429 450.28 3.40979L449.114 0.831942C451.112 0.609927 452.972 0.471784 454.693 0.41628C456.469 0.305272 458.384 0.249768 460.438 0.249768C462.492 0.194264 464.962 0.166512 467.848 0.166512ZM452.528 0.831326V58.2101H449.115L449.114 0.831942L452.528 0.831326Z"
                  fill="#F2F2F2"
                />
              </svg>
            </div>

            {/* Partner Logos */}
            <div className="flex items-center justify-between mt-4 mb-16 xl:mt-[62px] xl:mb-[62px] w-[253px] md:w-[203px] xl:w-[379px] 2xl:w-[487px] ">
              {/* Logo 1 inside pill */}
              <div className="relative w-[77px] md:w-[55px] xl:w-[132px] xl:h-[26px] 2xl:w-[166px] 2xl:h-[32px] h-auto">
                <Image
                  src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/oneimmersive.png`}
                  alt="Mailabs logo"
                  width={110} // Replace with actual image resolution width
                  height={40} // Replace with actual image resolution height
                  className="object-contain"
                />
              </div>

              {/* Divider line */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2 54"
                className="w-[1.5px] h-[54px] xl:h-[54px] md:h-[18px] "
                fill="none"
              >
                <path
                  d="M1 1V53"
                  stroke="#868686"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              {/* Second partner logo */}
              <div className="relative w-[53px] md:w-[38px] h-auto xl:w-[83px] xl:h-[26px] 2xl:w-[100px] 2xl:h-[32px]">
                <Image
                  src={`${process.env.NEXT_PUBLIC_CDN_URL}/images/mailabs.png`}
                  alt="Mailabs logo"
                  width={110} // Replace with actual image resolution width
                  height={40} // Replace with actual image resolution height
                  className="object-contain"
                />
              </div>

            </div>

          </div>

          {/* Center Section - Navigation */}
          <div className="hidden md:flex md:flex-col space-y-4 ml-[50px] xl:ml-[120px]">
            <nav className="flex flex-col h-[225px] md:border-l-[0.5px] xl:pl-16 md:pl-8  border-[#868686]  justify-between font-[100] md:font-[200] xl:font-[400] text-[10px] md:text-[12px] xl:text-[20px]  2xl:text-[24px] text-[#F2F2F2]">
              <Link
                target="_blank"
                href="https://calendly.com/oneimmersive/30min?month=2025-07"
                className=" hover:text-white transition-colors duration-200"
              >
                Talk to Sales
              </Link>
              <Link
                target="_blank"

                href="https://www.oneimmersive.us/"
                className=" hover:text-white transition-colors duration-200"
              >
                Company
              </Link>
              {/* <Link
                href="/faq"
                className=" hover:text-white transition-colors duration-200"
              >
                FAQ
              </Link> */}
              <Link
                href="#"
                onClick={(e) => e.preventDefault()}
                className=" hover:text-white transition-colors duration-200"
              >
                Media Centre
              </Link>
            </nav>
          </div>

          {/* Right Section - Contact Info */}
          <div className=" hidden md:flex  flex-col space-y-6 h-[225px] font-['DM_Sans'] font-style-normal tr text-[#F2F2F2]/80 text-[12px] xl:text-[22px]  justify-between text-right font-[200] xl:font-light">
            {/* US Address */}
            <div className=" ">
              <p>1209 Orange Street, Wilmington,</p>
              <p>New Castle, DE 19801</p>
            </div>

            {/* India Address */}
            <div className=" ">
              <p>Cloud City, Vindhya c4, CIE</p>
              <p>IIITH Campus Gachibowli,</p>
              <p>Hyderabad - 500 032</p>
              <p>Telangana, India</p>
            </div>
          </div>

          <div className="md:hidden  flex w-full px-[28px] justify-between font-[100]  text-[10px]  text-[#F2F2F2]">

            <nav className="flex flex-col h-full justify-between  ">
              <Link
                target="_blank"
                href="https://calendly.com/oneimmersive/30min?month=2025-07"
                className=" hover:text-white transition-colors duration-200"
              >
                Talk to Sales
              </Link>
              <Link
                target="_blank"
                href="https://www.oneimmersive.us/"
                className=" hover:text-white transition-colors duration-200"
              >
                Company
              </Link>
              {/* <Link
                href="/faq"
                className=" hover:text-white transition-colors duration-200"
              >
                FAQ
              </Link> */}
              <Link
                href="#"
                onClick={(e) => e.preventDefault()}
                className=" hover:text-white transition-colors duration-200"
              >
                Media Centre
              </Link>
            </nav>

            <nav className="flex flex-col  h-full justify-between ">
              <Link
                href="https://www.linkedin.com/company/one-immersive/"
                className=" hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </Link>
              <Link
                href="#"
                onClick={(e) => e.preventDefault()}
                className=" hover:text-white transition-colors duration-200"
              >
                Youtube
              </Link>
              <Link
                href="#"
                onClick={(e) => e.preventDefault()}
                className=" hover:text-white transition-colors duration-200"
              >
                Instagram
              </Link>
              <Link
                href="#"
                onClick={(e) => e.preventDefault()}
                className=" hover:text-white transition-colors duration-200"
              >
                X (Twitter)
              </Link>
            </nav>

            <div className="flex flex-col text-right gap-[13px]">
              <div className=" ">
                <p>1209 Orange Street, Wilmington,</p>
                <p>New Castle, DE 19801</p>
              </div>
              {/* India Address */}
              <div className=" ">
                <p>Cloud City, Vindhya c4, CIE</p>
                <p>IIITH Campus Gachibowli,</p>
                <p>Hyderabad - 500 032</p>
                <p>Telangana, India</p>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:hidden w-full flex items-center justify-center h-3 px-[28px]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 358 3" fill="none">
            <path d="M1 2L357 1" stroke="#868686" strokeLinecap="round" />
          </svg>
        </div>

        {/* Bottom Section */}
        <div className="xl:border-t-[0.5px] border-[#868686] pt-4 xl:pt-8 flex items-center justify-center mx-[28px] xl:mx-0">
          <div className="flex w-full  items-center md:justify-between space-y-4 mb-[20px] md:space-y-0">
            {/* Left: Copyright + Links */}
            <div className="flex w-full  items-center justify-between text-[#F2F2F2] text-[6px] xl:text-[16px] xl:tracking-[-0.198px] font-[100] xl:font-[300]  md:space-y-0 md:space-x-8">
              <span className="">
                © 2024 One Immersive. All rights reserved.
              </span>
              <Link
                href="#"
                onClick={(e) => e.preventDefault()}
                className="xl:pl-[62px] hover:text-white transition-colors duration-200 xl:border-x-[0.5px] xl:pr-[62px] border-[#868686]"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                onClick={(e) => e.preventDefault()}
                className="hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
              {/* Right: Social Icons */}
              <div className="hidden md:flex xl:hidden">
                <svg
                  onClick={() => window.open('https://www.linkedin.com/company/oneimmersive/', '_blank')}
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="13"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M0 2.32323C0 1.64982 0.225232 1.09426 0.675676 0.656566C1.12612 0.218848 1.71172 0 2.43243 0C3.14029 0 3.71299 0.215475 4.15058 0.646465C4.60102 1.09091 4.82625 1.67002 4.82625 2.38384C4.82625 3.0303 4.60747 3.56901 4.16988 4C3.71944 4.44444 3.12741 4.66667 2.39382 4.66667H2.37452C1.66666 4.66667 1.09396 4.44444 0.656371 4C0.218784 3.55556 0 2.99663 0 2.32323ZM0.250965 20V6.50505H4.53668V20H0.250965ZM6.9112 20H11.1969V12.4646C11.1969 11.9933 11.2484 11.6296 11.3514 11.3737C11.5315 10.9158 11.805 10.5286 12.1718 10.2121C12.5386 9.89562 12.9987 9.73737 13.5521 9.73737C14.9936 9.73737 15.7143 10.7542 15.7143 12.7879V20H20V12.2626C20 10.2694 19.5496 8.75758 18.6486 7.72727C17.7477 6.69697 16.5573 6.18182 15.0772 6.18182C13.417 6.18182 12.1236 6.92929 11.1969 8.42424V8.46465H11.1776L11.1969 8.42424V6.50505H6.9112C6.93693 6.93602 6.94981 8.27608 6.94981 10.5253C6.94981 12.7744 6.93693 15.9326 6.9112 20Z"
                    fill="#F2F2F2"
                  />
                </svg>
                <svg
                  className="ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="13"
                  viewBox="50 0 20 20"
                  fill="none"
                >
                  <path
                    d="M58.51 3.32003H60.39V0.14003C59.4798 0.045377 58.5652 -0.00135428 57.65 2.98641e-05C54.93 2.98641e-05 53.07 1.66003 53.07 4.70003V7.32003H50V10.88H53.07V20H56.75V10.88H59.81L60.27 7.32003H56.75V5.05003C56.75 4.00003 57.03 3.32003 58.51 3.32003Z"
                    fill="#F2F2F2"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="13"
                  viewBox="90 0 20 20"
                  fill="none"
                >
                  <path
                    d="M105.73 3.46C105.492 3.46 105.26 3.53038 105.063 3.66224C104.866 3.79409 104.712 3.98151 104.621 4.20078C104.53 4.42005 104.506 4.66133 104.553 4.89411C104.599 5.12689 104.713 5.34071 104.881 5.50853C105.049 5.67635 105.263 5.79064 105.496 5.83694C105.728 5.88324 105.97 5.85948 106.189 5.76866C106.408 5.67783 106.596 5.52402 106.727 5.32668C106.859 5.12935 106.93 4.89734 106.93 4.66C106.93 4.34174 106.803 4.03652 106.578 3.81147C106.353 3.58643 106.048 3.46 105.73 3.46ZM110.33 5.88C110.31 5.0503 110.155 4.2294 109.87 3.45C109.615 2.78313 109.22 2.17928 108.71 1.68C108.214 1.16743 107.609 0.774176 106.94 0.53C106.162 0.236161 105.34 0.07721 104.51 0.0599999C103.45 -5.58794e-08 103.11 0 100.39 0C97.6696 0 97.3296 -5.58794e-08 96.2696 0.0599999C95.4388 0.07721 94.617 0.236161 93.8396 0.53C93.1713 0.776649 92.5666 1.16956 92.0696 1.68C91.5571 2.17518 91.1638 2.78044 90.9196 3.45C90.6258 4.22734 90.4669 5.04915 90.4496 5.88C90.3896 6.94 90.3896 7.28 90.3896 10C90.3896 12.72 90.3896 13.06 90.4496 14.12C90.4669 14.9508 90.6258 15.7727 90.9196 16.55C91.1638 17.2196 91.5571 17.8248 92.0696 18.32C92.5666 18.8304 93.1713 19.2234 93.8396 19.47C94.617 19.7638 95.4388 19.9228 96.2696 19.94C97.3296 20 97.6696 20 100.39 20C103.11 20 103.45 20 104.51 19.94C105.34 19.9228 106.162 19.7638 106.94 19.47C107.609 19.2258 108.214 18.8326 108.71 18.32C109.222 17.8226 109.618 17.2182 109.87 16.55C110.155 15.7706 110.31 14.9497 110.33 14.12C110.33 13.06 110.39 12.72 110.39 10C110.39 7.28 110.39 6.94 110.33 5.88ZM108.53 14C108.522 14.6348 108.407 15.2637 108.19 15.86C108.03 16.2952 107.774 16.6884 107.44 17.01C107.115 17.3405 106.723 17.5964 106.29 17.76C105.693 17.9778 105.064 18.0927 104.43 18.1C103.43 18.15 103.06 18.16 100.43 18.16C97.7996 18.16 97.4296 18.16 96.4296 18.1C95.7705 18.1123 95.1142 18.0109 94.4896 17.8C94.0754 17.6281 93.701 17.3728 93.3896 17.05C93.0577 16.7287 92.8045 16.3352 92.6496 15.9C92.4055 15.2952 92.2701 14.6519 92.2496 14C92.2496 13 92.1896 12.63 92.1896 10C92.1896 7.37 92.1896 7 92.2496 6C92.2541 5.35106 92.3726 4.70795 92.5996 4.1C92.7757 3.67791 93.0459 3.30166 93.3896 3C93.6935 2.65617 94.0689 2.3831 94.4896 2.2C95.0992 1.98004 95.7416 1.86508 96.3896 1.86C97.3896 1.86 97.7596 1.8 100.39 1.8C103.02 1.8 103.39 1.8 104.39 1.86C105.024 1.86728 105.653 1.98225 106.25 2.2C106.704 2.36865 107.112 2.64285 107.44 3C107.767 3.30718 108.023 3.68273 108.19 4.1C108.412 4.70893 108.527 5.35178 108.53 6C108.58 7 108.59 7.37 108.59 10C108.59 12.63 108.58 13 108.53 14ZM100.39 4.87C99.3755 4.87198 98.3846 5.17453 97.5423 5.73942C96.7 6.30431 96.044 7.1062 95.6573 8.04375C95.2705 8.98131 95.1704 10.0125 95.3694 11.0069C95.5685 12.0014 96.0579 12.9145 96.7757 13.631C97.4936 14.3474 98.4077 14.835 99.4025 15.0321C100.397 15.2293 101.428 15.1271 102.365 14.7385C103.302 14.35 104.103 13.6924 104.666 12.849C105.229 12.0056 105.53 11.0142 105.53 10C105.531 9.3251 105.399 8.65661 105.141 8.03296C104.883 7.40931 104.504 6.84281 104.027 6.36605C103.549 5.88929 102.982 5.51168 102.357 5.25493C101.733 4.99818 101.065 4.86736 100.39 4.87ZM100.39 13.33C99.731 13.33 99.0872 13.1347 98.5396 12.7688C97.992 12.4029 97.5652 11.8828 97.3131 11.2743C97.0611 10.6659 96.9951 9.99631 97.1236 9.35035C97.2521 8.70439 97.5693 8.11104 98.035 7.64533C98.5007 7.17963 99.094 6.86247 99.74 6.73398C100.386 6.6055 101.056 6.67144 101.664 6.92348C102.272 7.17552 102.793 7.60234 103.158 8.14995C103.524 8.69757 103.72 9.34139 103.72 10C103.72 10.4373 103.634 10.8703 103.466 11.2743C103.299 11.6784 103.054 12.0454 102.744 12.3547C102.435 12.6639 102.068 12.9092 101.664 13.0765C101.26 13.2439 100.827 13.33 100.39 13.33Z"
                    fill="#F2F2F2"
                  />
                </svg>
                <svg
                  className="ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="13"
                  viewBox="140 0 30 20"
                  fill="none"
                >
                  <path
                    d="M168.383 7.04863C168.446 5.198 168.048 3.36122 167.226 1.70884C166.668 1.03083 165.894 0.573275 165.038 0.415913C161.499 0.0894815 157.945 -0.0443119 154.392 0.0151056C150.852 -0.0470087 147.311 0.0824673 143.784 0.402984C143.087 0.53191 142.442 0.864354 141.927 1.35975C140.782 2.43288 140.655 4.26884 140.528 5.82035C140.344 8.60992 140.344 11.4089 140.528 14.1985C140.565 15.0718 140.693 15.9386 140.91 16.7844C141.063 17.4374 141.373 18.0415 141.813 18.5427C142.331 19.0644 142.991 19.4157 143.708 19.5512C146.45 19.8953 149.213 20.0379 151.975 19.9779C156.427 20.0425 160.332 19.9779 164.949 19.6159C165.683 19.4887 166.362 19.1369 166.895 18.6074C167.251 18.2453 167.517 17.802 167.671 17.3145C168.126 15.8956 168.349 14.4107 168.332 12.9185C168.383 12.1945 168.383 7.82438 168.383 7.04863ZM151.517 13.6943V5.69105L159.047 9.71206C156.936 10.9016 154.15 12.2462 151.517 13.6943Z"
                    fill="#F2F2F2"
                  />
                </svg>
              </div>
              <div className="hidden xl:flex space-x-4">
                <svg
                  onClick={() => window.open('https://www.linkedin.com/company/one-immersive/', '_blank')}
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  className="cursor-pointer"
                >
                  <path
                    d="M0 2.32323C0 1.64982 0.225232 1.09426 0.675676 0.656566C1.12612 0.218848 1.71172 0 2.43243 0C3.14029 0 3.71299 0.215475 4.15058 0.646465C4.60102 1.09091 4.82625 1.67002 4.82625 2.38384C4.82625 3.0303 4.60747 3.56901 4.16988 4C3.71944 4.44444 3.12741 4.66667 2.39382 4.66667H2.37452C1.66666 4.66667 1.09396 4.44444 0.656371 4C0.218784 3.55556 0 2.99663 0 2.32323ZM0.250965 20V6.50505H4.53668V20H0.250965ZM6.9112 20H11.1969V12.4646C11.1969 11.9933 11.2484 11.6296 11.3514 11.3737C11.5315 10.9158 11.805 10.5286 12.1718 10.2121C12.5386 9.89562 12.9987 9.73737 13.5521 9.73737C14.9936 9.73737 15.7143 10.7542 15.7143 12.7879V20H20V12.2626C20 10.2694 19.5496 8.75758 18.6486 7.72727C17.7477 6.69697 16.5573 6.18182 15.0772 6.18182C13.417 6.18182 12.1236 6.92929 11.1969 8.42424V8.46465H11.1776L11.1969 8.42424V6.50505H6.9112C6.93693 6.93602 6.94981 8.27608 6.94981 10.5253C6.94981 12.7744 6.93693 15.9326 6.9112 20Z"
                    fill="#F2F2F2"
                  />
                </svg>
                <svg
                  className="ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="50 0 20 20"
                  fill="none"
                >
                  <path
                    d="M58.51 3.32003H60.39V0.14003C59.4798 0.045377 58.5652 -0.00135428 57.65 2.98641e-05C54.93 2.98641e-05 53.07 1.66003 53.07 4.70003V7.32003H50V10.88H53.07V20H56.75V10.88H59.81L60.27 7.32003H56.75V5.05003C56.75 4.00003 57.03 3.32003 58.51 3.32003Z"
                    fill="#F2F2F2"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="90 0 20 20"
                  fill="none"
                >
                  <path
                    d="M105.73 3.46C105.492 3.46 105.26 3.53038 105.063 3.66224C104.866 3.79409 104.712 3.98151 104.621 4.20078C104.53 4.42005 104.506 4.66133 104.553 4.89411C104.599 5.12689 104.713 5.34071 104.881 5.50853C105.049 5.67635 105.263 5.79064 105.496 5.83694C105.728 5.88324 105.97 5.85948 106.189 5.76866C106.408 5.67783 106.596 5.52402 106.727 5.32668C106.859 5.12935 106.93 4.89734 106.93 4.66C106.93 4.34174 106.803 4.03652 106.578 3.81147C106.353 3.58643 106.048 3.46 105.73 3.46ZM110.33 5.88C110.31 5.0503 110.155 4.2294 109.87 3.45C109.615 2.78313 109.22 2.17928 108.71 1.68C108.214 1.16743 107.609 0.774176 106.94 0.53C106.162 0.236161 105.34 0.07721 104.51 0.0599999C103.45 -5.58794e-08 103.11 0 100.39 0C97.6696 0 97.3296 -5.58794e-08 96.2696 0.0599999C95.4388 0.07721 94.617 0.236161 93.8396 0.53C93.1713 0.776649 92.5666 1.16956 92.0696 1.68C91.5571 2.17518 91.1638 2.78044 90.9196 3.45C90.6258 4.22734 90.4669 5.04915 90.4496 5.88C90.3896 6.94 90.3896 7.28 90.3896 10C90.3896 12.72 90.3896 13.06 90.4496 14.12C90.4669 14.9508 90.6258 15.7727 90.9196 16.55C91.1638 17.2196 91.5571 17.8248 92.0696 18.32C92.5666 18.8304 93.1713 19.2234 93.8396 19.47C94.617 19.7638 95.4388 19.9228 96.2696 19.94C97.3296 20 97.6696 20 100.39 20C103.11 20 103.45 20 104.51 19.94C105.34 19.9228 106.162 19.7638 106.94 19.47C107.609 19.2258 108.214 18.8326 108.71 18.32C109.222 17.8226 109.618 17.2182 109.87 16.55C110.155 15.7706 110.31 14.9497 110.33 14.12C110.33 13.06 110.39 12.72 110.39 10C110.39 7.28 110.39 6.94 110.33 5.88ZM108.53 14C108.522 14.6348 108.407 15.2637 108.19 15.86C108.03 16.2952 107.774 16.6884 107.44 17.01C107.115 17.3405 106.723 17.5964 106.29 17.76C105.693 17.9778 105.064 18.0927 104.43 18.1C103.43 18.15 103.06 18.16 100.43 18.16C97.7996 18.16 97.4296 18.16 96.4296 18.1C95.7705 18.1123 95.1142 18.0109 94.4896 17.8C94.0754 17.6281 93.701 17.3728 93.3896 17.05C93.0577 16.7287 92.8045 16.3352 92.6496 15.9C92.4055 15.2952 92.2701 14.6519 92.2496 14C92.2496 13 92.1896 12.63 92.1896 10C92.1896 7.37 92.1896 7 92.2496 6C92.2541 5.35106 92.3726 4.70795 92.5996 4.1C92.7757 3.67791 93.0459 3.30166 93.3896 3C93.6935 2.65617 94.0689 2.3831 94.4896 2.2C95.0992 1.98004 95.7416 1.86508 96.3896 1.86C97.3896 1.86 97.7596 1.8 100.39 1.8C103.02 1.8 103.39 1.8 104.39 1.86C105.024 1.86728 105.653 1.98225 106.25 2.2C106.704 2.36865 107.112 2.64285 107.44 3C107.767 3.30718 108.023 3.68273 108.19 4.1C108.412 4.70893 108.527 5.35178 108.53 6C108.58 7 108.59 7.37 108.59 10C108.59 12.63 108.58 13 108.53 14ZM100.39 4.87C99.3755 4.87198 98.3846 5.17453 97.5423 5.73942C96.7 6.30431 96.044 7.1062 95.6573 8.04375C95.2705 8.98131 95.1704 10.0125 95.3694 11.0069C95.5685 12.0014 96.0579 12.9145 96.7757 13.631C97.4936 14.3474 98.4077 14.835 99.4025 15.0321C100.397 15.2293 101.428 15.1271 102.365 14.7385C103.302 14.35 104.103 13.6924 104.666 12.849C105.229 12.0056 105.53 11.0142 105.53 10C105.531 9.3251 105.399 8.65661 105.141 8.03296C104.883 7.40931 104.504 6.84281 104.027 6.36605C103.549 5.88929 102.982 5.51168 102.357 5.25493C101.733 4.99818 101.065 4.86736 100.39 4.87ZM100.39 13.33C99.731 13.33 99.0872 13.1347 98.5396 12.7688C97.992 12.4029 97.5652 11.8828 97.3131 11.2743C97.0611 10.6659 96.9951 9.99631 97.1236 9.35035C97.2521 8.70439 97.5693 8.11104 98.035 7.64533C98.5007 7.17963 99.094 6.86247 99.74 6.73398C100.386 6.6055 101.056 6.67144 101.664 6.92348C102.272 7.17552 102.793 7.60234 103.158 8.14995C103.524 8.69757 103.72 9.34139 103.72 10C103.72 10.4373 103.634 10.8703 103.466 11.2743C103.299 11.6784 103.054 12.0454 102.744 12.3547C102.435 12.6639 102.068 12.9092 101.664 13.0765C101.26 13.2439 100.827 13.33 100.39 13.33Z"
                    fill="#F2F2F2"
                  />
                </svg>
                <svg
                  className="ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="20"
                  viewBox="140 0 30 20"
                  fill="none"
                >
                  <path
                    d="M168.383 7.04863C168.446 5.198 168.048 3.36122 167.226 1.70884C166.668 1.03083 165.894 0.573275 165.038 0.415913C161.499 0.0894815 157.945 -0.0443119 154.392 0.0151056C150.852 -0.0470087 147.311 0.0824673 143.784 0.402984C143.087 0.53191 142.442 0.864354 141.927 1.35975C140.782 2.43288 140.655 4.26884 140.528 5.82035C140.344 8.60992 140.344 11.4089 140.528 14.1985C140.565 15.0718 140.693 15.9386 140.91 16.7844C141.063 17.4374 141.373 18.0415 141.813 18.5427C142.331 19.0644 142.991 19.4157 143.708 19.5512C146.45 19.8953 149.213 20.0379 151.975 19.9779C156.427 20.0425 160.332 19.9779 164.949 19.6159C165.683 19.4887 166.362 19.1369 166.895 18.6074C167.251 18.2453 167.517 17.802 167.671 17.3145C168.126 15.8956 168.349 14.4107 168.332 12.9185C168.383 12.1945 168.383 7.82438 168.383 7.04863ZM151.517 13.6943V5.69105L159.047 9.71206C156.936 10.9016 154.15 12.2462 151.517 13.6943Z"
                    fill="#F2F2F2"
                  />
                </svg>
              </div>
            </div>


          </div>


        </div>
      </div>
    </footer>
  );
};

export default Footer;
