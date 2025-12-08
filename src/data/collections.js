// src/data/collections.js
export const collections = [
    {
    handle: 'fridge-magnet',
    title: 'Fridge Magnets',
    description: 'Custom magnets with photos or text to decorate your refrigerator.',
    productHandles: ['photo-fridge-magnet', 'quote-fridge-magnet', 'custom-shape-magnet', 'mini-photo-magnets-set']
  },
  {
    handle: 'wallet-cards',
    title: 'Wallet Cards',
    description: 'Personalized wallet-sized cards perfect for carrying memories in your pocket.',
    productHandles: ['personalized-name-wallet-card', 'anime-wallet-card', 'couple-wallet-card']
  },
  {
    handle: 'photo-keychains',
    title: 'Photo Keychains',
    description: 'Turn your favorite photos into portable keychains you can carry everywhere.',
    productHandles: ['mini-photo-keychain', 'heart-shaped-keychain', 'acrylic-photo-keychain']
  },
  {
    handle: 'polaroids',
    title: 'Polaroids',
    description: 'Mini polaroid style prints to decorate your space or gift to loved ones.',
    productHandles: ['mini-polaroid-prints', 'polaroid-photo-set']
  },
  {
    handle: 'gift-box',
    title: 'Gift Box',
    description: 'Complete gift sets containing multiple personalized items.',
    productHandles: ['personalized-gift-box-set', 'anniversary-gift-box']
  },
  {
    handle: '2026-calendar',
    title: '2026 Calendar',
    description: 'Custom calendars featuring your photos for the upcoming year.',
    productHandles: ['desk-calendar-2026']
  },
  {
    handle: 'love-letters',
    title: 'Love Letters',
    description: 'Romantic letter sets perfect for expressing your feelings.',
    productHandles: ['handwritten-love-letter-set']
  },
  {
    handle: 'photo-frames',
    title: 'Photo Frames',
    description: 'Modern photo stands and frames for displaying memories.',
    productHandles: ['mini-acrylic-photo-stand', 'wooden-photo-frame']
  },
  {
    handle: 'mini-album-keychains',
    title: 'Mini Album Keychains',
    description: 'Tiny flip albums you can attach to your keys or bag.',
    productHandles: ['mini-flip-album-keychain']
  },

  {
    handle: 'anime-wallet-cards',
    title: 'Anime Wallet Cards',
    description: 'Wallet cards featuring your favorite anime characters.',
    productHandles: ['anime-wallet-card', 'naruto-wallet-card', 'demon-slayer-wallet-card']
  },
  {
    handle: 'new-arrivals',
    title: 'New Arrivals',
    description: 'Check out our latest personalized gift additions.',
    productHandles: ['heart-shaped-keychain', 'desk-calendar-2026', 'acrylic-photo-keychain']
  },
  {
    handle: 'under-100',
    title: 'Under ₹100',
    description: 'Affordable gifts that still carry big emotions.',
    productHandles: ['mini-photo-keychain', 'quote-fridge-magnet']
  },
  {
    handle: 'stickers',
    title: 'Stickers',
    description: 'Custom stickers for laptops, water bottles, and journals.',
    productHandles: ['custom-name-sticker', 'anime-character-stickers']
  },
  {
    handle: 'all',
    title: 'All Products',
    description: 'Browse all our personalized gifts in one place.',
    productHandles: []
  }
]

// Helper function to get collection by handle
export const getCollectionByHandle = (handle) => {
  return collections.find(collection => collection.handle === handle)
}

// Get all collections except 'all'
export const getMainCollections = () => {
  return collections.filter(collection => collection.handle !== 'all')
}