import data from './placeholder-images.json';

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

const allImages: ImagePlaceholder[] = data.placeholderImages;

export const projectImages = allImages.filter(img => img.id.startsWith('project-'));

export const serviceImages = allImages.filter(img => img.id.startsWith('service-'));

export const aboutImage = allImages.find(img => img.id === 'about-portrait');
