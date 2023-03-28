import { media as wixMedia } from '@wix/api-client';
import Image, { ImageProps } from 'next/image';
import { PLACEHOLDER_IMAGE } from '../../constants';

function getImageUrlForMedia(media: string, width: number, height: number) {
  if (media.startsWith('wix:image')) {
    return wixMedia.getScaledToFillImageUrl(media, width, height, {});
  } else {
    return media;
  }
}

export function WixMediaImage({
  media,
  height = 320,
  width = 640,
  alt = 'no info available for image',
  className,
  objectFit,
  disableZoom = false,
}: {
  media?: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
  disableZoom?: boolean;
  objectFit?: 'cover' | 'contain';
}) {
  const imageUrl = media
    ? getImageUrlForMedia(media || '', width, height)
    : PLACEHOLDER_IMAGE;

  const styleProps: Partial<ImageProps> = {
    ...(objectFit ? { style: { objectFit }, fill: true } : { width, height }),
  };

  return (
    <div className={`flex items-center justify-center h-full`}>
      <div className="overflow-hidden cursor-pointer relative group w-full h-full">
        <Image
          {...styleProps}
          src={imageUrl}
          alt={alt}
          className={`object-cover w-full ${
            !disableZoom ? 'group-hover:scale-110' : ''
          } transition duration-300 ease-in-out ${className}`}
        />
      </div>
    </div>
  );
}
