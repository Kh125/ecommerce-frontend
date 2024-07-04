import Rating from "./Rating";

const CourseCard = () => {
  return (
    <div className="bg-white rounded-lg border p-4">
      <img
        src="https://placehold.co/300x200/d1d4ff/352cb5.png"
        alt="Placeholder Image"
        className="w-full h-48 rounded-md object-cover"
      />
      <div className="px-1 py-4">
        <div className="font-bold text-xl mb-2">Spring Boot Beginner</div>
        <Rating />
      </div>
      <div className="px-1 py-4">
        <a
          href="#"
          className="text-blue-500 hover:bg-gray-100 hover:border-2 px-2 py-2 rounded-md border-gray-400 border-2"
        >
          View Course
        </a>
      </div>
    </div>
  );
};

export default CourseCard;
