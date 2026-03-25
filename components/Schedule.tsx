import { getScheduleFromSheets } from '@/lib/googleSheets';
import { getSpeakerByName } from '@/lib/speakers';
import type { ScheduleItem } from '@/types/schedule';

export const revalidate = 60;

function renderSpeakerLinks(speakerText: string) {
  const speakerNames = speakerText
    .split(/\s*(?:&| and )\s*/i)
    .map((name) => name.trim())
    .filter(Boolean);

  if (speakerNames.length === 0) return speakerText;

  return speakerNames.map((name, index) => {
    const speaker = getSpeakerByName(name);
    return (
      <span key={`${name}-${index}`}>
        {index > 0 && <span> & </span>}
        {speaker ? (
          <a
            href={`/#speakers-${speaker.id}`}
            className="text-red-800 hover:text-red-600 underline underline-offset-2"
          >
            {name}
          </a>
        ) : (
          name
        )}
      </span>
    );
  });
}

// Fallback schedule data if Google Sheets fails
const fallbackScheduleItems: ScheduleItem[] = [
  {
    time: '8:00 AM',
    title: 'Registration & Networking',
    description: '',
  },
  {
    time: '9:00 AM',
    title: 'Welcome Remarks',
    description: '',
  },
  {
    time: '9:10 AM',
    title: 'KEYNOTE: Heterogeneous Integration and the Role of Hardware in Advancing AI',
    description: 'This talk will provide insight into how cutting-edge research into increasing semiconductor performance led by the industry is driving the future of AI development. For students, this is a unique opportunity to hear how classroom fundamentals translate into cutting-edge technology and real impact, and how hardware innovation continues to define what\'s possible in AI.',
    speaker: 'Timothy Lee',
    speakerTitle: 'Boeing Technical Fellow and 2025 IEEE USA President',
  },
  {
    time: '9:50 AM',
    title: 'Designing for Manufacturability: Bridging the Two Halves of the Chipmaking Process',
    description: 'Explore how design works in conjunction with manufacturing practices in order to achieve the maximum output of viable chips in the fabrication pipeline.',
    speaker: 'Dr. Jason Cain',
    speakerTitle: 'AMD - Fellow Silicon Design Engineer',
  },
  {
    time: '10:20 AM',
    title: 'Break',
    description: '',
  },
  {
    time: '10:30 AM',
    title: 'KEYNOTE: Semiconductor Fabrication & Advances in the Recent Past',
    description: 'This talk will explore how modern fabrication technologies are evolving, what innovations are shaping the future of semiconductor manufacturing, and how students and researchers can engage with these rapidly advancing fields.',
    speaker: 'Dr. Chanaka Munasinghe',
    speakerTitle: 'Intel - University Programs Director',
  },
  {
    time: '11:10 AM',
    title: 'Design for AI, AI for Design',
    description: 'AI semiconductor requirements require new technologies for Electronic Design Automation to handle the complexity. At the same time, AI technology can improve engineering efficiency to meet schedules. Cadence is making great strides on both vectors simultaneously. This presentation will discuss some of the key challenges, solutions, and future plans to enhance AI semiconductor design.',
    speaker: 'Kam Kittrell',
    speakerTitle: 'Cadence - VP of Product Management for the Digital and Signoff Group',
  },
  {
    time: '11:40 AM',
    title: 'Break',
    description: '',
  },
  {
    time: '11:50 AM',
    title: 'KEYNOTE: Scaling AI Beyond Moore\'s Law: SerDes, 3D-IC Interconnects, Silicon Photonics, and DTCO for the Next Generation of Computing',
    description: 'This talk will provide an inside look at how the world\'s most advanced semiconductor systems are being designed, optimized, and scaled in industry — and what this means for the next era of AI hardware. With TSMC at the heart of the global semiconductor ecosystem, Dr. Shenggao Li\'s work directly contributes to the cutting-edge manufacturing and advanced packaging technologies that are powering the world\'s AI compute revolution — from data centers to next-generation accelerators. For students, this is a rare opportunity to learn directly from a leader shaping real production silicon. For industry, it highlights the technical depth and impact driving this year\'s Summit.',
    speaker: 'Dr. Victor Li',
    speakerTitle: 'TSMC - Director of SerDes, 3D-IC Interconnect, and DTCO',
  },
  {
    time: '12:30 PM',
    title: 'Lunch & Networking',
    description: 'Enjoy lunch, explore the exhibition hall, and network!',
  },
  {
    time: '1:30 PM',
    title: 'Breakout Sessions',
    description: 'Be sure to register for TI, Infineon, Keysight, Arm, or Cadence\'s breakout sessions!',
  },
  {
    time: '2:10 PM',
    title: 'Different Pathways in the Semiconductor Industry',
    description: 'Panelists: Imagibob, Texas Instruments, SwRI, Keysight, and Arm',
  },
  {
    time: '2:50 PM',
    title: 'Break',
    description: '',
  },
  {
    time: '3:00 PM',
    title: 'The AI-Augmented Engineer: How the Role of Hardware Engineers is Changing',
    description: '',
    speaker: 'Susan Graham',
    speakerTitle: 'Arm - Technical Director & Senior Principal Engineer',
  },
  {
    time: '3:40 PM',
    title: 'Edge AI: Markets & Innovation',
    description: '',
    speaker: 'Gregory Guez & Sarah Hemmer',
    speakerTitle:
      'Infineon - Senior Director, Global Head of IoT and Edge AI Solutions Marketing & Imagibob - CEO',
  },
  {
    time: '4:10 PM',
    title: 'Break',
    description: '',
  },
  {
    time: '4:20 PM',
    title: 'KEYNOTE: Accelerating AI Through Physical Design at Scale',
    description: 'As AI systems scale, performance is increasingly limited not by algorithms or RTL, but by the physical realities of wires, power delivery, clocking, and layout. This talk examines how AI acceleration has shifted from a compute-centric problem to a system-level physical design challenge, drawing on lessons from large-scale, multi-chip AI implementations. Through a physical-design lens, it shows how floorplanning, interconnect, power, and clocking decisions ultimately determine which AI architectures can be built, and which never make it to silicon.',
    speaker: 'Rashmi Chatty',
    speakerTitle: 'Marvell - Distinguished Engineer',
  },
  {
    time: '5:00 PM',
    title: 'IEEE USA',
    description: 'Learn more about IEEE initiatives',
  },
  {
    time: '5:10 PM',
    title: 'Closing Remarks, Prize Announcement, & Networking Reception',
    description: 'Join us for the closing remarks and be sure to stay for our networking reception!',
  },
];

export default async function Schedule() {
  let scheduleItems: ScheduleItem[] = fallbackScheduleItems;

  try {
    scheduleItems = await getScheduleFromSheets();
  } catch (error) {
    console.error('Failed to fetch schedule from Google Sheets, using fallback:', error);
  }
  return (
    <section
      id="schedule"
      className="relative py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Schedule
          </h2>
          <div className="w-16 h-0.5 bg-red-800 mx-auto" />
        </div>

        <div className="text-center mb-8">
          NOTE: The schedule will be updated as we get closer to the event.
        </div>

        <div className="space-y-0">
          {scheduleItems.map((item, index) => {
            return (
              <div
                key={index}
                className="border-b border-gray-200 last:border-b-0 py-3"
              >
                <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                  <div className="shrink-0 w-20 sm:w-24">
                    <span className="text-red-800 font-semibold text-sm">{item.time}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-gray-900 mb-1">{item.title}</h3>
                    {item.speaker && (
                      <p className="text-gray-800 text-sm font-medium mb-1">
                        <>
                          {renderSpeakerLinks(item.speaker)}
                          {item.speakerTitle && (
                            <span className="text-gray-600 font-normal"> • {item.speakerTitle}</span>
                          )}
                        </>
                      </p>
                    )}
                    <p className="text-gray-600 text-sm leading-snug">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

