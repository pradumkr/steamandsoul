import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Instagram } from 'lucide-react';

// Images
import SNSInsta01 from '../assets/SNS-insta01.jpg';
import SNSInsta02 from '../assets/SNS-insta02.jpg';
import SNSInsta03 from '../assets/SNS-insta03.jpg';
import SNSInsta04 from '../assets/SNS-insta04.jpg';
import SNSInsta05 from '../assets/SNS-insta05.jpg';
import SNSInsta06 from '../assets/SNS-insta06.jpg';
import SNSInsta07 from '../assets/SNS-insta07.jpg';
import SNSInsta08 from '../assets/SNS-insta08.jpg';

// Normally we would use a proper Instagram API or embed, but for this demo
// we'll use placeholder images from Pexels that represent what might be on Instagram
const instagramPosts = [
  {
    id: 1,
    image: SNSInsta01,
    likes: 124,
    caption: 'We look good outside, but we taste even better inside 😎🥟'
  },
  {
    id: 2,
    image: SNSInsta02,
    likes: 98,
    caption: 'Customer satisfaction is our priority! #HappyCustomers'
  },
  {
    id: 3,
    image: SNSInsta03,
    likes: 145,
    caption: 'From our kitchen to your cravings — we’re officially open! 🎉.'
  },
  {
    id: 4,
    image: SNSInsta04,
    likes: 87,
    caption: 'Our cozy dining area is ready for you! #DineWithUs'
  },
  {
    id: 5,
    image: SNSInsta05,
    likes: 201,
    caption: 'Customer satisfaction is our priority! #HappyCustomers'
  },
  {
    id: 6,
    image: SNSInsta06,
    likes: 176,
    caption: 'Fresh ingredients, always! #QualityFirst #FreshMomos'
  },
  {
    id: 7,
    image: SNSInsta07,
    likes: 132,
    caption: 'The real secret ingredient? Amazing customers like YOU! 😍'
  },
  {
    id: 8,
    image: SNSInsta08,
    likes: 154,
    caption: 'Our chef preparing fresh momos! #SteamAndSoul #FreshFood'
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