import NextLink from 'next/link';
import Image from 'next/image';

const Logo = () => (
  <NextLink href="/">
    <a>
      <Image src="/logo.png" alt="me" width="400" height="100" />
    </a>
  </NextLink>
);
export default Logo;
