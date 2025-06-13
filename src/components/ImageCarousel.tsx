import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//chiecken momo images
import chickenSteamMomoImage from './../assets/chicken-steam-momo.jpeg';
import chickenFryMomoImage from './../assets/chicken-fry-momo.jpeg';
import chickenButterPanFryMomoImage from './../assets/chicken-butter-pan-fry-momo.jpeg';
import gandhrajChickenMomoImage from './../assets/chicken-gandhraj-momo.jpeg';
import chickenCheeseMomoImage from './../assets/chicken-cheese-momo.jpeg';
import chickenCheeseFryMomoImage from './../assets/chicken-cheese-fry-momo.jpeg';
import chickenKurkureMomoImage from './../assets/chicken-kurkure-momo.jpeg';
import chickenGravyMomoImage from './../assets/chicken-gravy-momo.jpeg';
import chickenChillyMomoImage from './../assets/chicken-chilly-momo.jpeg';
import chickenAfghaniMomoImage from './../assets/chicken-afghani-momo.jpeg';

//prawn momo images
import prawnSteamMomoImage from './../assets/prawn-steam-momo.jpeg';
import prawnFriedMomoImage from './../assets/prawn-fry-momo.jpeg';
import prawnButterPanFryMomoImage from './../assets/prawn-butter-pan-fry-momo.jpeg';
import prawnCheeseMomoImage from './../assets/prawn-cheese-momo.jpeg';
import prawnCheeseFryMomoImage from './../assets/prawn-cheese-fry-momo.jpeg';
import prawnKurkureMomoImage from './../assets/prawn-kurkure-momo.jpeg';
import prawnGravyMomoImage from './../assets/prawn-gravy-momo.jpeg';
import prawnChilliMomoImage from './../assets/prawn-chilli-momo.jpeg';
import prawnAfghaniMomoImage from './../assets/prawn-afghani-momo.jpeg';


//paneer momo images
import paneerCheeseFryMomoImage from './../assets/paneer-cheese-fry-momo.jpeg';
import paneerCheeseMomoImage from './../assets/paneer-cheese-momo.jpeg';
import paneerSteamMomoImage from './../assets/paneer-steam-momo.jpeg';
import paneerFryMomoImage from './../assets/paneer-fry-momo.jpeg';
import paneerButterPanFryMomoImage from './../assets/paneer-butter-pan-fry-momo.jpeg';
import paneerKurkureMomoImage from './../assets/paneer-kurkure-momo.jpeg';
import paneerGravyMomoImage from './../assets/paneer-gravy-momo.jpeg';
import paneerChilliMomoImage from './../assets/paneer-chilli-momo.jpeg';
import paneerAfghaniMomoImage from './../assets/paneer-afghani-momo.jpeg';

//mutton momo images
import muttonSteamMomoImage from './../assets/mutton-steam-momo.jpeg';
import muttonFryMomoImage from './../assets/mutton-fry-momo.jpeg';
import muttonButterPanFryMomoImage from './../assets/mutton-butter-pan-fry-momo.jpeg';
import muttonKurkureMomoImage from './../assets/mutton-kurkure-momo.jpeg';

const menuItems = [
  {
      id: "chicken-1",
      name: "Chicken Steam Momo",
      price: "₹60",
      description: "Garden-fresh vegetables, ginger, garlic",
      longDescription: "Handcrafted dumplings filled with fresh seasonal vegetables, aromatic ginger, and garlic. Served with our signature red chili sauce.",
      image: chickenSteamMomoImage,
      spiceLevel: "Mild",
      ingredients: ["Cabbage", "Carrots", "Green Onions", "Ginger", "Garlic"],
      isVegetarian: false
    },
    {
      id: "chicken-2",
      name: "Chicken Gandhraj Momo",
      price: "₹70",
      description: "Minced chicken, fresh herbs, spring onions",
      longDescription: "Succulent minced chicken mixed with aromatic herbs and spring onions. Our bestseller.",
      image: gandhrajChickenMomoImage,
      spiceLevel: "Medium",
      ingredients: ["Chicken", "Mixed Herbs", "Spring Onions", "Garlic", "Black Pepper"],
      isVegetarian: false
    },
    {
      id: "chicken-3",
      name: "Chicken Fry Momo",
      price: "₹70",
      description: "Minced chicken, fresh herbs, spring onions",
      longDescription: "Succulent minced chicken mixed with aromatic herbs and spring onions. Our bestseller.",
      image: chickenFryMomoImage,
      spiceLevel: "Medium",
      ingredients: ["Chicken", "Mixed Herbs", "Spring Onions", "Garlic", "Black Pepper"],
      isVegetarian: false
    },
    {
      id: "chicken-4",
      name: "Chicken Butter Pan Fry Momo",
      price: "₹90",
      description: "Minced chicken, fresh herbs, spring onions",
      longDescription: "Succulent minced chicken mixed with aromatic herbs and spring onions. Our bestseller.",
      image: chickenButterPanFryMomoImage,
      spiceLevel: "Medium",
      ingredients: ["Chicken", "Mixed Herbs", "Spring Onions", "Garlic", "Black Pepper"],
      isVegetarian: false
    },
    {
      id: "chicken-5",
      name: "Chicken Cheese Momo",
      price: "₹120",
      description: "Minced chicken, fresh herbs, spring onions",
      longDescription: "Succulent minced chicken mixed with aromatic herbs and spring onions. Our bestseller.",
      image: chickenCheeseMomoImage,
      spiceLevel: "Medium",
      ingredients: ["Chicken", "Mixed Herbs", "Spring Onions", "Garlic", "Black Pepper"],
      isVegetarian: false
    },
    {
      id: "chicken-6",
      name: "Chicken Cheese Fry Momo",
      price: "₹130",
      description: "Minced chicken, fresh herbs, spring onions",
      longDescription: "Succulent minced chicken mixed with aromatic herbs and spring onions. Our bestseller.",
      image: chickenCheeseFryMomoImage,
      spiceLevel: "Medium",
      ingredients: ["Chicken", "Mixed Herbs", "Spring Onions", "Garlic", "Black Pepper"],
      isVegetarian: false
    },
    {
      id: "chicken-7",
      name: "Chicken Kurkure Momo",
      price: "₹130",
      description: "Minced chicken, fresh herbs, spring onions",
      longDescription: "Succulent minced chicken mixed with aromatic herbs and spring onions. Our bestseller.",
      image: chickenKurkureMomoImage,
      spiceLevel: "Medium",
      ingredients: ["Chicken", "Mixed Herbs", "Spring Onions", "Garlic", "Black Pepper"],
      isVegetarian: false
    },
    {
      id: "chicken-8",
      name: "Chicken Gravy Momo",
      price: "₹140",
      description: "Minced chicken, fresh herbs, spring onions",
      longDescription: "Succulent minced chicken mixed with aromatic herbs and spring onions. Our bestseller.",
      image: chickenGravyMomoImage,
      spiceLevel: "Medium",
      ingredients: ["Chicken", "Mixed Herbs", "Spring Onions", "Garlic", "Black Pepper"],
      isVegetarian: false
    },
    {
      id: "chicken-9",
      name: "Chicken Chilly Momo",
      price: "₹140",
      description: "Minced chicken, fresh herbs, spring onions",
      longDescription: "Succulent minced chicken mixed with aromatic herbs and spring onions. Our bestseller.",
      image: chickenChillyMomoImage,
      spiceLevel: "Extra Hot",
      ingredients: ["Chicken", "Mixed Herbs", "Spring Onions", "Garlic", "Black Pepper"],
      isVegetarian: false
    },
    {
      id: "chicken-10",
      name: "Chicken Afghani Momo",
      price: "₹150",
      description: "Minced chicken, fresh herbs, spring onions",
      longDescription: "Succulent minced chicken mixed with aromatic herbs and spring onions. Our bestseller.",
      image: chickenAfghaniMomoImage,
      spiceLevel: "Medium",
      ingredients: ["Chicken", "Mixed Herbs", "Spring Onions", "Garlic", "Black Pepper"],
      isVegetarian: false
    },
    {
      id: "paneer-1",
      name: "Paneer Steam Momo",
      price: "₹80",
      description: "Spicy paneer, schezwan sauce",
      longDescription: "Our signature spicy paneer momos tossed in house-made schezwan sauce. Not for the faint-hearted!",
      image: paneerSteamMomoImage,
      spiceLevel: "Mild",
      ingredients: ["Paneer", "Schezwan Sauce", "Dried Red Chilies", "Garlic"],
      isVegetarian: true
    },
    {
      id: "paneer-2",
      name: "Paneer Fry Momo",
      price: "₹90",
      description: "Spicy paneer filling, herbs",
      longDescription: "Delicious paneer mixed with spices and herbs, wrapped in a thin dough and fried to perfection.",
      image: paneerFryMomoImage,
      spiceLevel: "Medium",
      ingredients: ["Paneer", "Spices", "Herbs"],
      isVegetarian: true
    },
    {
      id: "paneer-3",
      name: "Paneer Butter Pan Fry Momo",
      price: "₹110",
      description: "Spicy paneer filling, herbs",
      longDescription: "Delicious paneer mixed with spices and herbs, wrapped in a thin dough and fried to perfection.",
      image: paneerButterPanFryMomoImage,
      spiceLevel: "Medium",
      ingredients: ["Paneer", "Spices", "Herbs"],
      isVegetarian: true
    },
    {
      id: "paneer-4",
      name: "Paneer Cheese Momo",
      price: "₹130",
      description: "Spicy paneer, schezwan sauce",
      longDescription: "Our signature spicy paneer momos tossed in house-made schezwan sauce. Not for the faint-hearted!",
      image: paneerCheeseMomoImage,
      spiceLevel: "Medium",
      ingredients: ["Paneer", "Schezwan Sauce", "Dried Red Chilies", "Garlic"],
      isVegetarian: true
    },
    {
      id: "paneer-5",
      name: "Paneer Cheese Fry Momo",
      price: "₹140",
      description: "Butter-fried paneer, herbs",
      longDescription: "Paneer sautéed in butter with a blend of herbs, served in a crispy momo shell.",
      image: paneerCheeseFryMomoImage,
      spiceLevel: "Medium",
      ingredients: ["Paneer", "Butter", "Herbs"],
      isVegetarian: true
    },
    {
      id: "paneer-6",
      name: "Paneer Kurkure Momo",
      price: "₹140",
      description: "Butter-fried paneer, herbs",
      longDescription: "Paneer sautéed in butter with a blend of herbs, served in a crispy momo shell.",
      image: paneerKurkureMomoImage,
      spiceLevel: "Medium",
      ingredients: ["Paneer", "Butter", "Herbs"],
      isVegetarian: true
    },
    {
      id: "paneer-7",
      name: "Paneer Gravy Momo",
      price: "₹150",
      description: "Butter-fried paneer, herbs",
      longDescription: "Paneer sautéed in butter with a blend of herbs, served in a crispy momo shell.",
      image: paneerGravyMomoImage,
      spiceLevel: "Medium",
      ingredients: ["Paneer", "Butter", "Herbs"],
      isVegetarian: true
    },
    {
      id: "paneer-8",
      name: "Paneer Chilli Momo",
      price: "₹150",
      description: "Butter-fried paneer, herbs",
      longDescription: "Paneer sautéed in butter with a blend of herbs, served in a crispy momo shell.",
      image: paneerChilliMomoImage,
      spiceLevel: "Extra Hot",
      ingredients: ["Paneer", "Butter", "Herbs"],
      isVegetarian: true
    },
    {
      id: "paneer-9",
      name: "Paneer Afghani Momo",
      price: "₹160",
      description: "Butter-fried paneer, herbs",
      longDescription: "Paneer sautéed in butter with a blend of herbs, served in a crispy momo shell.",
      image: paneerAfghaniMomoImage,
      spiceLevel: "Medium",
      ingredients: ["Paneer", "Butter", "Herbs"],
      isVegetarian: true
    },
    {
      id: "prawn-1",
      name: "Prawn Steam Momo",
      price: "₹80",
      description: "Chargrilled cottage cheese momos",
      longDescription: "Momos stuffed with spiced paneer, grilled in our tandoor. Served with mint chutney.",
      image: prawnSteamMomoImage,
      spiceLevel: "Mild",
      ingredients: ["Paneer", "Tandoori Spices", "Bell Peppers", "Onions"],
      isVegetarian: false
    },
    {
      id: "prawn-2",
      name: "Prawn Fry Momo",
      price: "₹90",
      description: "Spicy prawn filling, herbs",
      longDescription: "Delicious prawns mixed with spices and herbs, wrapped in a thin dough and fried to perfection.",
      image: prawnFriedMomoImage,
      spiceLevel: "Medium",
      ingredients: ["Prawns", "Spices", "Herbs"],
      isVegetarian: false
    },
    {
      id: "prawn-3",
      name: "Prawn Butter Pan Fry Momo",
      price: "₹110",
      description: "Butter-fried prawns, herbs",
      longDescription: "Prawns sautéed in butter with a blend of herbs, served in a crispy momo shell.",
      image: prawnButterPanFryMomoImage,
      spiceLevel: "Medium",
      ingredients: ["Prawns", "Butter", "Herbs"],
      isVegetarian: false
    },
    {
      id: "prawn-4",
      name: "Prawn Cheese Momo",
      price: "₹130",
      description: "Butter-fried prawns, herbs",
      longDescription: "Prawns sautéed in butter with a blend of herbs, served in a crispy momo shell.",
      image: prawnCheeseMomoImage,
      spiceLevel: "Medium",
      ingredients: ["Prawns", "Butter", "Herbs"],
      isVegetarian: false
    },
    {
      id: "prawn-5",
      name: "Prawn Cheese Fry Momo",
      price: "₹140",
      description: "Butter-fried prawns, herbs",
      longDescription: "Prawns sautéed in butter with a blend of herbs, served in a crispy momo shell.",
      image: prawnCheeseFryMomoImage,
      spiceLevel: "Medium",
      ingredients: ["Prawns", "Butter", "Herbs"],
      isVegetarian: false
    },
    {
      id: "prawn-6",
      name: "Prawn Kurkure Momo",
      price: "₹140",
      description: "Butter-fried prawns, herbs",
      longDescription: "Prawns sautéed in butter with a blend of herbs, served in a crispy momo shell.",
      image: prawnKurkureMomoImage,
      spiceLevel: "Medium",
      ingredients: ["Prawns", "Butter", "Herbs"],
      isVegetarian: false
    },
    {
      id: "prawn-7",
      name: "Prawn Gravy Momo",
      price: "₹150",
      description: "Butter-fried prawns, herbs",
      longDescription: "Prawns sautéed in butter with a blend of herbs, served in a crispy momo shell.",
      image: prawnGravyMomoImage,
      spiceLevel: "Medium",
      ingredients: ["Prawns", "Butter", "Herbs"],
      isVegetarian: false
    },
    {
      id: "prawn-8",
      name: "Prawn Chilli Momo",
      price: "₹150",
      description: "Butter-fried prawns, herbs",
      longDescription: "Prawns sautéed in butter with a blend of herbs, served in a crispy momo shell.",
      image: prawnChilliMomoImage,
      spiceLevel: "Extra Hot",
      ingredients: ["Prawns", "Butter", "Herbs"],
      isVegetarian: false
    },
    {
      id: "prawn-9",
      name: "Prawn Afghani Momo",
      price: "₹160",
      description: "Butter-fried prawns, herbs",
      longDescription: "Prawns sautéed in butter with a blend of herbs, served in a crispy momo shell.",
      image: prawnAfghaniMomoImage,
      spiceLevel: "Medium",
      ingredients: ["Prawns", "Butter", "Herbs"],
      isVegetarian: false
    },
    {
      id: "mutton-1",
      name: "Mutton Steam Momo",
      price: "₹120",
      description: "Spicy mutton, schezwan sauce",
      longDescription: "Our signature spicy mutton momos tossed in house-made schezwan sauce. Not for the faint-hearted!",
      image: muttonSteamMomoImage,
      spiceLevel: "Mild",
      ingredients: ["Mutton", "Schezwan Sauce", "Dried Red Chilies", "Garlic"],
      isVegetarian: false
    },
    {
      id: "mutton-2",
      name: "Mutton Fry Momo",
      price: "₹130",
      description: "Spicy mutton filling, herbs",
      longDescription: "Delicious mutton mixed with spices and herbs, wrapped in a thin dough and fried to perfection.",
      image: muttonFryMomoImage,
      spiceLevel: "Medium",
      ingredients: ["Mutton", "Spices", "Herbs"],
      isVegetarian: false
    },
    {
      id: "mutton-3",
      name: "Mutton Butter Pan Fry Momo",
      price: "₹150",
      description: "Butter-fried mutton, herbs",
      longDescription: "Mutton sautéed in butter with a blend of herbs, served in a crispy momo shell.",
      image: muttonButterPanFryMomoImage,
      spiceLevel: "Medium",
      ingredients: ["Mutton", "Butter", "Herbs"],
      isVegetarian: false
    },
    {
      id: "mutton-4",
      name: "Mutton Kurkure Momo",
      price: "₹170",
      description: "Butter-fried mutton, herbs",
      longDescription: "Mutton sautéed in butter with a blend of herbs, served in a crispy momo shell.",
      image: muttonKurkureMomoImage,
      spiceLevel: "Medium",
      ingredients: ["Mutton", "Butter", "Herbs"],
      isVegetarian: false
    }
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
        pagination={{
          clickable: true,
          el: '.custom-pagination',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active'
        }}
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
                <button className="btn btn-secondary w-full"
                onClick={() => window.open('https://menu.steamandsoul.in', '_blank')}>
                  Order Now
                </button>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination flex overflow-x-auto sm:justify-center px-4 py-2 no-scrollbar space-x-2" />
    </motion.div>
  );
};

export default ImageCarousel;