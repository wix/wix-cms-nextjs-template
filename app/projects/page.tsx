import { getWixClient } from '@app/hooks/useWixClientServer';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';
export default async function Projects() {
  const wixClient = await getWixClient();
  const { items } = await wixClient.data.query({
    dataCollectionId: 'Our-Projects',
  });

  return (
    <div className="relative">
      <div className="w-full h-[400px] relative">
        <WixMediaImage
          media="https://static.wixstatic.com/media/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_1920,h_492,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg"
          alt="projects"
          objectFit="cover"
          disableZoom={true}
        />
      </div>
      <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20">
        <h1 className="text-center py-8 font-site">Our Projects</h1>
        <p className="pt-6 max-w-3xl text-sm text-center mx-auto">
          I am a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. Feel free to drag and drop me
          anywhere you like on your page. I’m a great place for you to tell a
          story and let your users know a little more about you.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 grid-flow-row mt-10">
          {items!.map((item) => (
            <div key={item._id} className="p-4 relative">
              <div className="sm:w-[370px] h-[320px] relative">
                <WixMediaImage
                  media={item.cover}
                  alt={item.title}
                  objectFit="cover"
                />
              </div>
              <div className="bg-white sm:mt-[-50px] border-t-4 relative mx-6 px-2 pt-3 border-blue-site text-center">
                <h2 className="mb-10 font-site">{item.title}</h2>
                <p className="text-sm mb-6">{item.short_description}</p>
                <a
                  href={`/projects/${item.slug}`}
                  className="text-purple-site py-6 font-site"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
