export const type1SlidesData = [
  {
    id: 1,
    image: {
      src: '/broucher/1.jpg',
      className: 'object-cover w-full h-full'
    },
    title: {
      text: 'ABOUT US',
      className: 'text-xl tracking-widest text-gray-500 mb-4 font-[holland]'
    },
    // ✅ GoldLine control
    showLineAfterTitle: true,
    lineAfterTitleClassName: '',
    
    description: {
      text: 'For over 45 years, Runwal Realty has been crafting legacies, not just spaces. Our residential, commercial, and retail projects are built with trust, innovation, and precision, designed to stand the test of time and become a lasting part of your story.',
      className: 'text-gray-600 leading-relaxed mb-8 font-[subtext] py-5'
    },
    stats: [
      {
        value: '45',
        label: 'YEARS OF LEGACY',
        valueClassName: 'text-4xl font-bold text-amber-600 py-2',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      },
      {
        value: '50K',
        label: 'HAPPY FAMILIES',
        valueClassName: 'text-4xl font-bold text-amber-600 py-2 ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      },
      {
        value: '50',
        label: 'PROJECTS',
        valueClassName: 'text-4xl font-bold text-amber-600 py-2 ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control (final line)
        lineClassName: ''
      }
    ],
    contentClassName: 'w-1/4 bg-white p-8 flex flex-col justify-center',
    statsContainerClassName: 'space-y-4'
  },
  {
    id: 2,
    image: {
      src: '/broucher/2.jpg',
      className: 'object-cover w-full h-full'
    },
    title: {
      text: 'ANY MORE\n EXPANSIVE AND YOU\n MIGHT NEED A GPS\n TO NAVIGATE.',
      className: 'text-xl tracking-widest text-gray-500 mb-4 font-[holland] whitespace-pre-line'
    },
    // ✅ GoldLine control
    showLineAfterTitle: true,
    lineAfterTitleClassName: '',
    
    description: {
      text: 'A testament to impeccable taste, ‘Runwal Malabar’ embodies the grandeur of your cherished chateau and the warmth of an ancestral manor.',
      className: 'text-gray-600 leading-relaxed mb-8 font-[subtext] py-5'
    },
    stats: [
      // Empty stats array - no stats for this slide
    ],
    contentClassName: 'w-1/4 bg-white p-8 flex flex-col justify-center',
    statsContainerClassName: 'space-y-4'
  },
  {
    id: 3,
    image: {
      src: '/broucher/3.jpg',
      className: 'object-cover w-full h-full'
    },
    title: {
      text: 'MAKE A STATEMENT\n EVEN BEFORE\n YOU STEP IN.',
      className: 'text-xl tracking-widest text-gray-500 mb-4 font-[holland] whitespace-pre-line'
    },
    // ✅ GoldLine control
    showLineAfterTitle: true,
    lineAfterTitleClassName: '',
    
    description: {
      text: 'Your arrival marks a moment of distinction – a drive that sets the stage for the world within.',
      className: 'text-gray-600 leading-relaxed mb-8 font-[subtext] py-5'
    },
    stats: [
      // Empty stats array - no stats for this slide
    ],
    contentClassName: 'w-1/4 bg-white p-8 flex flex-col justify-center',
    statsContainerClassName: 'space-y-4'
  },
  {
    id: 4,
    image: {
      src: '/broucher/4.jpg',
      className: 'object-cover w-full h-full'
    },
    title: {
      text: 'A CREATION\n WORTHY\n OF PICASSO’S\n SIGNATURE.',
      className: 'text-xl tracking-widest text-gray-500 mb-4 font-[holland] whitespace-pre-line'
    },
    // ✅ GoldLine control
    showLineAfterTitle: true,
    lineAfterTitleClassName: '',
    
    description: {
      text: 'The entrance lounge, a modernist sculpture capturing shifting light and shadow – echoing Cubist artistry.',
      className: 'text-gray-600 leading-relaxed mb-8 font-[subtext] py-5'
    },
    stats: [
      {
        value: '-',
        label: 'DOUBLE HEIGHT ENTRANCE LOUNGE',
        valueClassName: 'text-xs font-bold text-gray-600 py-2  ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      },
     {
        value: '-',
        label: 'SIGNATURE LANDSCAPE',
        valueClassName: 'text-xs font-bold text-gray-600 py-2   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      },
       {
        value: '-',
        label: '3 SIDE DROP-OFF SPACE AND LOBBY ACCESS',
        valueClassName: 'text-xs font-bold text-gray-600 py-2   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      },
       {
        value: '-',
        label: '3 ELEVATORS',
        valueClassName: 'text-xs font-bold text-gray-600 py-2   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      }
    ],
    contentClassName: 'w-1/4 bg-white p-8 flex flex-col justify-center',
    statsContainerClassName: 'space-y-4'
  },
  {
    id: 5,
    image: {
      src: '/broucher/5.jpg',
      className: 'object-cover w-full h-full'
    },
    title: {
      text: 'FOR THE ONES\n WHO REIGN,\n A VAULT FOR\n YOUR FLEET.',
      className: 'text-xl tracking-widest text-gray-500 mb-4 font-[holland] whitespace-pre-line'
    },
    // ✅ GoldLine control
    showLineAfterTitle: true,
    lineAfterTitleClassName: '',
    
    description: {
      text: 'For every marque you collect, a sanctuary reflecting your exceptional lifestyle.',
      className: 'text-gray-600 leading-relaxed mb-8 font-[subtext] py-5'
    },
    stats: [
      {
        value: '-',
        label: 'DEDICATED PARKING LEVELS',
        valueClassName: 'text-xs font-bold text-gray-600 py-2  ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      },
     {
        value: '-',
        label: 'SERVICE BASEMENT',
        valueClassName: 'text-xs font-bold text-gray-600 py-2   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      },
       {
        value: '-',
        label: 'BASEMENT PARKING',
        valueClassName: 'text-xs font-bold text-gray-600 py-2   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      } 
    ],
    contentClassName: 'w-1/4 bg-white p-8 flex flex-col justify-center',
    statsContainerClassName: 'space-y-4'
  },
  {
    id: 6,
    image: {
      src: '/broucher/6.jpg',
      className: 'object-cover w-full h-full'
    },
    title: {
      text: 'HERE,\n THE SKY FEELS \nPRIVATELY OWNED\n & THE CITY \nBELOW STANDS IN \nREVERENCE.',
      className: 'text-xl tracking-widest text-gray-500 mb-[50%] font-[holland] whitespace-pre-line'
    },
    // ✅ GoldLine control
    showLineAfterTitle: false,
    lineAfterTitleClassName: '',
    
    description: {
     
    },
    stats: [
      {
        value: '-',
        label: 'MANSION-LIKE DUPLEX LAYOUT',
        valueClassName: 'text-xs font-bold text-gray-600 py-2  ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      },
     {
        value: '-',
        label: 'BARE-SHELL RESIDENCES',
        valueClassName: 'text-xs font-bold text-gray-600 py-2   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      },
       {
        value: '-',
        label: '11 FT. FLOOR-TO-CEILING HEIGHT',
        valueClassName: 'text-xs font-bold text-gray-600 py-2   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      } ,
       {
        value: '-',
        label: '270° PANORAMIC VIEWS',
        valueClassName: 'text-xs font-bold text-gray-600 py-2   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      }
    ],
    contentClassName: 'w-1/4 bg-white p-8 flex flex-col justify-center',
    statsContainerClassName: 'space-y-4'
  },
  {
    id: 7,
    image: {
      src: '/broucher/7.png',
      className: 'object-cover w-full h-full'
    },
    title: {
      text: 'YOUR ARRIVAL. \nYOUR COMMAND.',
      className: 'text-xl tracking-widest text-gray-500 mb-[10%] font-[holland] whitespace-pre-line'
    },
    // ✅ GoldLine control
    showLineAfterTitle: true,
    lineAfterTitleClassName: '',
    
    description: {
        text: 'A Lobby That’s Yours and Yours Alone. Where Privacy Reigns, and Neighbors Don’t Exist – your private realm in the sky.',
      className: 'text-gray-600 leading-relaxed mb-2 font-[subtext] py-2'
     
    },
    stats: [
      {
        value: '',
        label: '',
        valueClassName: 'text-xs font-bold text-gray-600 py-[30%] ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      },
     {
        value: '-',
        label: 'PRIVATE FLOOR LOBBY',
        valueClassName: 'text-xs font-bold text-gray-600 py-0   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: false,  // ✅ Line control
        lineClassName: ''
      }
    ],
    contentClassName: 'w-1/4 bg-white p-8 flex flex-col justify-center',
    statsContainerClassName: 'space-y-4'
  },
  {
    id: 8,
    image: {
      src: '/broucher/8.jpg',
      className: 'object-cover w-full h-full'
    },
    title: {
      text: 'AN OUTHOUSE \nTHAT HOLDS ITS \nOWN PURPOSE,\nAND PRESENCE.',
      className: 'text-xl tracking-widest text-gray-500 mb-[10%] font-[holland] whitespace-pre-line'
    },
    // ✅ GoldLine control
    showLineAfterTitle: true,
    lineAfterTitleClassName: '',
    
    description: {
        text: 'It’s a realm that bends to your every desire, much like the world you command. Craft a bespoke office, a private gym, or any space that echoes your unparalleled lifestyle. Here, every inch is an expression of your taste.',
      className: 'text-gray-600 leading-relaxed mb-2 font-[subtext] py-2'
     
    },
    stats: [
        ,
      {
        value: '-',
        label: 'THE PAVILION SUITE',
        valueClassName: 'text-xs font-bold text-gray-600 py-2  ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      },
     {
        value: '-',
        label: 'CURATED ALCOVE',
        valueClassName: 'text-xs font-bold text-gray-600 py-2   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      }
    ],
    contentClassName: 'w-1/4 bg-white p-8 flex flex-col justify-center',
    statsContainerClassName: 'space-y-4'
  },
  {
    id: 9,
    image: {
      src: '/broucher/9.jpg',
      className: 'object-cover w-full h-full'
    },
    title: {
      text: 'RECEIVES LIKE \nA PALACE AND \nLISTENS LIKE \nA HOME.',
      className: 'text-xl tracking-widest text-gray-500 mb-[10%] font-[holland] whitespace-pre-line'
    },
    // ✅ GoldLine control
    showLineAfterTitle: true,
    lineAfterTitleClassName: '',
    
    description: {
        text: 'Where family moments are shared and legacies are built, your home reflects your unique taste. With bare-shell mansions and a limited offering ,Malabar Hills’ finest address awaits.',
      className: 'text-gray-600 leading-relaxed mb-2 font-[subtext] py-2'
     
    },
    stats: [
      {
        value: '',
        label: '',
        valueClassName: 'text-xs font-bold text-gray-600 py-[30%] ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      },
     {
        value: '-',
        label: 'SOVEREIGN LOUNGE',
        valueClassName: 'text-xs font-bold text-gray-600 py-0   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: false,  // ✅ Line control
        lineClassName: ''
      }
    ],
    contentClassName: 'w-1/4 bg-white p-8 flex flex-col justify-center',
    statsContainerClassName: 'space-y-4'
  },
  {
    id: 10,
    image: {
      src: '/broucher/10.jpg',
      className: 'object-cover w-full h-full'
    },
    title: {
      text: 'SEA, SKY AND \n POWER, AS FAR AS \nTHE EYE CAN SEE.',
      className: 'text-xl tracking-widest text-gray-500 mb-[10%] font-[holland] whitespace-pre-line'
    },
    // ✅ GoldLine control
    showLineAfterTitle: true,
    lineAfterTitleClassName: '',
    
    description: {
        text: 'Your residence offers panoramic views from three sides with floor-to-ceiling glass and balconies. Admire the ocean, Haji Ali Mosque, Breach Candy hotspots, Governor’s House, Queen’s Necklace, and cityscape, all from your exclusive hilltop perch.',
      className: 'text-gray-600 leading-relaxed mb-2 font-[subtext] py-2'
     
    },
    stats: [
      {
        value: '',
        label: '',
        valueClassName: 'text-xs font-bold text-gray-600 py-[30%] ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      },
     {
        value: '-',
        label: 'PANORAMIC 270° VIEWS',
        valueClassName: 'text-xs font-bold text-gray-600 py-0   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: false,  // ✅ Line control
        lineClassName: ''
      }
    ],
    contentClassName: 'w-1/4 bg-white p-8 flex flex-col justify-center',
    statsContainerClassName: 'space-y-4'
  },
  {
    id: 11,
    image: {
      src: '/broucher/11.jpg',
      className: 'object-cover w-full h-full'
    },
    title: {
      text: 'SEA, SKY AND \n POWER, AS FAR AS \nTHE EYE CAN SEE.',
      className: 'text-xl tracking-widest text-gray-500 mb-[10%] font-[holland] whitespace-pre-line'
    },
    // ✅ GoldLine control
    showLineAfterTitle: true,
    lineAfterTitleClassName: '',
    
    description: {
        text: 'Your residence offers panoramic views from three sides with floor-to-ceiling glass and balconies. Admire the ocean, Haji Ali Mosque, Breach Candy hotspots, Governor’s House, Queen’s Necklace, and cityscape, all from your exclusive hilltop perch.',
      className: 'text-gray-600 leading-relaxed mb-2 font-[subtext] py-2'
     
    },
    stats: [
      {
        value: '',
        label: '',
        valueClassName: 'text-xs font-bold text-gray-600 py-[30%] ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      },
     {
        value: '-',
        label: 'PANORAMIC 270° VIEWS',
        valueClassName: 'text-xs font-bold text-gray-600 py-0   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: false,  // ✅ Line control
        lineClassName: ''
      }
    ],
    contentClassName: 'w-1/4 bg-white p-8 flex flex-col justify-center',
    statsContainerClassName: 'space-y-4'
  },{
    id: 12,
    image: {
      src: '/broucher/12.png',
      className: 'object-cover w-full h-full'
    },
    title: {
      text: 'YOUR MANSION’S \nQUIETEST \nSTATEMENT. \nWRAPPING SKY, SEA \nAND SILENCE.',
      className: 'text-xl tracking-widest text-gray-500 mb-[10%] font-[holland] whitespace-pre-line'
    },
    // ✅ GoldLine control
    showLineAfterTitle: true,
    lineAfterTitleClassName: '',
    
    description: {
        text: 'A Piece of Sky Within Your Home. From morning coffee to sunset views, a skydeck that offers the best of Malabar Hill’s skyline.',
      className: 'text-gray-600 leading-relaxed mb-2 font-[subtext] py-2'
     
    },
    stats: [
      {
        value: '',
        label: '',
        valueClassName: 'text-xs font-bold text-gray-600 py-[30%] ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      },
     {
        value: '-',
        label: '36 SQ . FT. WRAP AROUND DECK \nIN SOVEREIGN LOUNGE',
        valueClassName: 'text-xs font-bold text-gray-600 py-0   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] whitespace-pre-line ',
        showLineAfter: false,  // ✅ Line control
        lineClassName: ''
      }
    ],
    contentClassName: 'w-1/4 bg-white p-8 flex flex-col justify-center',
    statsContainerClassName: 'space-y-4'
  },
  {
    id: 13,
    image: {
      src: '/broucher/13.jpg',
      className: 'object-cover w-full h-full'
    },
    title: {
      text: 'A CULINARY \nCHAMBER.\nEQUIPPED FOR \nCONNOISSEURS.\nAND CHEFS ALIKE.',
      className: 'text-xl tracking-widest text-gray-500 mb-[10%] font-[holland] whitespace-pre-line'
    },
    // ✅ GoldLine control
    showLineAfterTitle: true,
    lineAfterTitleClassName: '',
    
    description: {
        text: 'A kitchen designed for the connoisseur, where every detail reflects uncompromising elegance.',
      className: 'text-gray-600 leading-relaxed mb-2 font-[subtext] py-2'
     
    },
    stats: [
      {
        value: '',
        label: '',
        valueClassName: 'text-xs font-bold text-gray-600 py-[30%] ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      },
     {
        value: '-',
        label: 'GOURMET ATELIER',
        valueClassName: 'text-xs font-bold text-gray-600 py-0   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: false,  // ✅ Line control
        lineClassName: ''
      }
    ],
    contentClassName: 'w-1/4 bg-white p-8 flex flex-col justify-center',
    statsContainerClassName: 'space-y-4'
  }, {
    id: 14,
    image: {
      src: '/broucher/14.png',
      className: 'object-cover w-full h-full'
    },
    title: {
      text: 'WHERE RELAXATION \nBECOMES AN ART.',
      className: 'text-xl tracking-widest text-gray-500 mb-[10%] font-[holland] whitespace-pre-line'
    },
    // ✅ GoldLine control
    showLineAfterTitle: true,
    lineAfterTitleClassName: '',
    
    description: {
        text: 'An oasis of calm, thoughtfully designed to embrace you in tranquility, with views that are yours alone.',
      className: 'text-gray-600 leading-relaxed mb-2 font-[subtext] py-2'
     
    },
    stats: [
      {
        value: '',
        label: '',
        valueClassName: 'text-xs font-bold text-gray-600 py-[30%] ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      },
     {
        value: '-',
        label: 'AQUA CHAMBER',
        valueClassName: 'text-xs font-bold text-gray-600 py-0   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: false,  // ✅ Line control
        lineClassName: ''
      }
    ],
    contentClassName: 'w-1/4 bg-white p-8 flex flex-col justify-center',
    statsContainerClassName: 'space-y-4'
  }, {
    id: 15,
    image: {
      src: '/broucher/15.jpg',
      className: 'object-cover w-full h-full'
    },
    title: {
      text: 'HERE,\n THE SKY FEELS \nPRIVATELY OWNED\n & THE CITY \nBELOW STANDS IN \nREVERENCE.',
      className: 'text-xl tracking-widest text-gray-500 mb-[50%] font-[holland] whitespace-pre-line'
    },
    // ✅ GoldLine control
    showLineAfterTitle: false,
    lineAfterTitleClassName: '',
    
    description: {
     
    },
    stats: [
      {
        value: '-',
        label: 'SERENE INFINITY POOL',
        valueClassName: 'text-xs font-bold text-gray-600 py-2  ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      },
     {
        value: '-',
        label: 'SUNLIT SUNDECK',
        valueClassName: 'text-xs font-bold text-gray-600 py-2   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      },
       {
        value: '-',
        label: 'TRANQUIL JACUZZI',
        valueClassName: 'text-xs font-bold text-gray-600 py-2   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      } ,
       {
        value: '-',
        label: 'ICE LOUNGE',
        valueClassName: 'text-xs font-bold text-gray-600 py-2   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      }
       ,
       {
        value: '-',
        label: 'GYMNASIUM',
        valueClassName: 'text-xs font-bold text-gray-600 py-2   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      } ,
       {
        value: '-',
        label: 'PRIVATE BUSINESS SUITE',
        valueClassName: 'text-xs font-bold text-gray-600 py-2   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      } ,
       {
        value: '-',
        label: 'GRAND ARRIVAL LOBBY',
        valueClassName: 'text-xs font-bold text-gray-600 py-2   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      } ,
       {
        value: '-',
        label: 'PRIVATE DROP-OFF AND THREE-SIDED \nVERDANT LANDSCAPE',
        valueClassName: 'text-xs font-bold text-gray-600 py-2   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] whitespace-pre-line ',
        showLineAfter: false,  // ✅ Line control
        lineClassName: ''
      }
    ],
    contentClassName: 'w-1/4 bg-white p-8 flex flex-col justify-center',
    statsContainerClassName: 'space-y-2'
  },
  {
    id: 16,
    image: {
      src: '/broucher/16.jpg',
      className: 'object-cover w-full h-full'
    },
    title: {
      text: 'RISE ABOVE THE \nCITY. ONLY THE \nHORIZON \nACCOMPANIES YOU.',
      className: 'text-xl tracking-widest text-gray-500 mb-[10%] font-[holland] whitespace-pre-line'
    },
    // ✅ GoldLine control
    showLineAfterTitle: true,
    lineAfterTitleClassName: '',
    
    description: {
        text: 'A private reflection of your supremacy, under the skies. A dip surrounded by a view only the powerful can demand.',
      className: 'text-gray-600 leading-relaxed mb-2 font-[subtext] py-2'
     
    },
    stats: [
      {
        value: '',
        label: '',
        valueClassName: 'text-xs font-bold text-gray-600 py-[30%] ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      },
     {
        value: '-',
        label: 'SERENE INFINITY POOL',
        valueClassName: 'text-xs font-bold text-gray-600 py-0   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: false,  // ✅ Line control
        lineClassName: ''
      }
    ],
    contentClassName: 'w-1/4 bg-white p-8 flex flex-col justify-center',
    statsContainerClassName: 'space-y-4'
  },{
    id: 17,
    image: {
      src: '/broucher/17.jpg',
      className: 'object-cover w-full h-full'
    },
    title: {
      text: 'YOUR WORLD \nIS ELEVATED,\nSO IS YOUR \nREPOSE.',
      className: 'text-xl tracking-widest text-gray-500 mb-[10%] font-[holland] whitespace-pre-line'
    },
    // ✅ GoldLine control
    showLineAfterTitle: true,
    lineAfterTitleClassName: '',
    
    description: {
        text: 'A Jacuzzi fit for royalty, where indulgence is as constant as your influence.',
      className: 'text-gray-600 leading-relaxed mb-2 font-[subtext] py-2'
     
    },
    stats: [
      {
        value: '',
        label: '',
        valueClassName: 'text-xs font-bold text-gray-600 py-[30%] ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      },
     {
        value: '-',
        label: 'THE JACUZZI ',
        valueClassName: 'text-xs font-bold text-gray-600 py-0   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: false,  // ✅ Line control
        lineClassName: ''
      }
    ],
    contentClassName: 'w-1/4 bg-white p-8 flex flex-col justify-center',
    statsContainerClassName: 'space-y-4'
  },{
    id: 18,
    image: {
      src: '/broucher/18.jpg',
      className: 'object-cover w-full h-full'
    },
    title: {
      text: 'THE MOST \nREFINED WAY \nTO RESET.',
      className: 'text-xl tracking-widest text-gray-500 mb-[10%] font-[holland] whitespace-pre-line'
    },
    // ✅ GoldLine control
    showLineAfterTitle: true,
    lineAfterTitleClassName: '',
    
    description: {
        text: 'A space where the temperature matches your caliber. Exclusive. Detached. Exquisite.',
      className: 'text-gray-600 leading-relaxed mb-2 font-[subtext] py-2'
     
    },
    stats: [
      {
        value: '',
        label: '',
        valueClassName: 'text-xs font-bold text-gray-600 py-[30%] ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      },
     {
        value: '-',
        label: 'THE ICE LOUNGE ',
        valueClassName: 'text-xs font-bold text-gray-600 py-0   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: false,  // ✅ Line control
        lineClassName: ''
      }
    ],
    contentClassName: 'w-1/4 bg-white p-8 flex flex-col justify-center',
    statsContainerClassName: 'space-y-4'
  },
  {
    id: 19,
    image: {
      src: '/broucher/19.jpg',
      className: 'object-cover w-full h-full'
    },
    title: {
      text: 'POWER ISN’T \nDISPLAYED. \nIT’S SCULPTED.',
      className: 'text-xl tracking-widest text-gray-500 mb-[10%] font-[holland] whitespace-pre-line'
    },
    // ✅ GoldLine control
    showLineAfterTitle: true,
    lineAfterTitleClassName: '',
    
    description: {
        text: 'A space where every rep, every movement, is an extension of your personal journey.',
      className: 'text-gray-600 leading-relaxed mb-2 font-[subtext] py-2'
     
    },
    stats: [
      {
        value: '',
        label: '',
        valueClassName: 'text-xs font-bold text-gray-600 py-[30%] ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      },
     {
        value: '-',
        label: 'THE GYMNASIUM ',
        valueClassName: 'text-xs font-bold text-gray-600 py-0   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: false,  // ✅ Line control
        lineClassName: ''
      }
    ],
    contentClassName: 'w-1/4 bg-white p-8 flex flex-col justify-center',
    statsContainerClassName: 'space-y-4'
  },
   {
    id: 20,
    image: {
      src: '/broucher/20.jpg',
      className: 'object-cover w-full h-full'
    },
    title: {
      text: 'A SUITE FOR \nVISIONARIES WHO \nSHAPE THE WORLD.',
      className: 'text-xl tracking-widest text-gray-500 mb-[10%] font-[holland] whitespace-pre-line'
    },
    // ✅ GoldLine control
    showLineAfterTitle: true,
    lineAfterTitleClassName: '',
    
    description: {
        text: 'Business from the comfort of home.A private suite where managing time zones is effortless and exclusively yours.',
      className: 'text-gray-600 leading-relaxed mb-2 font-[subtext] py-2'
     
    },
    stats: [
      {
        value: '',
        label: '',
        valueClassName: 'text-xs font-bold text-gray-600 py-[30%] ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      },
     {
        value: '-',
        label: 'THE BUSINESS SUITE',
        valueClassName: 'text-xs font-bold text-gray-600 py-0   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: false,  // ✅ Line control
        lineClassName: ''
      }
    ],
    contentClassName: 'w-1/4 bg-white p-8 flex flex-col justify-center',
    statsContainerClassName: 'space-y-4'
  },
  {
    id: 21,
    image: {
      src: '/broucher/21.jpg',
      className: 'object-cover w-full h-full'
    },
    title: {
      text: 'A RESIDENT \nCONCEIRGE AT \nYOUR BECK AND \nCALL.',
      className: 'text-xl tracking-widest text-gray-500 mb-[10%] font-[holland] whitespace-pre-line'
    },
    // ✅ GoldLine control
    showLineAfterTitle: true,
    lineAfterTitleClassName: '',
    
    description: {
        text: 'Remembering your preferences to orchestrating your quietest exits or flying in your favourite orchids, a quick call to the concierge desk can make it happen – anytime, anywhere.',
      className: 'text-gray-600 leading-relaxed mb-2 font-[subtext] py-2'
     
    },
    stats: [
      {
        value: '',
        label: '',
        valueClassName: 'text-xs font-bold text-gray-600 py-[30%] ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      },
     {
        value: '-',
        label: 'CONCIERGE',
        valueClassName: 'text-xs font-bold text-gray-600 py-0   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: false,  // ✅ Line control
        lineClassName: ''
      }
    ],
    contentClassName: 'w-1/4 bg-white p-8 flex flex-col justify-center',
    statsContainerClassName: 'space-y-4'
  },
   {
    id: 22,
    image: {
      src: '/broucher/22.png',
      className: 'object-cover w-full h-full'
    },
    title: {
      text: 'EVERY ELEMENT,\nWORLD-CLASS.\nEVERY DETAIL,\nTIMELESS.',
      className: 'text-xl tracking-widest text-gray-500 mb-[10%] font-[holland] whitespace-pre-line'
    },
    // ✅ GoldLine control
    showLineAfterTitle: true,
    lineAfterTitleClassName: '',
    
    description: {
        text: 'Bare-shell residences offered with curated finishes:',
      className: 'text-gray-600 leading-relaxed mb-2 font-[subtext] py-2'
     
    },
    stats: [
      {
        value: '-',
        label: 'MARBLE-CLAD PRIVATE LOBBIES',
        valueClassName: 'text-xs font-bold text-gray-600 py-2  ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      },
     {
        value: '-',
        label: 'GRANITE STAIRCASES',
        valueClassName: 'text-xs font-bold text-gray-600 py-2   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      },
       {
        value: '-',
        label: 'DESIGNER TILES IN LIFT LOBBIES',
        valueClassName: 'text-xs font-bold text-gray-600 py-2   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      } ,
       {
        value: '-',
        label: 'PRIVATE ELEVATOR AND PRIVATE LOBBY',
        valueClassName: 'text-xs font-bold text-gray-600 py-2   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      }
       ,
       {
        value: '-',
        label: 'FLEXIBLE OUTHOUSE SPACE',
        valueClassName: 'text-xs font-bold text-gray-600 py-2   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      } ,
       {
        value: '-',
        label: 'INTEGRATED WITHIN THE RESIDENCE',
        valueClassName: 'text-xs font-bold text-gray-600 py-2   ',
        labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext] ',
        showLineAfter: true,  // ✅ Line control
        lineClassName: ''
      } 
    ],
    contentClassName: 'w-1/4 bg-white p-8 flex flex-col justify-center',
    statsContainerClassName: 'space-y-4'
  },
  {
  id: 23,
  image: {
    src: '/broucher/23.jpg',
    className: 'object-cover w-full h-full'
  },
  title: {
    text: 'BROADWAY MALYAN \nMASTERS OF GLOBAL \nARCHITECTURE AND \nTIMELESS DESIGN.',
    className: 'text-xl tracking-widest text-gray-500 mb-[10%] font-[holland] whitespace-pre-line'
  },
  showLineAfterTitle: true,
  lineAfterTitleClassName: '',
  
  description: {
    text: 'Broadway Malyan is renowned for designing iconic landmarks that merge innovation, precision, and distinct identity. Their expertise spans luxury residences, commercial spaces, and urban developments, all built to inspire and endure. A trusted partner for visionary global projects, their commitment to excellence is unmatched.',
    className: 'text-gray-600 leading-relaxed mb-12 font-[subtext] py-2 text-xs' // ✅ Changed mb-2 to mb-12 for more space
  },
  stats: [
    {
      // ✅ First stat acts as title
      value: '',
      label: 'LANDMARKS DESIGNED BY BROADWAY MALYAN',
      valueClassName: 'text-xs font-bold text-gray-600',
      labelClassName: 'text-sm font-bold text-gray-700 font-[subtext] tracking-wider', // ✅ Styled as title
      showLineAfter: false,
      lineClassName: 'mb-2' // ✅ Line after title
    },
    {
      value: '-',
      label: 'TAJ CROWNE PLAZA HOTEL, LONDON, UK',
      valueClassName: 'text-xs font-bold text-gray-600 py-2',
      labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext]',
      showLineAfter: true,
      lineClassName: ''
    },
    {
      value: '-',
      label: 'KYOTO BAGMANE, BENGALURU, INDIA',
      valueClassName: 'text-xs font-bold text-gray-600 py-2',
      labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext]',
      showLineAfter: true,
      lineClassName: ''
    },
    {
      value: '-',
      label: 'NOVOTEL NEW DELHI, NEW DELHI, INDIA',
      valueClassName: 'text-xs font-bold text-gray-600 py-2',
      labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext]',
      showLineAfter: true,
      lineClassName: ''
    },
    {
      value: '-',
      label: 'MIAMI CRUISE TERMINAL, MIAMI, USA',
      valueClassName: 'text-xs font-bold text-gray-600 py-2',
      labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext]',
      showLineAfter: true,
      lineClassName: ''
    },
    {
      value: '-',
      label: 'GOOGLE BAGMANE, BENGALURU, INDIA',
      valueClassName: 'text-xs font-bold text-gray-600 py-2',
      labelClassName: 'ml-2 text-xs text-gray-500 font-[subtext]',
      showLineAfter: true,
      lineClassName: ''
    }
  ],
  contentClassName: 'w-1/4 bg-white p-8 flex flex-col justify-center',
  statsContainerClassName: 'space-y-4'
}

  
  
  
];


// 