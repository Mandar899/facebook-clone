import Image from 'next/image';

function Contact({ src, name }) {
  return (
    <div className='relative flex items-center space-x-3 mb-2 hover:bg-gray-200 p-2 cursor-pointer rounded-xl'>
      <Image
        className='rounded-full'
        src={src}
        width={50}
        height={50}
        layout='fixed'
      />
      <p className='font-medium text-gray-800'>{name}</p>
      <div className='absolute bottom-2 left-8 bg-[#78DE45] h-3.5 w-3.5 border-2 border-gray-100 rounded-full'></div>
    </div>
  );
}

export default Contact;
