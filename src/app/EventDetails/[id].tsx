// src/app/Modules/Events/[id].tsx
import { useRouter } from 'next/router';
import { events } from '../Modules/Events/eventsData'; // Import the event data

const EventDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Get the event ID from the URL

  // Find the event based on the ID
  const eventData = events.find(event => event.id === id);

  if (!eventData) {
    return <p>Event not found or invalid data</p>; 
  }

  const { title, description, date, location } = eventData;

  return (
    <div className="p-8 bg-white shadow-md rounded-lg">
      <h2 className="text-3xl font-semibold text-primary mb-4">{title}</h2>
      <p className="text-lg text-gray-600 mb-4">{description}</p>
      <p className="text-sm text-gray-500">{date}</p>
      <p className="text-sm text-gray-500">{location}</p>
      <button className="mt-4 bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-700" onClick={() => router.back()}>Go Back</button>
    </div>
  );
};

export default EventDetail;