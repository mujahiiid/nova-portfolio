export type Product = {
  id: string
  look: string
  name: string
  material: string
  price: string
  image: string
  alt: string
  description: string
  colors: { name: string; value: string }[]
  sizes: string[]
  care: string
}

export const PRODUCTS: Product[] = [
  {
    id: 'structure-jacket',
    look: 'Look 01',
    name: 'Structure Jacket',
    material: 'Wool Blend',
    price: '€420',
    image: '/images/campaign/structure-jacket-editorial.webp',
    alt: 'Model wearing the NOVA Structure Jacket in a warm plaster studio',
    description: 'An oversized tailored jacket built around a square shoulder and a controlled, architectural drape.',
    colors: [{ name: 'Charcoal', value: '#292929' }, { name: 'Bone', value: '#ddd2bd' }],
    sizes: ['XS', 'S', 'M', 'L'],
    care: 'Dry clean only. Store on a structured hanger.',
  },
  {
    id: 'form-trouser',
    look: 'Look 02',
    name: 'Form Trouser',
    material: 'Cotton Twill',
    price: '€260',
    image: '/images/campaign/form-trouser-in-motion.webp',
    alt: 'Model in wide-leg NOVA Form Trousers moving through a concrete passage',
    description: 'A high-rise pleated trouser with a wide leg engineered to hold volume while the body moves.',
    colors: [{ name: 'Bone', value: '#e8dfcf' }, { name: 'Ink', value: '#151515' }],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    care: 'Cold hand wash or gentle dry clean. Press inside out.',
  },
  {
    id: 'object-shirt',
    look: 'Look 03',
    name: 'Object Shirt',
    material: 'Cotton Poplin',
    price: '€190',
    image: '/images/campaign/object-shirt-editorial.webp',
    alt: 'Model wearing the sculptural off-white NOVA Object Shirt',
    description: 'An asymmetric poplin shirt shaped by a folded collar, dropped shoulder and extended hem.',
    colors: [{ name: 'Chalk', value: '#eee7da' }, { name: 'Electric', value: '#245bff' }],
    sizes: ['XS/S', 'M/L'],
    care: 'Machine wash cold on a delicate cycle. Air dry and steam lightly.',
  },
  {
    id: 'void-coat',
    look: 'Look 04',
    name: 'Void Coat',
    material: 'Boiled Wool',
    price: '€680',
    image: '/images/campaign/void-coat-gallery.webp',
    alt: 'Model crossing a pale gallery in the floor-length NOVA Void Coat',
    description: 'A monumental floor-length coat with a precise collar and enough volume to change the silhouette in motion.',
    colors: [{ name: 'Ink', value: '#111111' }, { name: 'Ash', value: '#77736d' }],
    sizes: ['S', 'M', 'L'],
    care: 'Specialist dry clean only. Brush between wears.',
  },
]
