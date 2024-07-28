import { cn } from '@/lib/utils';

interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function PageSection({ children, className }: PageSectionProps) {
  return <section className={cn('px-4 mt-20', className)}>{children}</section>;
}
