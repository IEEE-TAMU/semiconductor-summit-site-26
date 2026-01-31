'use client';

const scheduleItems = [
  {
    time: '9:00 AM',
    title: 'Registration & Networking',
    description: 'Event check in and networking with sponsors and attendees. Breakfast options available.',
  },
  {
    time: '10:00 AM',
    title: 'Welcome Remarks',
    description: 'Welcome remarks from the Summit Chairs.',
  },
  {
    time: '10:20 AM',
    title: 'Keynote: Heterogeneous Integration and the Role of Hardware in Advancing AI',
    description: 'This talk will provide insight into how cutting-edge research into increasing semiconductor performance led by the industry is driving the future of AI development. For students, this is a unique opportunity to hear how classroom fundamentals translate into cutting-edge technology and real impact, and how hardware innovation continues to define what\'s possible in AI.',
    speaker: 'Timothy Lee',
    speakerTitle: 'Boeing Technical Fellow and 2025 IEEE USA President',
  },
  {
    time: '10:45 AM',
    title: 'Speaker',
    description: 'Speaker details to be announced.',
  },
  {
    time: '11:00 AM',
    title: 'Break',
    description: '',
  },
  {
    time: '11:15 AM',
    title: 'Panel or Breakout Sessions',
    description: 'Panel details to be announced.',
  },
  {
    time: '12:00 PM',
    title: 'Networking Lunch',
    description: 'Networking lunch with sponsors and attendees.',
  },
  {
    time: '1:05 PM',
    title: 'Keynote: Scaling AI Beyond Moore\'s Law: SerDes, 3D-IC Interconnects, Silicon Photonics, and DTCO for the Next Generation of Computing',
    description: 'This talk will provide an inside look at how the world\'s most advanced semiconductor systems are being designed, optimized, and scaled in industry — and what this means for the next era of AI hardware. With TSMC at the heart of the global semiconductor ecosystem, Dr. Shenggao Li\'s work directly contributes to the cutting-edge manufacturing and advanced packaging technologies that are powering the world\'s AI compute revolution — from data centers to next-generation accelerators. For students, this is a rare opportunity to learn directly from a leader shaping real production silicon. For industry, it highlights the technical depth and impact driving this year\'s Summit.',
    speaker: 'Dr. Shenggao Li',
    speakerTitle: 'TSMC',
  },
  {
    time: '1:30 PM',
    title: 'Panel, Breakout Session, or Workshop',
    description: 'Session details to be announced.',
  },
  {
    time: '2:00 PM',
    title: 'Exhibition Hall Focus/Networking',
    description: 'Explore the exhibition hall and network with exhibitors.',
  },
  {
    time: '2:35 PM',
    title: 'Speaker',
    description: 'Speaker details to be announced.',
  },
  {
    time: '2:50 PM',
    title: 'Break',
    description: '',
  },
  {
    time: '3:05 PM',
    title: 'Speaker',
    description: 'Speaker details to be announced.',
  },
  {
    time: '3:30 PM',
    title: 'Panel',
    description: 'Panel details to be announced.',
  },
  {
    time: '3:50 PM',
    title: 'Student Research Spotlight',
    description: 'Showcasing student research and innovations.',
  },
  {
    time: '4:35 PM',
    title: 'Closing Remarks',
    description: 'Final thoughts and wrap-up from event organizers.',
  },
  {
    time: '4:45 PM',
    title: 'Networking Reception',
    description: 'Mocktail appetizers and networking reception.',
  },
];

export default function Schedule() {
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
          {scheduleItems.map((item, index) => (
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
                      {item.speaker}
                      {item.speakerTitle && (
                        <span className="text-gray-600 font-normal"> • {item.speakerTitle}</span>
                      )}
                    </p>
                  )}
                  <p className="text-gray-600 text-sm leading-snug">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

