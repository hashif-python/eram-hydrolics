import type { ImageAsset } from '@/types/content';

const px = (id: string, file = 'jpeg') =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.${file}?auto=compress&cs=tinysrgb&h=650&w=940`;

export const IMAGES = {
  homeHero: px('14144421'),
  aboutBanner: px('14637831'),
  servicesBanner: px('2995864'),
  productsBanner: px('18540319'),
  industriesBanner: px('3207536'),
  agenciesBanner: px('36878027'),
  contactBanner: px('9242180'),
  hydraulicDetail: px('39345876', 'png'),
  valves: px('18540319'),
  workshop: px('14637831'),
  inspection: px('2760241'),
  inspectionAlt: px('2995864'),
  mechanic: px('3807319'),
  mechanicTools: px('7564865'),
  mechanicEngine: px('7564857'),
  goggles: px('9242180'),
  offshore: px('12367489'),
  offshorePlatform: px('3207536'),
  refinery: px('5884386'),
  pipelines: px('36825977'),
  cranesShip: px('38414141'),
  cargoShip: px('12069409'),
  excavatorArm: px('30094678'),
  excavatorSite: px('38039394'),
  excavatorQuarry: px('15071423'),
  excavatorGravel: px('27986721'),
  steelPipesYard: px('33996167'),
  steelWarehouse: px('36878025'),
  steelRack: px('15508178'),
  heavyPlant: px('14144421'),
  tools: px('34718932'),
  rustyStructure: px('208661'),
} as const;

export const sized = (src: string, width: number) =>
  src.replace(/&h=\d+&w=\d+/, `&w=${width}`);

export const asset = (src: string, alt: string): ImageAsset => ({ src, alt });
