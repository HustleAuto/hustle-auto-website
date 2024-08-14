import { CheckIcon } from '@radix-ui/react-icons';

interface CheckboxListItemProps {
  children: React.ReactNode;
}

export default function CheckboxListItem({ children }: CheckboxListItemProps) {
  return (
    <li className="flex items-start space-x-1">
      <CheckIcon className="w-5 h-5 text-primary shrink-0" />
      <div>{children}</div>
    </li>
  );
}
