import NextLink from 'next/link';
import Image from 'next/image';

const Logo = () => (
  <NextLink href="/">
    <a>
      <Image
        src="/logo.png?nf_resize=smartcrop&w=400&h=100"
        alt="me"
        width="400"
        height="100"
      />
    </a>
  </NextLink>
);
export default Logo;
