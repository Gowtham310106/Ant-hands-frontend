// src/data/products.js
export const products = [
  // Wallet Cards Collection
  {
    id: 'wc-001',
    handle: 'personalized-name-wallet-card',
    title: 'Personalized Name Wallet Card',
    price: 149,
    compareAtPrice: 199,
    isOnSale: true,
    images: [
      'https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?w=400&h=500&fit=crop',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop'
    ],
    collectionHandle: 'wallet-cards',
    shortDescription: 'Cute personalized wallet card with your name',
    description: 'A beautiful wallet-sized card featuring your name in elegant typography. Perfect for carrying in your wallet as a reminder or gifting to loved ones.',
    isCustomizable: true,
    customizationFields: [
      {
        type: 'text',
        name: 'name',
        label: 'Name to print',
        helperText: 'Enter the name you want on the card (max 15 characters)'
      },
      {
        type: 'text',
        name: 'message',
        label: 'Special Message (Optional)',
        helperText: 'Add a short message on the back (max 30 characters)'
      }
    ]
  },
  {
    id: 'wc-002',
    handle: 'anime-wallet-card',
    title: 'Anime Character Wallet Card',
    price: 179,
    images: [
      'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=400&h=500&fit=crop'
    ],
    collectionHandle: 'wallet-cards',
    shortDescription: 'Your favorite anime character wallet card',
    description: 'High-quality print of popular anime characters. Laminated for durability. Perfect for anime fans.',
    isCustomizable: false
  },
  {
    id: 'wc-003',
    handle: 'couple-wallet-card',
    title: 'Couple Wallet Card',
    price: 199,
    images: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop'
    ],
    collectionHandle: 'wallet-cards',
    shortDescription: 'Wallet card for couples with names and date',
    description: 'Beautiful wallet card featuring couple names and special date. Perfect for anniversaries or relationship milestones.',
    isCustomizable: true,
    customizationFields: [
      {
        type: 'text',
        name: 'name1',
        label: 'First Name',
        helperText: 'Enter first name'
      },
      {
        type: 'text',
        name: 'name2',
        label: 'Second Name',
        helperText: 'Enter second name'
      },
      {
        type: 'text',
        name: 'date',
        label: 'Special Date',
        helperText: 'Enter your special date (e.g., 14-02-2023)'
      }
    ]
  },
  {
    id: 'wc-004',
    handle: 'naruto-wallet-card',
    title: 'Naruto Wallet Card',
    price: 189,
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop'
    ],
    collectionHandle: 'anime-wallet-cards',
    shortDescription: 'Naruto themed wallet card',
    description: 'Featuring Naruto Uzumaki in dynamic poses. Perfect for Naruto fans.',
    isCustomizable: false
  },
  {
    id: 'wc-005',
    handle: 'demon-slayer-wallet-card',
    title: 'Demon Slayer Wallet Card',
    price: 189,
    images: [
      'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=500&fit=crop'
    ],
    collectionHandle: 'anime-wallet-cards',
    shortDescription: 'Demon Slayer anime wallet card',
    description: 'Featuring Tanjiro Kamado and other Demon Slayer characters.',
    isCustomizable: false
  },

  // Photo Keychains Collection
  {
    id: 'pk-001',
    handle: 'mini-photo-keychain',
    title: 'Mini Photo Keychain',
    price: 129,
    compareAtPrice: 179,
    isOnSale: true,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=500&fit=crop'
    ],
    collectionHandle: 'photo-keychains',
    shortDescription: 'Small keychain with your favorite photo',
    description: 'Turn your favorite memory into a portable keychain. Crystal clear print, durable materials.',
    isCustomizable: true,
    customizationFields: [
      {
        type: 'file',
        name: 'photo',
        label: 'Upload Photo',
        helperText: 'Upload a high-quality photo (JPG or PNG, max 5MB)'
      }
    ]
  },
  {
    id: 'pk-002',
    handle: 'heart-shaped-keychain',
    title: 'Heart Shaped Photo Keychain',
    price: 159,
    images: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop'
    ],
    collectionHandle: 'photo-keychains',
    shortDescription: 'Heart shaped keychain for special memories',
    description: 'Heart shaped acrylic keychain with your photo. Perfect gift for anniversaries or special occasions.',
    isCustomizable: true,
    customizationFields: [
      {
        type: 'file',
        name: 'photo',
        label: 'Upload Photo',
        helperText: 'Upload your favorite photo'
      }
    ]
  },
  {
    id: 'pk-003',
    handle: 'acrylic-photo-keychain',
    title: 'Acrylic Photo Keychain',
    price: 149,
    images: [
      'https://images.unsplash.com/photo-1523428096881-5bd79d043006?w=400&h=500&fit=crop'
    ],
    collectionHandle: 'photo-keychains',
    shortDescription: 'Clear acrylic photo keychain',
    description: 'Modern clear acrylic keychain with photo insert. Durable and stylish.',
    isCustomizable: true,
    customizationFields: [
      {
        type: 'file',
        name: 'photo',
        label: 'Upload Photo',
        helperText: 'Upload photo for the keychain'
      }
    ]
  },

  // Polaroids Collection
  {
    id: 'pol-001',
    handle: 'mini-polaroid-prints',
    title: 'Mini Polaroid Prints (Set of 4)',
    price: 199,
    images: [
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop'
    ],
    collectionHandle: 'polaroids',
    shortDescription: 'Set of 4 mini polaroid style prints',
    description: 'Mini polaroid style prints with white border. Set includes 4 prints of your favorite memories.',
    isCustomizable: true,
    customizationFields: [
      {
        type: 'file',
        name: 'photos',
        label: 'Upload 4 Photos',
        helperText: 'Upload 4 photos for the polaroid set'
      }
    ]
  },
  {
    id: 'pol-002',
    handle: 'polaroid-photo-set',
    title: 'Polaroid Photo Set (6 pieces)',
    price: 249,
    images: [
      'https://images.unsplash.com/photo-1526512340740-9217d0159da9?w=400&h=500&fit=crop'
    ],
    collectionHandle: 'polaroids',
    shortDescription: 'Set of 6 polaroid style photos',
    description: 'Beautiful polaroid set with handwritten captions option. Perfect for memory walls.',
    isCustomizable: true,
    customizationFields: [
      {
        type: 'file',
        name: 'photos',
        label: 'Upload Photos',
        helperText: 'Upload 6 photos for the polaroid set'
      }
    ]
  },

  // Gift Box Collection
  {
    id: 'gb-001',
    handle: 'personalized-gift-box-set',
    title: 'Personalized Gift Box Set',
    price: 499,
    compareAtPrice: 699,
    isOnSale: true,
    images: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=500&fit=crop'
    ],
    collectionHandle: 'gift-box',
    shortDescription: 'Complete gift box with multiple items',
    description: 'A beautifully packaged gift box containing: 1 wallet card, 2 polaroids, and 1 keychain. Fully customizable.',
    isCustomizable: true,
    customizationFields: [
      {
        type: 'text',
        name: 'recipientName',
        label: 'Recipient\'s Name',
        helperText: 'Name of the person receiving the gift'
      },
      {
        type: 'textarea',
        name: 'message',
        label: 'Gift Message',
        helperText: 'Special message for the recipient'
      }
    ]
  },
  {
    id: 'gb-002',
    handle: 'anniversary-gift-box',
    title: 'Anniversary Gift Box',
    price: 599,
    images: [
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=500&fit=crop'
    ],
    collectionHandle: 'gift-box',
    shortDescription: 'Special anniversary gift box set',
    description: 'Complete anniversary gift set including customized items and romantic elements.',
    isCustomizable: true,
    customizationFields: [
      {
        type: 'text',
        name: 'coupleNames',
        label: 'Couple Names',
        helperText: 'Enter both names separated by & (e.g., John & Jane)'
      },
      {
        type: 'text',
        name: 'anniversaryDate',
        label: 'Anniversary Date',
        helperText: 'Enter your anniversary date'
      }
    ]
  },

  // 2026 Calendar Collection
  {
    id: 'cal-001',
    handle: 'desk-calendar-2026',
    title: 'Desk Calendar 2026',
    price: 299,
    images: [
      'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=500&fit=crop'
    ],
    collectionHandle: '2026-calendar',
    shortDescription: '2026 desk calendar with your photos',
    description: 'Custom desk calendar for 2026 featuring 12 of your favorite photos. Each month displays a different memory.',
    isCustomizable: true,
    customizationFields: [
      {
        type: 'file',
        name: 'coverPhoto',
        label: 'Cover Photo',
        helperText: 'Upload photo for calendar cover'
      }
    ]
  },

  // Love Letters Collection
  {
    id: 'll-001',
    handle: 'handwritten-love-letter-set',
    title: 'Handwritten Love Letter Set',
    price: 249,
    images: [
      'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=400&h=500&fit=crop'
    ],
    collectionHandle: 'love-letters',
    shortDescription: 'Set of 3 handwritten style love letters',
    description: 'Three beautifully designed love letters with romantic quotes. Can be personalized with your message.',
    isCustomizable: true,
    customizationFields: [
      {
        type: 'textarea',
        name: 'customMessage',
        label: 'Your Love Message',
        helperText: 'Write your special message (will be added to all three letters)'
      }
    ]
  },

  // Photo Frames Collection
  {
    id: 'pf-001',
    handle: 'mini-acrylic-photo-stand',
    title: 'Mini Acrylic Photo Stand',
    price: 179,
    images: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=500&fit=crop'
    ],
    collectionHandle: 'photo-frames',
    shortDescription: 'Clear acrylic photo stand for desk',
    description: 'Modern clear acrylic photo stand. Perfect for displaying your favorite photo on desk or shelf.',
    isCustomizable: true,
    customizationFields: [
      {
        type: 'file',
        name: 'photo',
        label: 'Upload Photo',
        helperText: 'Upload photo to be printed'
      }
    ]
  },
  {
    id: 'pf-002',
    handle: 'wooden-photo-frame',
    title: 'Wooden Photo Frame (4x6 inch)',
    price: 249,
    images: [
      'https://images.unsplash.com/photo-1513519245088-0e129d6c9c12?w=400&h=500&fit=crop'
    ],
    collectionHandle: 'photo-frames',
    shortDescription: 'Natural wooden photo frame',
    description: 'Beautiful wooden frame with glass cover. Perfect for gifting.',
    isCustomizable: false
  },

  // Mini Album Keychains Collection
  {
    id: 'mak-001',
    handle: 'mini-flip-album-keychain',
    title: 'Mini Flip Album Keychain',
    price: 199,
    images: [
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?w=400&h=500&fit=crop'
    ],
    collectionHandle: 'mini-album-keychains',
    shortDescription: 'Tiny flip album with multiple photos',
    description: 'Mini flip album that can hold 4-6 small photos. Attaches to keys or bags.',
    isCustomizable: true,
    customizationFields: [
      {
        type: 'file',
        name: 'photos',
        label: 'Upload 4-6 Photos',
        helperText: 'Upload photos for the mini album'
      }
    ]
  },

  // =================== FRIDGE MAGNETS COLLECTION ===================
  {
    id: 'fm-001',
    handle: 'photo-fridge-magnet',
    title: 'Photo Fridge Magnet',
    price: 129,
    images: [
      '/photo-magnet.jpg'
    ],
    collectionHandle: 'fridge-magnet',
    shortDescription: 'Custom photo fridge magnet',
    description: 'Round or square fridge magnet with your favorite photo. Strong magnetic backing.',
    isCustomizable: true,
    customizationFields: [
      {
        type: 'file',
        name: 'photo',
        label: 'Upload Photo',
        helperText: 'Upload photo for the magnet'
      },
      {
        type: 'select',
        name: 'shape',
        label: 'Choose Shape',
        helperText: 'Select magnet shape',
        options: ['Round', 'Square', 'Heart']
      }
    ]
  },
  {
    id: 'fm-002',
    handle: 'quote-fridge-magnet',
    title: 'Inspirational Quote Magnet',
    price: 99,
    compareAtPrice: 149,
    isOnSale: true,
    images: [
      '/quote.jpg'
    ],
    collectionHandle: 'fridge-magnet',
    shortDescription: 'Magnet with inspirational quote',
    description: 'Beautiful magnet featuring inspirational quotes. Choose from our collection or customize your own text.',
    isCustomizable: true,
    customizationFields: [
      {
        type: 'text',
        name: 'quote',
        label: 'Your Quote',
        helperText: 'Enter your custom quote (max 50 characters)'
      },
      {
        type: 'select',
        name: 'design',
        label: 'Design Style',
        helperText: 'Choose design style',
        options: ['Minimal', 'Floral', 'Typographic', 'Watercolor']
      }
    ]
  },
  {
    id: 'fm-003',
    handle: 'custom-shape-magnet',
    title: 'Custom Shape Fridge Magnet',
    price: 149,
    images: [
      'https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?w=400&h=500&fit=crop'
    ],
    collectionHandle: 'fridge-magnet',
    shortDescription: 'Magnet in fun shapes',
    description: 'Fridge magnets in various shapes like hearts, stars, animals, or custom shapes.',
    isCustomizable: true,
    customizationFields: [
      {
        type: 'select',
        name: 'shape',
        label: 'Choose Shape',
        helperText: 'Select magnet shape',
        options: ['Heart', 'Star', 'Cat', 'Dog', 'Butterfly', 'Custom']
      },
      {
        type: 'text',
        name: 'text',
        label: 'Text (Optional)',
        helperText: 'Add text to the magnet'
      }
    ]
  },
  {
    id: 'fm-004',
    handle: 'mini-photo-magnets-set',
    title: 'Mini Photo Magnets Set (6 pieces)',
    price: 199,
    compareAtPrice: 299,
    isOnSale: true,
    images: [
      'https://images.unsplash.com/photo-1591261730799-ee4e6c2d16d7?w=400&h=500&fit=crop'
    ],
    collectionHandle: 'fridge-magnet',
    shortDescription: 'Set of 6 mini photo magnets',
    description: 'Set of 6 mini circular magnets with different photos. Perfect for creating a photo collage on your fridge.',
    isCustomizable: true,
    customizationFields: [
      {
        type: 'file',
        name: 'photos',
        label: 'Upload 6 Photos',
        helperText: 'Upload 6 photos for the magnet set'
      }
    ]
  },
  {
    id: 'fm-005',
    handle: 'family-name-magnet',
    title: 'Family Name Fridge Magnet',
    price: 179,
    images: [
      'https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=500&fit=crop'
    ],
    collectionHandle: 'fridge-magnet',
    shortDescription: 'Magnet with family name',
    description: 'Elegant fridge magnet featuring your family name in beautiful typography.',
    isCustomizable: true,
    customizationFields: [
      {
        type: 'text',
        name: 'familyName',
        label: 'Family Name',
        helperText: 'Enter your family name'
      },
      {
        type: 'select',
        name: 'font',
        label: 'Font Style',
        helperText: 'Choose font style',
        options: ['Script', 'Modern', 'Classic', 'Playful']
      }
    ]
  },

  // Stickers Collection
  {
    id: 'st-001',
    handle: 'custom-name-sticker',
    title: 'Custom Name Sticker (Pack of 10)',
    price: 89,
    images: [
      'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&h=500&fit=crop'
    ],
    collectionHandle: 'stickers',
    shortDescription: 'Pack of 10 custom name stickers',
    description: 'Waterproof vinyl stickers with your name. Perfect for laptops, water bottles, and notebooks.',
    isCustomizable: true,
    customizationFields: [
      {
        type: 'text',
        name: 'name',
        label: 'Name',
        helperText: 'Enter name for stickers'
      },
      {
        type: 'select',
        name: 'color',
        label: 'Sticker Color',
        helperText: 'Choose sticker color',
        options: ['White', 'Transparent', 'Pastel Pink', 'Pastel Blue']
      }
    ]
  },
  {
    id: 'st-002',
    handle: 'anime-character-stickers',
    title: 'Anime Character Stickers (Set of 15)',
    price: 149,
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=500&fit=crop'
    ],
    collectionHandle: 'stickers',
    shortDescription: 'Set of 15 anime character stickers',
    description: 'Variety pack of anime character stickers. Waterproof and durable.',
    isCustomizable: false
  }
]

// Helper function to get product by handle
export const getProductByHandle = (handle) => {
  return products.find(product => product.handle === handle)
}

// Helper function to get products by collection
export const getProductsByCollection = (collectionHandle) => {
  if (collectionHandle === 'all') {
    return products
  }
  return products.filter(product => product.collectionHandle === collectionHandle)
}

// Helper function to get featured products
export const getFeaturedProducts = () => {
  // Return products that are on sale or new
  return products.filter(product => product.isOnSale).slice(0, 6)
}

// Helper function to get all products
export const getAllProducts = () => {
  return products
}

export const getImageUrl = (imageUrl, width = 400, height = 500) => {
  if (!imageUrl || imageUrl.startsWith('https://images.unsplash.com')) {
    return imageUrl
  }
  // If it's a local image path, return as is
  return imageUrl
}