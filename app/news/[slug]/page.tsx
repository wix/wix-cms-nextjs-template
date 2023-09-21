import { getWixClient } from '@app/hooks/useWixClientServer';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import testIds from '@app/utils/test-ids';

export default async function New({ params }: any) {
  const wixClient = await getWixClient();
  const { items } = await wixClient.items
    .queryDataItems({
      dataCollectionId: 'News',
    })
    .eq('slug', params.slug)
    .find();
  const item = items![0];

  return (
    <div className="relative" data-testid={testIds.NEWS_DETAILS_PAGE.CONTAINER}>
      <div className="w-full h-[400px] relative">
        <WixMediaImage
          media="https://static.wixstatic.com/media/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_1920,h_492,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg"
          alt={item.data!.title}
          objectFit="cover"
          sizes="100vw"
          disableZoom={true}
        />
      </div>
      <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20 text-center">
        <h1 className="py-8 font-site">{item.data!.title}</h1>
        <p className="py-6 max-w-3xl text-lg mx-auto">
          {item.data!.short_description}
        </p>
        <div className="relative h-[400px]">
          <WixMediaImage
            media={item.data!.image}
            alt={item.data!.title}
            sizes="100vw"
            objectFit="contain"
          />
        </div>
        <p
          className="py-6 max-w-3xl text-sm mx-auto"
          dangerouslySetInnerHTML={{ __html: item.data!.longDescription }}
        />
      </div>
    </div>
  );
}
