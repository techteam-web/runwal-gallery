import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { CustomEase } from 'gsap/CustomEase';
import { useGSAP } from '@gsap/react';

// REGISTER ScrollToPlugin
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, useGSAP, CustomEase);

// Create custom ease
CustomEase.create(
  "hop",
  "M0,0 C0.083,0.294 0.117,0.767 0.413,0.908 0.606,1 0.752,1 1,1 "
);

const Gallery = () => {
  const containerRef = useRef(null);
  const slidesRef = useRef(null);
  const scrollTriggerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // ✅ Prevent scroll restoration and force scroll to top on refresh
  useEffect(() => {
    // Disable browser's automatic scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Force scroll to top on component mount (page refresh)
    window.scrollTo(0, 0);

    // Also reset on beforeunload to ensure clean state
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  const slides = [
    {
      id: 1,
      bgImage: '/slides/background.jpg',
      images: [
        { src: '/slides/1.png', position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', size: 'w-64' },
      ],
      texts: [
        { content: 'Building for generations to come', position: 'bottom-4 left-1/2 -translate-y-1/2 -translate-x-1/2 uppercase', size: 'text-5xl', color: 'text-[#AA8A4C]' }
      ]
    },
    {
      id: 2,
      bgImage: '/slides/background.jpg',
      images: [
        { src: '/slides/2.png', position: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', size: 'w-[70%]' },
      ],
      texts: [
        { content: 'A Legacy Of Trust & Quality', position: 'top-10 left-[30%] -translate-x-1/2', size: 'text-4xl', color: 'text-[#AA8A4C]' },
      ]
    },
    {
      id: 3,
      bgImage: '/slides/background.jpg',
      images: [
        { src: '/slides/3.png', position: 'top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2', size: 'w-[80%]' },
        { src: '/slides/3.1.png', position: 'top-[70%] left-[50%] -translate-x-1/2 -translate-y-1/2', size: 'w-[80%]' },
      ],
      texts: [
        { content: 'Our Financial Partner', position: 'top-[15%] left-[22%] -translate-x-1/2 -translate-y-1/2 underline', size: 'text-4xl', color: 'text-[#AA8A4C]' },
        { content: 'Our Design Partners ', position: 'top-[50%] left-[22%] -translate-x-1/2 -translate-y-1/2 underline', size: 'text-4xl', color: 'text-[#AA8A4C]' }
      ]
    },
    {
      id: 4,
      bgImage:'/slides/background.jpg',
      images: [
        { src: '/slides/4.jpg', position: ' absolute top-0 left-0 w-full h-full z-20', size: 'w-[90%]' }
      ],
      texts: []
    },
    {
      id: 5,
      bgImage: null,
      images: [
        { src: '/slides/5.jpg', position: 'absolute top-0 left-0 w-full h-full z-20', size: 'object-cover' },
      ],
      texts: []
    },
    {
      id: 6,
      bgImage:null,
      images: [
        { src: '/slides/6.png', position: 'absolute top-0 left-0 w-full h-full z-20', size: 'object-cover' }
      ],
      texts: []
    },
    {
      id: 7,
      bgImage:'/slides/background.jpg',
      images: [
        { src: '/slides/7.png', position: 'top-[60%] left-[50%] -translate-x-1/2 -translate-y-1/2', size: 'w-[80%]' }
      ],
      texts: [
        { content: 'Striking Deals That Made Headlines', position: 'top-[15%] left-[35%] -translate-x-1/2 -translate-y-1/2 underline', size: 'text-4xl', color: 'text-[#AA8A4C]' }
      ]
    },
    {
      id: 8,
      bgImage:'/slides/background.jpg',
      images: [
        { src: '/slides/8.png', position: 'top-[60%] left-[50%] -translate-x-1/2 -translate-y-1/2', size: 'w-[80%]' }
      ],
      texts: [
        { content: 'The Investment Story - Appreciation That Markets Envy', position: 'top-[15%] left-[35%] -translate-x-1/2 -translate-y-1/2 underline', size: 'text-4xl', color: 'text-[#AA8A4C]' }
      ]
    },
    {
      id: 9,
      bgImage:null,
      images: [
        { src: '/slides/9.jpg', position: 'absolute top-0 left-0 w-full h-full z-20', size: 'object-cover' }
      ],
      texts: []
    },
    {
      id: 10,
      bgImage:'/slides/background.jpg',
      images: [
        { src: '/slides/10.png', position: 'absolute top-0 left-0 w-full h-full z-20', size: 'object-cover' }
      ],
      texts: []
    },
    {
      id: 11,
      bgImage:'/slides/background.jpg',
      images: [
        { src: '/slides/11.png', position: 'top-[60%] left-[50%] -translate-x-1/2 -translate-y-1/2', size: 'w-[80%]' }
      ],
      texts: [
        { content: 'FY25 Has Been Nothing Short Of Spectacular', position: 'top-[15%] left-[33%] -translate-x-1/2 -translate-y-1/2 underline', size: 'text-4xl', color: 'text-[#AA8A4C]' },
        { content: 'We Kept Setting Benchmarks And Making Headlines', position: 'top-[25%] left-[26%] -translate-x-1/2 -translate-y-1/2 font-light', size: 'text-2xl', color: 'text-black' }
      ]
    },
    {
      id: 12,
      bgImage:null,
      images: [
        { src: '/slides/12.jpg', position: 'absolute top-0 left-0 w-full h-full z-20', size: 'object-cover' }
      ],
      texts: []
    },
    {
      id: 13,
      bgImage: '/slides/background.jpg',
      images: [
        { src: '/slides/13.jpg', position: 'absolute top-0 left-0 w-full h-full', size: 'object-cover' }
      ],
      texts: []
    },
    {
      id: 14,
      bgImage:'/slides/background.jpg',
      images: [
        { src: '/slides/14.png', position: 'top-[60%] left-[45%] -translate-x-1/2 -translate-y-1/2', size: 'w-[70%]' }
      ],
      texts: [
        { content: 'Reason? The Runwal Edge', position: 'top-[15%] left-[24%] -translate-x-1/2 -translate-y-1/2 underline', size: 'text-4xl', color: 'text-[#AA8A4C]' },
        { content: 'We have Mastered the Art of Luxury', position: 'top-[20%] left-[22%] -translate-x-1/2 -translate-y-1/2 font-light', size: 'text-2xl', color: 'text-black' }
      ]
    },
    {
      id: 15,
      bgImage:'/slides/background.jpg',
      images: [
        { 
          src: '/slides/15.jpg', 
          position: 'absolute top-1/2 left-0 w-full -translate-y-1/2 pr-6', 
          size: 'object-cover' 
        }
      ],
      texts: []
    },
    {
      id: 16,
      bgImage:'/slides/background.jpg',
      images: [
        { src: '/slides/16.png', position: 'absolute top-0 left-0 w-full h-full', size: 'object-cover' }
      ],
      texts: []
    },
    {
      id: 17,
      bgImage:'/slides/background.jpg',
      images: [
        { src: '/slides/17.jpg', position: 'absolute top-0 left-0 w-full h-full', size: 'w-[90%]' }
      ],
      texts: []
    },
    {
      id: 18,
      bgImage:'/slides/background.jpg',
      images: [
        { src: '/slides/18.jpg', position: 'absolute top-0 left-0 w-full h-full', size: 'object-cover' }
      ],
      texts: []
    },
    {
      id: 19,
      bgImage:'/slides/background.jpg',
      images: [
        { src: '/slides/19.jpg', position: 'absolute top-0 left-0 w-full h-full', size: 'object-cover' }
      ],
      texts: []
    },
    {
      id: 20,
      bgImage:'/slides/background.jpg',
      images: [
        { src: '/slides/20.jpg', position: 'absolute top-0 left-0 w-full h-full', size: 'object-cover' }
      ],
      texts: []
    },
    { id: 21, bgImage:'/slides/background.jpg', images:[{ src:'/slides/21.jpg', position:'absolute top-0 left-0 w-full h-full', size: 'w-[90%]' }], texts:[] },
    { id: 22, bgImage:'/slides/background.jpg', images:[{ src:'/slides/22.png', position:'absolute top-0 left-0 w-full h-full', size: 'w-[90%]' }], texts:[] },
    { id: 23, bgImage:'/slides/background.jpg', images:[{ src:'/slides/23.png', position:'absolute top-0 left-0 w-full h-full', size: 'w-[90%]' }], texts:[] },
    { id: 24, bgImage:'/slides/background.jpg', images:[{ src:'/slides/24.png', position:'top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2', size:'w-[75%]' }], texts:[] },
    { id: 25, bgImage:'/slides/background.jpg', images:[{ src:'/slides/25.png', position:'absolute top-0 left-0 w-full h-full', size: 'w-[90%]' }], texts:[] },
    { id: 26, bgImage:'/slides/background.jpg', images:[{ src:'/slides/26.png', position:'absolute top-0 left-0 w-full h-full', size: 'w-[90%]' }], texts:[] },
    { id: 27, bgImage:'/slides/background.jpg', images:[{ src:'/slides/27.png', position:'absolute top-0 left-0 w-full h-full', size: 'w-[90%]' }], texts:[] },
    { id: 28, bgImage:'/slides/background.jpg', images:[{ src:'/slides/28.png', position:'absolute top-0 left-0 w-full h-full', size: 'w-[90%]' }], texts:[] },
    { id: 29, bgImage:'/slides/background.jpg', images:[{ src:'/slides/29.png', position:'absolute top-0 left-0 w-full h-full', size: 'object-cover' }], texts:[] },
    { id: 30, bgImage:'/slides/background.jpg', images:[{ src:'/slides/30.png', position:'absolute top-0 left-0 w-full h-full', size: 'object-cover object-center' }], texts:[] },
    { id: 31, bgImage:'/slides/background.jpg', images:[{ src:'/slides/31.png', position:'absolute top-0 left-0 w-full h-full', size: 'object-cover object-center' }], texts:[] },
    { id: 32, bgImage:'/slides/background.jpg', images:[{ src:'/slides/32.png', position:'absolute top-0 left-0 w-full h-full', size: 'object-cover object-center' }], texts:[] },
    { id: 33, bgImage:'/slides/background.jpg', images:[{ src:'/slides/33.png', position:'absolute top-0 left-0 w-full h-full', size: 'object-cover object-center' }], texts:[] },
    { id: 34, bgImage:'/slides/background.jpg', images:[{ src:'/slides/34.png', position:'absolute top-0 left-0 w-full h-full', size: 'object-cover object-center' }], texts:[] },
    { id: 35, bgImage:null, images:[{ src:'/slides/35.png', position:'absolute top-0 left-0 w-full h-full', size: 'w-[90%] object-center' }], texts:[] },
    { id: 36, bgImage:'/slides/background.jpg', images:[{ src:'/slides/36.jpg', position:'absolute top-0 left-0 w-full h-full', size: 'w-[95%] object-center' }], texts:[] },
    { id: 37, bgImage:'/slides/background.jpg', images:[{ src:'/slides/37.png', position:'absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2', size: 'w-[90%]' }], texts:[] },
    { id: 38, bgImage:'/slides/background.jpg', images:[{ src:'/slides/38.png', position:'absolute top-[10%] left-[15%]', size: 'w-[70%]' }], texts:[] },
    { id: 39, bgImage:'/slides/background.jpg', images:[{ src:'/slides/39.png', position:'absolute top-0 left-0 w-full h-full', size: 'w-[90%]' }], texts:[] }
  ];

  // ✅ Define random slide directions
  const getRandomDirection = () => {
    const directions = [
      { 
        // Slide from left
        initial: { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)", x: -500 },
        final: { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", x: 0 }
      },
      { 
        // Slide from right  
        initial: { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)", x: 500 },
        final: { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", x: 0 }
      },
      { 
        // Slide from top
        initial: { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", y: -300 },
        final: { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", y: 0 }
      },
      { 
        // Slide from bottom
        initial: { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", y: 300 },
        final: { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", y: 0 }
      },
      { 
        // Diagonal from top-left
        initial: { clipPath: "polygon(0% 0%, 0% 0%, 0% 0%, 0% 0%)", x: -300, y: -200 },
        final: { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", x: 0, y: 0 }
      },
      { 
        // Diagonal from bottom-right
        initial: { clipPath: "polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%)", x: 300, y: 200 },
        final: { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", x: 0, y: 0 }
      }
    ];
    return directions[Math.floor(Math.random() * directions.length)];
  };

  // ✅ Generate random directions for each slide (regenerate on each component mount)
  const slideDirections = useRef(
    slides.map(() => getRandomDirection())
  );

  // ✅ Regenerate random directions on component mount (refresh)
  useEffect(() => {
    slideDirections.current = slides.map(() => getRandomDirection());
  }, []);

  const navigateToSlide = (targetIndex) => {
    if (!scrollTriggerRef.current) return;
    
    const st = scrollTriggerRef.current;
    
    // Calculate target scroll position
    const targetProgress = targetIndex / (slides.length - 1);
    const scrollDistance = st.end - st.start;
    const targetScroll = st.start + (scrollDistance * targetProgress);
    
    // Calculate current position
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Calculate distance traveled
    const distance = Math.abs(targetScroll - currentScroll);
    
    // Fixed duration per slide (0.8 seconds per slide)
    const slideDistance = scrollDistance / (slides.length - 1);
    const slidesJumped = distance / slideDistance;
    const duration = slidesJumped * 0.8; // 0.8s per slide
    
    gsap.to(window, {
      scrollTo: { y: targetScroll, autoKill: false },
      duration: duration,
      ease: "power2.inOut"
    });
  };

  const handlePrevSlide = () => {
    const newIndex = Math.max(0, currentSlide - 1);
    setCurrentSlide(newIndex);
    navigateToSlide(newIndex);
  };

  const handleNextSlide = () => {
    const newIndex = Math.min(slides.length - 1, currentSlide + 1);
    setCurrentSlide(newIndex);
    navigateToSlide(newIndex);
  };

  useGSAP(() => {
    const slideElements = gsap.utils.toArray('.slide');
    
    // ✅ Set initial states based on random directions
    slideElements.forEach((slide, index) => {
      const direction = slideDirections.current[index];
      
      if (index === 0) {
        gsap.set(slide, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        });
        gsap.set(slide.querySelector('.slide-content'), { x: 0, y: 0 });
      } else {
        gsap.set(slide, {
          clipPath: direction.initial.clipPath,
        });
        gsap.set(slide.querySelector('.slide-content'), { 
          x: direction.initial.x || 0, 
          y: direction.initial.y || 0 
        });
      }
    });

    // Animate text elements on first slide
    const firstSlide = slideElements[0];
    const firstTexts = firstSlide.querySelectorAll('.text-element');
    if (firstTexts.length) {
      gsap.set(firstTexts, { opacity: 0, y: 20 });
      gsap.to(firstTexts, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.3
      });
    }

    // Create main timeline
    const tl = gsap.timeline();

    slideElements.forEach((slide, index) => {
      if (index > 0) {
        const prevSlide = slideElements[index - 1];
        const prevContent = prevSlide.querySelector('.slide-content');
        const currentContent = slide.querySelector('.slide-content');
        const currentTexts = slide.querySelectorAll('.text-element');

        // ✅ Get random directions for current and previous slides
        const currentDirection = slideDirections.current[index];
        const prevDirection = slideDirections.current[index - 1];

        gsap.set(currentTexts, { opacity: 0, y: 20 });

        const timelinePosition = (index - 1) * 4.5;

        // ✅ Animate previous slide out in random direction
        tl.to(prevContent, {
          x: prevDirection.initial.x || -500,
          y: prevDirection.initial.y || 0,
          duration: 2.5,
          ease: "hop"
        }, timelinePosition)
        
        // ✅ Animate current slide clipPath
        .to(slide, {
          clipPath: currentDirection.final.clipPath,
          duration: 2.5,
          ease: "hop",
        }, timelinePosition)
        
        // ✅ Animate current slide content from random direction
        .to(currentContent, {
          x: currentDirection.final.x || 0,
          y: currentDirection.final.y || 0,
          duration: 2.5, 
          ease: "hop"
        }, timelinePosition)
        
        .to(currentTexts, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out"
        }, timelinePosition + 1)
        
        .to({}, { duration: 2 });
      }
    });

    // Create ScrollTrigger
    const st = ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: () => `+=${window.innerHeight * slides.length * 1}`,
      animation: tl,
      scrub: 1.5,
      pin: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        const newIndex = Math.round(self.progress * (slides.length - 1));
        if (newIndex !== currentSlide) {
          setCurrentSlide(newIndex);
        }
      }
    });

    scrollTriggerRef.current = st;
    console.log('ScrollTrigger created:', st.start, st.end);

    return () => {
      st.kill();
      scrollTriggerRef.current = null;
    };

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="h-screen overflow-hidden relative">
      <div ref={slidesRef} className="relative w-full h-full">
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="slide absolute inset-0 w-full h-full overflow-hidden"
          >
            <div className="slide-content absolute inset-0 w-full h-full">
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: slide.bgImage ? `url(${slide.bgImage})` : 'none',
                  backgroundColor: '#ffffff',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />

              {slide.images?.map((img, idx) => (
                <img
                  key={idx}
                  src={img.src}
                  alt=""
                  className={`absolute ${img.position} ${img.size} object-contain`}
                />
              ))}

              {slide.texts?.map((text, idx) => (
                <div
                  key={idx}
                  className={`text-element absolute ${text.position} ${text.size} ${text.color} font-bold`}
                  style={{
                    fontFamily:'holland',
                    fontWeight:'normal'
                  }}
                >
                  {text.content}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={handlePrevSlide}
          disabled={currentSlide === 0}
          className="fixed left-4 top-1/2 -translate-y-1/2 z-50 cursor-pointer transition-opacity duration-300 hover:opacity-80 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Previous slide"
        >
          <img src="/left.png" alt="Previous" className="w-12 h-12 md:w-16 md:h-16"  style={{
      filter: 'brightness(0) saturate(100%) invert(61%) sepia(85%) saturate(549%) hue-rotate(359deg) brightness(92%) contrast(87%)'
    }} />
        </button>

        <button
          onClick={handleNextSlide}
          disabled={currentSlide === slides.length - 1}
          className="fixed right-4 top-1/2 -translate-y-1/2 z-50 cursor-pointer transition-opacity duration-300 hover:opacity-80 disabled:opacity-30 disabled:cursor-not-allowed"
          aria-label="Next slide"
        >
          <img src="/right.png" alt="Next" className="w-12 h-12 md:w-16 md:h-16"  style={{
      filter: 'brightness(0) saturate(100%) invert(61%) sepia(85%) saturate(549%) hue-rotate(359deg) brightness(92%) contrast(87%)'
    }}/>
        </button>
      </div>
    </div>
  );
};

export default Gallery;
