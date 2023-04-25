import { WixMediaImage } from '@app/components/Image/WixMediaImage';
export default async function Page() {
  return (
    <div className="relative">
      <div className="w-full h-[400px] relative">
        <WixMediaImage
          media="https://static.wixstatic.com/media/0b340f_a5c250a81aed4d7fa68e005cff2132c8~mv2_d_3840_1960_s_2.jpg/v1/fill/w_3456,h_984,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/0b340f_a5c250a81aed4d7fa68e005cff2132c8~mv2_d_3840_1960_s_2.jpg"
          alt="projects"
          sizes="100vw"
          objectFit="cover"
          disableZoom={true}
        />
      </div>
      <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20">
        <h1 className="text-center py-8 font-site">Contact</h1>
        <div className="max-w-4xl mx-auto">
          <h3 className="font-site text-lg my-3">Volunteer</h3>
          <form className="border-2 border-blue-site p-8">
            <div className="flex flex-col sm:flex-row sm:gap-12">
              <div className="basis-1/2">
                <label className="text-xs" htmlFor="name">
                  First name *
                </label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  id="name"
                  required={true}
                />
                <label className="text-xs" htmlFor="email">
                  Email *
                </label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  id="email"
                  required={true}
                />
              </div>
              <div className="basis-1/2">
                <label className="text-xs" htmlFor="name">
                  Last name
                </label>
                <input className="input" type="text" name="last" id="last" />
                <label className="text-xs" htmlFor="phone">
                  Phone
                </label>
                <input className="input" type="tel" name="phone" id="phone" />
              </div>
            </div>
            <label className="text-xs" htmlFor="address">
              Address
            </label>
            <input className="input" type="text" name="address" id="address" />
            <button className="btn-main w-full mt-6 text-xl" type="submit">
              Apply
            </button>
          </form>
        </div>
        <div className="max-w-4xl mx-auto mt-10">
          <h3 className="font-site text-lg my-3">Partner</h3>
          <form className="border-2 border-blue-site p-8">
            <div className="flex flex-col sm:flex-row sm:gap-12">
              <div className="basis-1/2">
                <label className="text-xs" htmlFor="company">
                  Company
                </label>
                <input
                  className="input"
                  type="text"
                  name="company"
                  id="company"
                />
                <label className="text-xs" htmlFor="address">
                  Address
                </label>
                <input
                  className="input"
                  type="email"
                  name="address"
                  id="address"
                />
              </div>
              <div className="basis-1/2">
                <label className="text-xs" htmlFor="contact">
                  Point of Contact
                </label>
                <input
                  className="input"
                  type="text"
                  name="contact"
                  id="contact"
                />
                <label className="text-xs" htmlFor="phone">
                  Phone
                </label>
                <input className="input" type="tel" name="phone" id="phone" />
              </div>
            </div>
            <label className="text-xs" htmlFor="social">
              Social Media Links
            </label>
            <input className="input" type="text" name="social" id="social" />
            <button className="btn-main w-full mt-6 text-xl" type="submit">
              Apply
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
