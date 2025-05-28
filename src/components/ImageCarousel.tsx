import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const menuItems = [
  {
    id: 1,
    name: 'Classic Steamed Momos',
    description: 'Traditional momos with a juicy filling of minced chicken, served with spicy tomato chutney.',
    price: '₹180',
    image: 'https://images.pexels.com/photos/5409027/pexels-photo-5409027.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 2,
    name: 'Paneer Momos',
    description: 'Soft momos filled with spiced cottage cheese and vegetables, served with schezwan sauce.',
    price: '₹160',
    image: 'https://images.pexels.com/photos/9609839/pexels-photo-9609839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 3,
    name: 'Fried Chicken Momos',
    description: 'Deep-fried momos with a delicious chicken filling, crispy outside and juicy inside.',
    price: '₹220',
    image: 'https://images.pexels.com/photos/14467574/pexels-photo-14467574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 4,
    name: 'Tandoori Momos',
    description: 'Grilled momos marinated in tandoori spices, served with mint yogurt dip.',
    price: '₹240',
    image: 'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  {
    id: 5,
    name: 'Chocolate Momos',
    description: 'Sweet momos filled with melted chocolate and served with vanilla ice cream.',
    price: '₹200',
    image: 'https://images.pexels.com/photos/4553022/pexels-photo-4553022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
];

const ImageCarousel: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="menu-carousel"
      >
        {menuItems.map((item) => (
          <SwiperSlide key={item.id}>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="card h-full"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {item.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-red-800 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <button className="btn btn-secondary w-full">Order Now</button>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
};

export default ImageCarousel;