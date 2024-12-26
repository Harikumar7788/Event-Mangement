interface EventCardProps {
    title: string;
    date: string;
    location: string;
    description: string;
  }
  
  const EventCard = ({ title, date, location, description }: EventCardProps) => (
    <div className="bg-white rounded shadow-md p-4 mb-4">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{date} | {location}</p>
      <p className="mt-4">{description}</p>
    </div>
  );
  
  export default EventCard;
  