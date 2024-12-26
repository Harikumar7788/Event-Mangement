// src/app/page.tsx
import EventList from './Modules/Events/EventList';

const Page = () => (
  <div className="p-6">
    <h1 className="text-4xl font-semibold text-primary text-center mb-8">Upcoming Events</h1>
    <EventList />
  </div>
);

export default Page;
