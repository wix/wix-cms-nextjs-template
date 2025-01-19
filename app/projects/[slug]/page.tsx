import { getWixClient } from '@app/hooks/useWixClientServer';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import testIds from '@app/utils/test-ids';

export default async function Project({ params }: any) {
  const wixClient = await getWixClient();
  const { items } = await wixClient.items
    .query('Our-Projects')
    .eq('slug', params.slug)
    .find();
  const project = items![0];

  return (
    <div
      className="relative"
      data-testid={testIds.PROJECT_DETAILS_PAGE.CONTAINER}
    >
      <div className="w-full h-[400px] relative">
        <WixMediaImage
          media={project.cover}
          alt={project.title}
          objectFit="cover"
          sizes="100vw"
          disableZoom={true}
        />
      </div>
      <div className="max-w-7xl mx-auto mt-[-120px] relative bg-white px-8 sm:px-20 text-center">
        <h1 className="py-8 font-site">{project.title}</h1>
        <p className="pt-6 max-w-3xl text-sm mx-auto">
          {project.shortDescription}
        </p>
        <p className="py-6 max-w-3xl text-sm mx-auto">
          {project.longDescription}
        </p>
        <a href="" className="btn-main">
          Donate
        </a>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 grid-flow-row mt-10">
          {project.gallery?.map((image: any, i: number) => (
            <div key={i} className="p-4 relative">
              <WixMediaImage media={image.src} width={500} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
