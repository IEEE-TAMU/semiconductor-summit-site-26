export interface Speaker {
  id: string;
  name: string;
  image: string;
}

export const speakers: Speaker[] = [
  {
    id: 'timothy-lee',
    name: 'Timothy Lee',
    image: '/images/speakers/timothy-lee.png',
  },
  {
    id: 'dr-shenggao-li',
    name: 'Dr. Shenggao Li',
    image: '/images/speakers/dr-shenggao-li.png',
  },
  {
    id: 'sarah-hemmer',
    name: 'Sarah Hemmer',
    image: '/images/speakers/sarah-hemmer.png',
  },
  {
    id: 'gregory-guez',
    name: 'Gregory Guez',
    image: '/images/speakers/gregory-guez.png',
  },
  {
    id: 'dr-jason-cain',
    name: 'Dr. Jason Cain',
    image: '/images/speakers/dr-jason-cain.png',
  },
  {
    id: 'dr-chanaka-munasinghe',
    name: 'Dr. Chanaka Munasinghe',
    image: '/images/speakers/dr-chanaka-munasinghe.png',
  },
  {
    id: 'colin-tompkins',
    name: 'Colin Tompkins',
    image: '/images/speakers/colin-tompkins.png',
  },
];

/** Find speaker by exact or normalized name (case-insensitive, trimmed). */
export function getSpeakerById(id: string): Speaker | undefined {
  return speakers.find((s) => s.id === id);
}

/** Find speaker by schedule item speaker name for linking. */
export function getSpeakerByName(name: string): Speaker | undefined {
  const normalized = name?.trim().toLowerCase() ?? '';
  if (!normalized) return undefined;
  return speakers.find(
    (s) => s.name.trim().toLowerCase() === normalized
  );
}
