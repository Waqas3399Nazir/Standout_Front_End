import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactInformationForm from "@/components/ContactInformationForm";

const RequestCode = () => {
  return (
    <div>
      <Header />
      <section className="bg-black px-[6%] sm:p-sectionPadding">
        <div className="bg-black w-full flex flex-row justify-center text-white pb-[1.5rem] sm:pb-[2.5rem]">
          <h1 className="text-[2rem] sm:text-[2rem] lg:text-heading font-heading uppercase">
            Request Quote
          </h1>
        </div>
      </section>
      <section>
        <div className="bg-black px-[5%] sm:px-[6%] lg:p-sectionPadding py-[1.5rem]">
          <ContactInformationForm />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RequestCode;
