import Image from 'next/image';
export const Logo = ({ width = 100, height = 32 }) => (
  <Image
    priority
    src='/logo.svg'
    height={height}
    width={width}
    alt='Logo'
    style={{ margin: 'auto' }}
  />
);
