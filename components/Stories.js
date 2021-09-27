import { useSession } from 'next-auth/client';
import ProfileCard from './ProfileCard';
import StoryCard from './StoryCard';

const stories = [
  {
    name: 'Elon Musk',
    src: 'https://links.papareact.com/4zn',
    profile: 'https://links.papareact.com/kxk',
  },
  {
    name: 'Jeff Bezoz',
    src: 'https://links.papareact.com/k2j',
    profile: 'https://links.papareact.com/f0p',
  },
  {
    name: 'Mark Zuckerberg',
    src: 'https://links.papareact.com/xql',
    profile: 'https://links.papareact.com/snf',
  },
  {
    name: 'Bill Gates',
    src: 'https://links.papareact.com/4u4',
    profile: 'https://links.papareact.com/zvy',
  },
  // {
  //   name: 'Harry Potter',
  //   src: 'https://links.papareact.com/d0c',
  //   profile: 'https://links.papareact.com/d0c',
  // },
];

function Stories() {
  const [session] = useSession();
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
      <ProfileCard
        src={session.user.image}
        profile={session.user.image}
        name='Create story'
      />
      {stories.map((story) => (
        <StoryCard
          key={story.src}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
}

export default Stories;
