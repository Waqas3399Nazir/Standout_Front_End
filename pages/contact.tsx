import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FeedBackForm from "@/components/FeedbackForm";
import ContactDetails from "@/components/ContactDetails";

const Contact = () => {
  return (
    <>
      <Header />
      <section className="bg-black p-sectionPadding">
        <div className="bg-black text-white h-[7.5rem]">
          <h1 className="text-heading w-fit m-auto font-heading uppercase">
            Contact
          </h1>
        </div>
      </section>
      <section className="bg-black p-sectionPadding">
        <ContactDetails />
      </section>
      <section className="bg-black p-sectionPadding pt-[3rem]">
        <FeedBackForm />
      </section>
      <Footer />
    </>
  );
};

export default Contact;
