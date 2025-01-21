import React from "react";

const ContactUs = () => {
  return (
    <>
      <section className="bg-gradient-to-b to-[#1268CE] from-[#05317A] h-[400px]">
        <div className="container mx-auto py-20 px-6 justify-between flex space-y-6">
          <div className="w-2/4">
            <p className="font-thin">Connect with CoreWeave</p>
            <h2 className="text-7xl font-semibold mb-4 text-white">
              Ready to start your digital journey?
            </h2>
            <div className="">
              <p className="font-thin text-white flex flex-col">
                Monday-Friday, 9:00 am to 6:00 pm
                <span>
                  Our team is here to assist you with all your digital needs.
                </span>
              </p>
            </div>
          </div>
          <div className="">
            <p>Reach out to us</p>
            <span>contact@coreweave.com</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
