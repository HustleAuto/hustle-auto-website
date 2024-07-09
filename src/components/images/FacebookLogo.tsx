import Image from 'next/image';

interface FacebookLogoProps {
  className?: string;
}

export default function FacebookLogo(props: FacebookLogoProps) {
  return (
    <Image
      src="/images/facebook-logo.png"
      width={100}
      height={100}
      alt="Facebook Logo"
      className={props.className}
    />
  );
}
