import { Card } from '@/components/ui/card';
import { FormControl, FormItem, FormLabel } from '@/components/ui/form';
import { RadioGroupItem } from '@/components/ui/radio-group';

interface RadioCardGroupItemProps {
  children: React.ReactNode;
  value: string;
}

export default function RadioCardGroupItem({
  children,
  value,
}: RadioCardGroupItemProps) {
  return (
    <FormItem className="relative">
      <FormControl>
        <RadioGroupItem value={value} className="absolute top-6 right-6 peer" />
      </FormControl>
      <FormLabel className="*:border peer-data-[state=checked]:*:border-primary">
        <Card className="transition-colors hover:bg-accent hover:text-accent-foreground">
          {children}
        </Card>
      </FormLabel>
    </FormItem>
  );
}
