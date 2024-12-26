// src/app/Modules/Events/EventList.tsx
import EventCard from './EventCard';
import { events } from './eventsData'; // Import the event data

const EventList = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
    {events.map(event => (
      <EventCard key={event.id} event={event} />
    ))}
  </div>
);

export default EventList;