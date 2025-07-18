"use client";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { StarBorder } from "./ui/star-border";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const fadeUp = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%", // start animation when container is 80% into view
          toggleActions: "play none none none",
        },
      });

      fadeUp.from(".fade-up", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2, // stagger each .fade-up element
      });
    }, containerRef);

    return () => ctx.revert(); // Clean up on unmount
  }, []);
  return (
    <footer className="bg-black text-white xl:py-12 pt-[89px] xl:pt-32  overflow-hidden   ">
      <div className=" flex flex-col items-center justify-center px-8">
        <div
          ref={containerRef}
          className="max-w-4xl w-full text-start md:text-center mx-auto"
        >
          {/* Main Heading */}
          <h1 className="fade-up text-[32px] xl:text-[64px] 2xl:text-[96px] mb-[19px] xl:mb-[60px] font-[300] flex items-start md:items-center justify-center flex-col text-[#E2E2E2] gap-[19px] 2xl:gap-[60px]">
            Reserve a LumynXR
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="52"
              height="6"
              viewBox="0 0 52 6"
              fill="none"
              className="hidden md:block"
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
            <p className="hidden md:block text-[14px] xl:text-[20px] 2xl:text-[24px] font-[200] text-[#C5C5C5] xl:leading-[32px] xl:tracking-[0.04px]">
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
          <div className="fade-up">
            <div className=" uppercase  w-full flex items-center justify-center">
              <div className="box text-xl px-[40px] py-[22px] max-w-[200px] max-h-[70px]  ">
                Talk to Sales
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


      <div className="w-full  xl:px-[10vw] ">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8  mb-[62px] xl:mb-[70px] 2xl:mb-[62px]">
          {/* Left Section - Logos */}
          <div className="flex flex-col space-y-6 items-center  w-full xl:w-[379px] 2xl:w-[487px] ">
            {/* LumynXR Logo */}
            <div className="flex items-center  w-[356px] h-[77px] xl:w-[379px] xl:h-[61px]  2xl:w-[487px] 2xl:h-[79px]">

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
            <div className="flex items-center justify-between mt-4 mb-16 xl:mt-[62px] xl:mb-[62px] w-[253px] xl:w-[379px] 2xl:w-[487px]">
              {/* Logo 1 inside pill */}
              <div className="rounded-full flex items-center justify-center w-[77px] h-[18px] xl:w-[132px] xl:h-[28px] 2xl:w-[166px] 2xl:h-[36px] bg-transparent">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 132 28" fill="none">
                  <path d="M35.9365 27.7916H26.7612L26.7612 5.41665L35.9365 1.36374L35.9365 27.7916Z" fill="#F2F2F2" />
                  <path d="M24.7233 15.616C24.7233 22.3443 19.1888 27.7987 12.3617 27.7987C5.5345 27.7987 0 22.3443 0 15.616C0 8.88769 5.5345 3.43332 12.3617 3.43332C19.1888 3.43332 24.7233 8.88769 24.7233 15.616ZM7.16976 15.616C7.16976 18.4419 9.49425 20.7327 12.3617 20.7327C15.2291 20.7327 17.5535 18.4419 17.5535 15.616C17.5535 12.7901 15.2291 10.4993 12.3617 10.4993C9.49425 10.4993 7.16976 12.7901 7.16976 15.616Z" fill="#F2F2F2" />
                  <path d="M57.2833 9.85595C57.8203 8.86853 58.098 7.75311 58.098 6.50968C58.098 5.28455 57.8203 4.16912 57.2833 3.1817C56.7278 2.19428 55.9687 1.40799 55.0058 0.841139C54.0244 0.29257 52.9135 0 51.6729 0C50.4138 0 49.3028 0.29257 48.3399 0.841139C47.3586 1.40799 46.5994 2.19428 46.0624 3.1817C45.5069 4.16912 45.2477 5.28455 45.2477 6.50968C45.2477 7.75311 45.5069 8.86853 46.0624 9.85595C46.5994 10.8434 47.3586 11.6297 48.3399 12.1782C49.3028 12.7451 50.4138 13.0194 51.6729 13.0194C52.9135 13.0194 54.0244 12.7451 55.0058 12.1782C55.9687 11.6297 56.7278 10.8434 57.2833 9.85595ZM48.5251 8.66739C48.2288 8.04568 48.0807 7.31425 48.0807 6.50968C48.0807 5.70512 48.2288 4.99198 48.5251 4.35198C48.8213 3.73027 49.2287 3.23656 49.7842 2.87084C50.3212 2.50513 50.9507 2.32227 51.6729 2.32227C52.3765 2.32227 52.9875 2.50513 53.543 2.87084C54.08 3.23656 54.5059 3.73027 54.8021 4.35198C55.0984 4.99198 55.2465 5.70512 55.2465 6.50968C55.2465 7.31425 55.0984 8.04568 54.8021 8.66739C54.5059 9.30738 54.08 9.8011 53.543 10.1668C52.9875 10.5325 52.3765 10.6971 51.6729 10.6971C50.9507 10.6971 50.3212 10.5325 49.7842 10.1668C49.2287 9.8011 48.8213 9.30738 48.5251 8.66739Z" fill="#F2F2F2" />
                  <path d="M67.5013 4.42512C66.7791 3.74855 65.8718 3.40113 64.7609 3.40113C64.0572 3.40113 63.4832 3.52913 63.0203 3.74855C62.5389 3.96798 62.1501 4.27884 61.8168 4.68112L61.5761 3.51084H59.2985V12.9097H61.9093V8.10053C61.9093 7.29597 62.0945 6.65597 62.4648 6.19883C62.8352 5.75997 63.3536 5.52226 64.0387 5.52226C65.3164 5.52226 65.9644 6.34511 65.9644 7.95425V12.9097H68.5752V7.80796C68.5752 6.2354 68.2049 5.11998 67.5013 4.42512Z" fill="#F2F2F2" />
                  <path d="M70.1647 5.68683C69.7574 6.41826 69.5722 7.25939 69.5722 8.22853C69.5722 9.19767 69.7759 10.0388 70.1833 10.7702C70.5906 11.5017 71.1831 12.0502 71.9608 12.4342C72.7385 12.8365 73.6458 13.0194 74.7197 13.0194C75.5345 13.0194 76.2566 12.8914 76.8862 12.5988C77.5157 12.3062 78.0157 11.9222 78.4045 11.4102C78.7748 10.9165 79.0155 10.3497 79.1266 9.72795H76.5529C76.4418 10.1668 76.2011 10.5142 75.8492 10.7337C75.4974 10.9531 75.053 11.0628 74.5346 11.0628C73.868 11.0628 73.331 10.8799 72.9607 10.4777C72.5719 10.0937 72.3497 9.56338 72.2941 8.86853V8.79539H79.2007C79.2377 8.53939 79.2748 8.24682 79.2748 7.91768C79.2562 7.0034 79.034 6.21711 78.6267 5.54055C78.2193 4.86398 77.6453 4.33369 76.9047 3.96798C76.164 3.60227 75.3308 3.40113 74.3679 3.40113C73.4051 3.40113 72.5719 3.60227 71.8497 4.00455C71.1276 4.40684 70.5721 4.95541 70.1647 5.68683ZM76.664 7.11311H72.3497C72.4237 6.56454 72.6459 6.14397 73.0348 5.81483C73.4236 5.48569 73.905 5.32112 74.479 5.32112C75.0716 5.32112 75.553 5.48569 75.9418 5.79654C76.3307 6.1074 76.5714 6.54626 76.664 7.11311Z" fill="#F2F2F2" />
                  <path d="M63.8204 19.3734C63.1724 18.7151 62.3391 18.3677 61.3207 18.3677C60.5986 18.3677 59.9505 18.514 59.395 18.7883C58.8395 19.0625 58.3766 19.4465 58.0433 19.9585C57.5064 18.898 56.562 18.3677 55.2103 18.3677C54.5438 18.386 53.9883 18.4957 53.5439 18.7151C53.0995 18.9345 52.7106 19.2454 52.3959 19.6477L52.1552 18.4774H49.8776V27.8945H52.4884V22.7562C52.4884 22.0614 52.6551 21.5128 52.9884 21.1105C53.3217 20.7083 53.7846 20.4888 54.3586 20.4888C55.4696 20.4888 56.0251 21.202 56.0251 22.6282V27.8945H58.6359V22.738C58.6359 22.0431 58.8025 21.4945 59.1543 21.0923C59.4876 20.69 59.9505 20.4888 60.5245 20.4888C61.617 20.4888 62.1725 21.202 62.1725 22.6282V27.8945H64.7833V22.7197C64.7833 21.1654 64.45 20.05 63.8204 19.3734Z" fill="#F2F2F2" />
                  <path d="M80.088 19.3734C79.44 18.7151 78.6067 18.3677 77.5883 18.3677C76.8662 18.3677 76.2181 18.514 75.6626 18.7883C75.1071 19.0625 74.6442 19.4465 74.3109 19.9585C73.774 18.898 72.8296 18.3677 71.4779 18.3677C70.8114 18.386 70.2559 18.4957 69.8115 18.7151C69.3671 18.9345 68.9782 19.2454 68.6635 19.6477L68.4228 18.4774H66.1452V27.8945H68.7561V22.7562C68.7561 22.0614 68.9227 21.5128 69.256 21.1105C69.5893 20.7083 70.0522 20.4888 70.6262 20.4888C71.7372 20.4888 72.2927 21.202 72.2927 22.6282V27.8945H74.9035V22.738C74.9035 22.0431 75.0701 21.4945 75.4219 21.0923C75.7552 20.69 76.2181 20.4888 76.7921 20.4888C77.8846 20.4888 78.4401 21.202 78.4401 22.6282V27.8945H81.0509V22.7197C81.0509 21.1654 80.7176 20.05 80.088 19.3734Z" fill="#F2F2F2" />
                  <path d="M82.635 20.6534C82.2277 21.3848 82.0425 22.226 82.0425 23.1951C82.0425 24.1642 82.2462 25.0054 82.6536 25.7368C83.0609 26.4682 83.6534 27.0168 84.4311 27.4008C85.2088 27.8031 86.1161 27.9859 87.1901 27.9859C88.0048 27.9859 88.7269 27.8579 89.3565 27.5654C89.986 27.2728 90.486 26.8888 90.8748 26.3768C91.2451 25.8831 91.4858 25.3162 91.5969 24.6945H89.0232C88.9121 25.1334 88.6714 25.4808 88.3196 25.7002C87.9677 25.9197 87.5234 26.0294 87.0049 26.0294C86.3383 26.0294 85.8013 25.8465 85.431 25.4442C85.0422 25.0602 84.82 24.53 84.7644 23.8351V23.762H91.671C91.708 23.506 91.7451 23.2134 91.7451 22.8842C91.7266 21.97 91.5044 21.1837 91.097 20.5071C90.6896 19.8305 90.1156 19.3003 89.375 18.9345C88.6343 18.5688 87.8011 18.3677 86.8382 18.3677C85.8754 18.3677 85.0422 18.5688 84.32 18.9711C83.5979 19.3734 83.0424 19.922 82.635 20.6534ZM89.1343 22.0797H84.82C84.894 21.5311 85.1162 21.1105 85.5051 20.7814C85.8939 20.4523 86.3753 20.2877 86.9493 20.2877C87.5419 20.2877 88.0233 20.4523 88.4121 20.7631C88.801 21.074 89.0417 21.5128 89.1343 22.0797Z" fill="#F2F2F2" />
                  <path d="M98.6897 18.4774H98.2453C97.5417 18.4774 96.9677 18.6054 96.5603 18.8431C96.1345 19.0808 95.7826 19.4283 95.5049 19.8854L95.2642 18.4774H92.8941V27.8762H95.5049V23.2682C95.5049 22.5185 95.6715 21.9151 96.0234 21.4763C96.3567 21.0374 96.9121 20.818 97.6528 20.818H98.6897V18.4774Z" fill="#F2F2F2" />
                  <path d="M101.527 24.7494H99.0454C99.0825 25.7551 99.5268 26.5414 100.36 27.1265C101.175 27.7117 102.249 27.9859 103.582 27.9859C104.434 27.9859 105.174 27.8762 105.822 27.6202C106.47 27.3642 106.97 27.0168 107.341 26.5414C107.711 26.0842 107.896 25.5539 107.896 24.9322C107.896 23.9814 107.544 23.3048 106.859 22.9025C106.174 22.5002 105.193 22.226 103.915 22.0797C103.304 22.0248 102.878 21.97 102.619 21.9151C102.36 21.8785 102.138 21.7871 101.99 21.6774C101.823 21.5677 101.749 21.4031 101.749 21.1837C101.749 20.8911 101.897 20.6351 102.193 20.4523C102.489 20.2694 102.897 20.178 103.397 20.178C103.915 20.178 104.36 20.306 104.693 20.5254C105.026 20.7448 105.23 21.0374 105.267 21.3848H107.748C107.674 20.434 107.248 19.7025 106.452 19.154C105.656 18.6237 104.619 18.3494 103.323 18.3311C102.508 18.3311 101.804 18.4591 101.193 18.7151C100.564 18.9711 100.082 19.3368 99.749 19.8123C99.4158 20.2877 99.2491 20.818 99.2491 21.4214C99.2491 22.0431 99.4158 22.5185 99.749 22.8842C100.082 23.25 100.527 23.5242 101.082 23.6888C101.638 23.8717 102.323 23.9997 103.175 24.1094C103.786 24.1825 104.23 24.2557 104.508 24.3105C104.767 24.3654 104.989 24.4568 105.137 24.5665C105.285 24.6945 105.359 24.8774 105.359 25.1151C105.359 25.4442 105.193 25.7002 104.878 25.8831C104.545 26.0659 104.119 26.1391 103.563 26.1391C102.971 26.1391 102.508 26.0111 102.138 25.7551C101.767 25.4991 101.564 25.1699 101.527 24.7494Z" fill="#F2F2F2" />
                  <path d="M111.508 14.9849C111.211 14.7106 110.86 14.5643 110.434 14.5643C109.989 14.5643 109.637 14.7106 109.341 14.9849C109.045 15.2591 108.915 15.6066 108.915 16.0088C108.915 16.4294 109.045 16.7768 109.341 17.0511C109.637 17.3437 109.989 17.4717 110.434 17.4717C110.86 17.4717 111.211 17.3437 111.508 17.0511C111.785 16.7768 111.934 16.4294 111.934 16.0088C111.934 15.6066 111.785 15.2591 111.508 14.9849ZM109.119 18.4774V27.8762H111.73V18.4774H109.119Z" fill="#F2F2F2" />
                  <path d="M112.346 18.4774L115.771 27.8762H119.012L122.437 18.4774H119.697L117.438 25.2431L115.142 18.4774H112.346Z" fill="#F2F2F2" />
                  <path d="M122.89 20.6534C122.483 21.3848 122.297 22.226 122.297 23.1951C122.297 24.1642 122.501 25.0054 122.908 25.7368C123.316 26.4682 123.908 27.0168 124.686 27.4008C125.464 27.8031 126.371 27.9859 127.445 27.9859C128.26 27.9859 128.982 27.8579 129.611 27.5654C130.241 27.2728 130.741 26.8888 131.13 26.3768C131.5 25.8831 131.741 25.3162 131.852 24.6945H129.278C129.167 25.1334 128.926 25.4808 128.574 25.7002C128.223 25.9197 127.778 26.0294 127.26 26.0294C126.593 26.0294 126.056 25.8465 125.686 25.4442C125.297 25.0602 125.075 24.53 125.019 23.8351V23.762H131.926C131.963 23.506 132 23.2134 132 22.8842C131.981 21.97 131.759 21.1837 131.352 20.5071C130.945 19.8305 130.371 19.3003 129.63 18.9345C128.889 18.5688 128.056 18.3677 127.093 18.3677C126.13 18.3677 125.297 18.5688 124.575 18.9711C123.853 19.3734 123.297 19.922 122.89 20.6534ZM129.389 22.0797H125.075C125.149 21.5311 125.371 21.1105 125.76 20.7814C126.149 20.4523 126.63 20.2877 127.204 20.2877C127.797 20.2877 128.278 20.4523 128.667 20.7631C129.056 21.074 129.297 21.5128 129.389 22.0797Z" fill="#F2F2F2" />
                  <path d="M48.3269 28H45.0902V16.9822L48.3269 14.9865L48.3269 28Z" fill="#F2F2F2" />
                </svg>
              </div>

              {/* Divider line */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2 54"
                className="w-[1.5px] h-[54px]"
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
              <div className="relative w-[53px] h-[17px] xl:w-[83px] xl:h-[26px] 2xl:w-[100px] 2xl:h-[32px]">
                <Image
                  src="/mailabs.svg"
                  alt="Mailabs logo"
                  fill
                  className="object-contain"
                />
              </div>

            </div>

          </div>

          {/* Center Section - Navigation */}
          <div className="hidden xl:flex md:flex-col space-y-4  ml-[120px]">
            <nav className="flex flex-col  h-[225px] lg:border-l-[0.5px] pl-16  border-[#868686]  justify-between font-[100] xl:font-[400] text-[10px] xl:text-[20px]  2xl:text-[24px] text-[#F2F2F2]">
              <Link
                href="/sales"
                className=" hover:text-white transition-colors duration-200"
              >
                Talk to Sales
              </Link>
              <Link
                href="/company"
                className=" hover:text-white transition-colors duration-200"
              >
                Company
              </Link>
              <Link
                href="/faq"
                className=" hover:text-white transition-colors duration-200"
              >
                FAQ
              </Link>
              <Link
                href="/media"
                className=" hover:text-white transition-colors duration-200"
              >
                Media Centre
              </Link>
            </nav>
          </div>

          {/* Right Section - Contact Info */}
          <div className=" hidden xl:flex  flex-col space-y-6 h-[225px] font-['DM_Sans'] font-style-normal tr text-[#F2F2F2]/80 text-[22px]  justify-between text-right font-light">
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

          <div className="xl:hidden  flex w-full px-[28px] justify-between font-[100]  text-[10px]  text-[#F2F2F2]">

            <nav className="flex flex-col h-full justify-between  ">
              <Link
                href="/sales"
                className=" hover:text-white transition-colors duration-200"
              >
                Talk to Sales
              </Link>
              <Link
                href="/company"
                className=" hover:text-white transition-colors duration-200"
              >
                Company
              </Link>
              <Link
                href="/faq"
                className=" hover:text-white transition-colors duration-200"
              >
                FAQ
              </Link>
              <Link
                href="/media"
                className=" hover:text-white transition-colors duration-200"
              >
                Media Centre
              </Link>
            </nav>

            <nav className="flex flex-col  h-full justify-between ">
              <Link
                href="/"
                className=" hover:text-white transition-colors duration-200"
              >
                LinkedIn
              </Link>
              <Link
                href="/"
                className=" hover:text-white transition-colors duration-200"
              >
                Youtube
              </Link>
              <Link
                href="/"
                className=" hover:text-white transition-colors duration-200"
              >
                Instagram
              </Link>
              <Link
                href="/"
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
                href="/privacy"
                className="xl:pl-[62px] hover:text-white transition-colors duration-200 xl:border-x-[0.5px] xl:pr-[62px] border-[#868686]"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors duration-200"
              >
                Terms of Service
              </Link>
              {/* Right: Social Icons */}
              <div className="hidden xl:flex space-x-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <path
                    d="M0 2.32323C0 1.64982 0.225232 1.09426 0.675676 0.656566C1.12612 0.218848 1.71172 0 2.43243 0C3.14029 0 3.71299 0.215475 4.15058 0.646465C4.60102 1.09091 4.82625 1.67002 4.82625 2.38384C4.82625 3.0303 4.60747 3.56901 4.16988 4C3.71944 4.44444 3.12741 4.66667 2.39382 4.66667H2.37452C1.66666 4.66667 1.09396 4.44444 0.656371 4C0.218784 3.55556 0 2.99663 0 2.32323ZM0.250965 20V6.50505H4.53668V20H0.250965ZM6.9112 20H11.1969V12.4646C11.1969 11.9933 11.2484 11.6296 11.3514 11.3737C11.5315 10.9158 11.805 10.5286 12.1718 10.2121C12.5386 9.89562 12.9987 9.73737 13.5521 9.73737C14.9936 9.73737 15.7143 10.7542 15.7143 12.7879V20H20V12.2626C20 10.2694 19.5496 8.75758 18.6486 7.72727C17.7477 6.69697 16.5573 6.18182 15.0772 6.18182C13.417 6.18182 12.1236 6.92929 11.1969 8.42424V8.46465H11.1776L11.1969 8.42424V6.50505H6.9112C6.93693 6.93602 6.94981 8.27608 6.94981 10.5253C6.94981 12.7744 6.93693 15.9326 6.9112 20Z"
                    fill="#F2F2F2"
                  />
                </svg>
                <svg
                  className="ml-2" // <-- Moves it slightly right
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
                  className="ml-2" // <-- Moves it slightly right
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
