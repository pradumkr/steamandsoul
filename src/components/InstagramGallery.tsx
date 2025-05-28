import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram } from 'lucide-react';

// Normally we would use a proper Instagram API or embed, but for this demo
// we'll use placeholder images from Pexels that represent what might be on Instagram
const instagramPosts = [
  {
    id: 1,
    image: 'https://images.pexels.com/photos/6646233/pexels-photo-6646233.jpeg?auto=compress&cs=tinysrgb&w=600',
    likes: 124,
    caption: 'Our chef preparing fresh momos! #SteamAndSoul #FreshFood'
  },
  {
    id: 2,
    image: 'https://images.pexels.com/photos/4828093/pexels-photo-4828093.jpeg?auto=compress&cs=tinysrgb&w=600',
    likes: 98,
    caption: 'New chocolate momos just dropped! #DessertMomos #SweetTreats'
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/5409037/pexels-photo-5409037.jpeg?auto=compress&cs=tinysrgb&w=600',
    likes: 145,
    caption: 'The perfect weekend starter! #MomoLove #WeekendVibes'
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=600',
    likes: 87,
    caption: 'Our cozy dining area is ready for you! #DineWithUs'
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg?auto=compress&cs=tinysrgb&w=600',
    likes: 201,
    caption: 'Meet the team that makes magic happen! #TeamSteamAndSoul'
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/7441761/pexels-photo-7441761.jpeg?auto=compress&cs=tinysrgb&w=600',
    likes: 176,
    caption: 'Fresh ingredients, always! #QualityFirst #FreshMomos'
  },
  {
    id: 7,
    image: 'https://images.pexels.com/photos/4478397/pexels-photo-4478397.jpeg?auto=compress&cs=tinysrgb&w=600',
    likes: 132,
    caption: 'Tandoori momos coming right up! #HotAndSpicy'
  },
  {
    id: 8,
    image: 'https://images.pexels.com/photos/9609849/pexels-photo-9609849.jpeg?auto=compress&cs=tinysrgb&w=600',
    likes: 154,
    caption: 'Customer satisfaction is our priority! #HappyCustomers'
  },
];

const InstagramGallery: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    },
  };

  return (
    <div>
      <div className="flex items-center justify-center mb-8">
        <a 
          href="https://www.instagram.com/steamandsoul_/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center text-red-600 hover:text-red-700 transition-colors"
        >
          <Instagram className="mr-2" size={24} />
          <span className="text-lg font-medium">@steamandsoul_</span>
        </a>
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {instagramPosts.map((post) => (
          <motion.div
            key={post.id}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="card overflow-hidden"
          >
            <div className="relative group">
              <img 
                src={post.image} 
                alt={`Instagram post ${post.id}`} 
                className="w-full aspect-square object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-sm line-clamp-2">{post.caption}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <div className="mt-8 text-center">
        <a 
          href="https://www.instagram.com/steamandsoul_/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn btn-secondary"
        >
          Follow Us on Instagram
        </a>
      </div>
    </div>
  );
};

export default InstagramGallery;