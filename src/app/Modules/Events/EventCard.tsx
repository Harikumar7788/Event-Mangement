// src/app/Modules/Events/EventCard.tsx
import Link from 'next/link';

const EventCard = ({ event }: { event: { id: string; title: string; description: string; date: string; location: string } }) => {
  const { id, title, description, date, location } = event;

  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-md hover:shadow-lg">
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="text-sm text-gray-500">{location}</p>

      <Link href={`/EventDetails/${id}`}>
        <button className="mt-4 bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-700">Learn More</button>
      </Link>
    </div>
  );
};

export default EventCard;