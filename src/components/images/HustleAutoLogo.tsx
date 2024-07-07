import Image from 'next/image';
import * as React from 'react';

interface HustleAutoLogoProps {
  className?: string;
}

export default function HustleAutoLogo(props: HustleAutoLogoProps) {
  return (
    <Image
      src="/logo.svg"
      width={100}
      height={100}
      alt="Hustle Auto Logo"
      className={props.className}
    />
  );
}
