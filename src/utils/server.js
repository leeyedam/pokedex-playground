const dev = process.env.NODE_ENV !== 'production';

export const server = dev ? 'http://localhost:3000' : 'https://hotel-pi-three.vercel.app/';


// 'https://next-ecommerce-front.vercel.app'