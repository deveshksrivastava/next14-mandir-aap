// "use client";
import Banner from "@/Reuseable/banner";
import Image from "next/image";
import styles from "./contact.module.css";
// import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";

// const HydrationTestNoSSR = dynamic(()=>import("@/components/hydrationTest"), {ssr: false})

export const metadata = {
  title: "Contact Page",
  description: "Contact description",
};

const ContactPage = () => {
  // const a = Math.random();

  // console.log(a);

  return (
    <>
      <section>
        <Banner />
      </section>
      <div className={`${styles.container} bg-white p-10`}>
        <div className={styles.imgContainer}>
          <div className="map-iframe">
            <iframe
              //  frameborder="1|0"
              width="1140"
              title="map"
              height="541.25"
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl"
              src="https://maps.google.com/maps?q=maudaha&t=&z=11&ie=UTF8&iwloc=&output=embed"
              style={{
                border: 0,
                width: "100% ",
                height: 500,
              }}
            ></iframe>
          </div>
          {/* <Image src="/contact.png" alt="contact" width="500" height="200" className={styles.img} /> */}
        </div>
        <div className={styles.formContainer}>
          {/* <HydrationTestNoSSR/> */}
          {/* <div suppressHydrationWarning>{a}</div> */}
          {/* <form action="" className={styles.form}>
            <input type="text" placeholder="Name and Surname" />
            <input type="text" placeholder="Email Address" />
            <input type="text" placeholder="Phone Number (Optional)" />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            ></textarea>
            <button>Send</button>
          </form> */}
          {/* <section className=" sm:p-0  text-center "> */}
    <div className="w-full    min-h-[100vh] bg-yellow-50 text-black flex flex-col justify-center items-center ">
          <h1 className="text-[2rem]  font-size-head">CONTACT US</h1>
          <h2 className="md:text-[3rem] font-family-h2 text-[2rem] sm:p-0 leading-10 text-center max-w-['768px']   ">
          Have Questions?
Get in Touch!
          </h2>
          <form className={''}>
            <button>Send</button>
          </form>
          </div>
          {/* </section> */}
        </div>
      </div>
    </>
  );
};

export default ContactPage;
