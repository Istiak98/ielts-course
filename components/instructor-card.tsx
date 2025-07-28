interface InstructorCardProps {
  name: string;
  designation: string;
  image: string;
  bio?: string;
}

export default function InstructorCard({
  name,
  designation,
  image,
  bio,
}: InstructorCardProps) {
  return (
    <div className='flex items-start space-x-4 bg-white p-4 rounded-lg border'>
      <img
        src={image || '/placeholder.svg?height=80&width=80&query=instructor'}
        alt={name}
        className='w-16 h-16 rounded-full object-cover flex-shrink-0'
      />
      <div className='flex-1'>
        <h3 className='text-xl font-semibold text-gray-900'>{name}</h3>
        <p className='text-md text-blue-600 mb-2'>{designation}</p>
        {bio && (
          <div
            className='text-sm text-gray-600 line-clamp-3'
            dangerouslySetInnerHTML={{ __html: bio }}
          />
        )}
      </div>
    </div>
  );
}
