import { getWixClient } from '@app/hooks/useWixClientServer';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';
export default async function Team() {
  const wixClient = await getWixClient();
  const { items: team } = await wixClient.data.query({
    dataCollectionId: 'Our-Team',
  });
  const { items: volunteers } = await wixClient.data.query({
    dataCollectionId: 'Volunteers',
  });
  return (
    <div className="relative">
      <div className="w-full h-[400px] relative">
        <WixMediaImage
          media="https://static.wixstatic.com/media/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg/v1/fill/w_1920,h_492,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg"
          alt="projects"
          objectFit="cover"
          disableZoom={true}
        />
      </div>
      <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20">
        <h1 className="text-center py-8 text-site font-site">Our Team</h1>
        <p className="pt-6 max-w-3xl text-sm text-center mx-auto">
          I am a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 grid-flow-row mt-10">
          {team!.map((item) => (
            <div key={item._id} className="p-4 relative">
              <div className="w-[300px] h-[220px] relative">
                <WixMediaImage
                  media={item.image}
                  alt={item.name}
                  objectFit="cover"
                />
              </div>
              <div className="bg-white sm:mt-[-50px] border-t-4 relative mx-6 px-2 pt-3 border-blue-site text-center">
                <h2 className="mb-10 font-site">{item.name}</h2>
                <p className="text-sm mb-6">{item.about}</p>
                <span>{item.email}</span>
              </div>
            </div>
          ))}
        </div>
        <h1 className="text-center py-8 text-blue-site mt-8 font-site">
          Our Volunteers
        </h1>
        <p className="pt-6 max-w-3xl text-sm text-center mx-auto">
          I am a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 grid-flow-row mt-10">
          {volunteers!.map((item) => (
            <div key={item._id} className="p-4 relative">
              <div className="bg-white sm:mt-[-50px] relative mx-6 px-2 py-5 text-center">
                <h2 className="mb-10 font-extrabold text-blue-site font-site">
                  {item.name}
                </h2>
                <p className="text-sm mb-6">{item.about}</p>
                <span>{item.email}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
