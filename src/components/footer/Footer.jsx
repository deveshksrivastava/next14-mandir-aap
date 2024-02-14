import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";
const Footer = () => {
  const data = [
    {
      title: "Home",
      // label: `${t("Home")}`,
      path: "/",
      dropdown: undefined,
    },
    {
      // label:`${t("Service")}`,
      title: "Service",
      path: "/service",
      // dropdown: [
      //   {
      //     // label:`${t("serviced1")}`,
      //     title: 'Request Advanced Analytics Enviornment',
      //     path: '/service/advance-analytics-enviroment'
      //   },
      //   {
      //     label:`${t("serviced2")}`,
      //     title: 'Request Data Upload',
      //     path: '/service/data-upload'
      //   }
      // ]
    },
    {
      // label:`${t("Help")}`,
      title: "Help",
      path: "/help",
      // dropdown: [
      //   {
      //     label:`${t("helpd1")}`,
      //     title: 'About US',
      //     path: '/help/about-us'
      //   },
      //   {
      //     label:`${t("helpd2")}`,
      //     title: 'Report a US issue',
      //     path: '/help/report-a-us-issue'
      //   },
      //   {
      //     label:`${t("helpd3")}`,
      //     title: 'FAQS',
      //     path: '/help/faqs'
      //   }
      // ]
    },
    {
      // label:`${t("Contact-Us")}`,
      title: "Contact Us",
      path: "/contact",
      dropdown: undefined,
    },
  ];
  return (
    // <div className={styles.container}>
    //   <div className={styles.logo}>lamadev</div>
    //   <div className={styles.text}>
    //     Lama creative thoughts agency © All rights reserved.
    //   </div>
    // </div>
    <>
      <div className="py-20 bg-red-900 w-full flex flex-col items-center gap-5 justify-center">
        <Image
          src="/Logo-retina-inverse.png"
          height={100}
          width={100}
          alt="logo"
        />
        <div>
          <ul className="flex md:p-0 md:flex-row md:space-x-8 mt-0 mb-[3px] ">
            {/* <NavLinkTag title={link.title} path={link.path} dropdown={link.dropdown} onClick={link.onClick}/>  */}
            {data.map((link, index) => (
              <>
                <li
                  key={index}
                  //  onClick={() => handleItemtitleClick(link.title)}
                >
                  <Link
                    href={`${link.path}`}
                    className={`p-2 text-white hover:border-b-[4px]   hover:bg-opacity-50 border-b-zinc-100 hover:text-white transition duration-10000 ease-in-out`}
                  >
                    {link.title}
                  </Link>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
