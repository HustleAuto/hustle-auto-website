import Image from 'next/image';

interface GoogleLogoProps {
  className?: string;
}

export default function GoogleLogo(props: GoogleLogoProps) {
  return (
    <Image
      src="/images/google-logo.svg"
      width={100}
      height={100}
      alt="Google Logo"
      className={props.className}
    />
  );
}
