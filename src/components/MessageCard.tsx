// components/TestimonialCard.js
import Image from "next/image";
import meetingImage from "../../public/meeting.jpg";

export default function MessageCard() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto flex justify-center items-center bg-[#f7f9fc] absolute">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden ">
          <div className="relative w-full h-80">
            <div className="absolute inset-0 bg-blue-900 bg-opacity-70 z-10"></div>
            <Image
              src={meetingImage}
              alt="Team Discussion"
              width={1200}
              height={500}
              className="object-cover w-full h-80 relative"
            />
          </div>
          <div className="absolute inset-0 z-20 flex items-center justify-center p-8 text-center text-white">
            <div>
              <p className="text-xl font-medium">
                CoreWeave has been instrumental in transforming our digital
                strategy. Their expertise in web and app development is
                unmatched, and their marketing solutions have significantly
                boosted our brand presence.
              </p>
              <div className="mt-6">
                <h3 className="text-lg font-semibold">Emily Carter</h3>
                <p className="text-sm">CEO at Tech Innovations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
