import { Roboto } from 'next/font/google';

const roboto = Roboto({
    subsets: ['latin'], // Choose the subset(s) you need
    weight: ['400', '500', '700'], // Add the required font weights
    style: ['normal', 'italic'], // Specify the styles you need
    display: 'swap', // Use 'swap' for improved loading performance
  });
  
  // Export the configured font
  export default roboto;