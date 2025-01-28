import { icons } from "@/app/icons";

const Footer = () => {
  return (
    <>
      <section className=" pt-24 px-4 text-black  bg-[#E9F7FE] w-full h-[300px]">
        <div className="container mx-auto">
          <div className="font-bold text-base pb-4 ">
            <ul className="flex justify-center items-center      space-x-10 md:space-x-8 mb-4 flex-wrap gap-4">
              <li>About CoreWeave</li>
              <li>Our Services</li>
              <li>Client Testimonials</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="border-b-[1px] border-black space-y-2"></div>
          <div className="flex justify-between items-center py-6 flex-col md:flex-row gap-5">
            <div className="flex gap-6 ">
              <p>
                <icons.facebook />
              </p>
              <p>
                <icons.twitter />
              </p>
              <p>
                <icons.instagram />
              </p>
              <p>
                <icons.linkedin />
              </p>
            </div>
            <div className="">
              <p>© CoreWeave 2023, Leading the Future of Digital Innovation</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
