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
    id: 'dr-victor-li',
    name: 'Dr. Victor Li',
    image: '/images/speakers/dr-victor-li.png',
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
  {
    id: 'dr-albert-zeng',
    name: 'Dr. Albert Zeng',
    image: '/images/speakers/dr-albert-zeng.png',
  },
  {
    id: 'greg-pavlik',
    name: 'Greg Pavlik',
    image: '/images/speakers/greg-pavlik.png',
  },
  {
    id: 'kam-kittrell',
    name: 'Kam Kittrell',
    image: '/images/speakers/kam-kittrell.png',
  },
  {
    id: 'rashmi-chatty',
    name: 'Rashmi Chatty',
    image: '/images/speakers/rashmi-chatty.png',
  },
  {
    id: 'sandeep-bomthapalli',
    name: 'Sandeep Bomthapalli',
    image: '/images/speakers/sandeep-bomthapalli.png',
  },
  {
    id: 'susan-graham',
    name: 'Susan Graham',
    image: '/images/speakers/susan-graham.png',
  },
  {
    id: 'waheed-brown',
    name: 'Waheed Brown',
    image: '/images/speakers/waheed-brown.png',
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
