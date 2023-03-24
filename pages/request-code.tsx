import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactInformationForm from "@/components/ContactInformationForm";

const RequestCode = () => {
  return (
    <div>
      <Header />
      <section className="bg-black p-sectionPadding">
        <div className="bg-black text-center text-white h-[7.5rem]">
          <h1 className="text-heading h-[48px] font-heading uppercase">
            Request Code
          </h1>
        </div>
      </section>
      {/* <section className="text-center">
        <div className="bg-black p-sectionPadding text-center text-white h-[7.5rem]">
          <h1 className="text-heading font-heading uppercase">Request Code</h1>
        </div>
      </section> */}
      <section>
        <div className="bg-black p-sectionPadding py-[2rem]">
          <ContactInformationForm />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default RequestCode;
