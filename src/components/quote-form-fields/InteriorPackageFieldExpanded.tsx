import { useFormContext } from 'react-hook-form';

import CheckboxListItem from '@/components/CheckboxListItem';
import RadioCardGroupItem from '@/components/RadioCardGroupItem';
import { CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '@/components/ui/form';
import { RadioGroup } from '@/components/ui/radio-group';
import { QuoteFormSchema } from '@/hooks/useQuoteForm';
import { cn, formatPrice } from '@/lib/utils';
import { Service } from '@/models/Service';
import { Price } from '@/Price';

export default function InteriorPackageFieldExpanded() {
  const form = useFormContext<QuoteFormSchema>();

  const carType = form.watch('carType');
  const labels = {
    [Service.InteriorPackageID.Regular]:
      `${Service.InteriorPackageID.Regular} (${carType}) (${formatPrice(Price.InteriorPackage[Service.InteriorPackageID.Regular][carType])})`,
    [Service.InteriorPackageID.Deep]:
      `${Service.InteriorPackageID.Deep} (${carType}) (${formatPrice(Price.InteriorPackage[Service.InteriorPackageID.Deep][carType])})`,
  };

  return (
    <FormField
      control={form.control}
      name="interiorPackage"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Select Your Interior Package</FormLabel>
          <FormControl>
            <RadioGroup value={field.value} onValueChange={field.onChange}>
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                <RadioCardGroupItem value={Service.InteriorPackageID.Regular}>
                  <CardHeader>
                    <CardTitle>
                      {labels[Service.InteriorPackageID.Regular]}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>{regularInteriorCardContent}</CardContent>
                </RadioCardGroupItem>

                <RadioCardGroupItem value={Service.InteriorPackageID.Deep}>
                  <CardHeader>
                    <CardTitle>
                      {labels[Service.InteriorPackageID.Deep]}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>{deepInteriorCardContent}</CardContent>
                </RadioCardGroupItem>
              </div>
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );
}

const classes = {
  listItemWrapper: cn('space-y-1.5 mt-0.5'),
  listItemHeading: cn('text-md'),
  listItemDescription: cn('typography-muted'),
};

const regularInteriorCardContent = (
  <>
    <ul className="space-y-5">
      <CheckboxListItem>
        <div className={classes.listItemWrapper}>
          <p className={classes.listItemHeading}>Thorough Vacuuming</p>
          <p className={classes.listItemDescription}>
            We meticulously vacuum every corner of your car&apos;s carpets,
            seats, and trunk, ensuring a spotless interior
          </p>
        </div>
      </CheckboxListItem>

      <CheckboxListItem>
        <div className={classes.listItemWrapper}>
          <p className={classes.listItemHeading}>
            Deep Clean with Hot Water Shampoo
          </p>
          <p className={classes.listItemDescription}>
            Our hot water shampoo treatment penetrates deep into your carpets
            and seats, lifting dirt and restoring their original luster
          </p>
        </div>
      </CheckboxListItem>

      <CheckboxListItem>
        <div className={classes.listItemWrapper}>
          <p className={classes.listItemHeading}>Pristine Floor Mats</p>
          <p className={classes.listItemDescription}>
            We wash and shine your floor mats, leaving them looking fresh and
            new
          </p>
        </div>
      </CheckboxListItem>

      <CheckboxListItem>
        <div className={classes.listItemWrapper}>
          <p className={classes.listItemHeading}>
            Comprehensive Surface Cleaning
          </p>
          <p className={classes.listItemDescription}>
            Every surface inside your car is carefully wiped down, ensuring a
            clean and sanitized environment.
          </p>
        </div>
      </CheckboxListItem>

      <CheckboxListItem>
        <div className={classes.listItemWrapper}>
          <p className={classes.listItemHeading}>Crystal Clear Glass</p>
          <p className={classes.listItemDescription}>
            Enjoy a streak-free view with our meticulous interior glass cleaning
          </p>
        </div>
      </CheckboxListItem>
    </ul>
  </>
);

const deepInteriorCardContent = (
  <>
    <ul className="space-y-5">
      <CheckboxListItem>
        <div className={classes.listItemWrapper}>
          <p className={classes.listItemHeading}>
            Everything Included In Regular Interior Detail
          </p>
          <p className={classes.listItemDescription}>
            Enjoy all the benefits of our Regular Interior Detail package
          </p>
        </div>
      </CheckboxListItem>

      <CheckboxListItem>
        <div className={classes.listItemWrapper}>
          <p className={classes.listItemHeading}>Air Compression Cleaning</p>
          <p className={classes.listItemDescription}>
            We use air compression to clean the cracks and crevices, reaching
            spots traditional methods can&apos;t
          </p>
        </div>
      </CheckboxListItem>

      <CheckboxListItem>
        <div className={classes.listItemWrapper}>
          <p className={classes.listItemHeading}>
            Fabric and Carpet Protection
          </p>
          <p className={classes.listItemDescription}>
            Our protective treatments ensure your carpeted and fabric surfaces
            stay cleaner for longer
          </p>
        </div>
      </CheckboxListItem>

      <CheckboxListItem>
        <div className={classes.listItemWrapper}>
          <p className={classes.listItemHeading}>
            Leather Cleaning and Conditioning
          </p>
          <p className={classes.listItemDescription}>
            We clean and condition your leather seats, enhancing their look and
            extending their lifespan
          </p>
        </div>
      </CheckboxListItem>

      <CheckboxListItem>
        <div className={classes.listItemWrapper}>
          <p className={classes.listItemHeading}>Vinyl Surface Care</p>
          <p className={classes.listItemDescription}>
            Vinyl surfaces are conditioned and dressed for a polished and
            protected finish
          </p>
        </div>
      </CheckboxListItem>

      <CheckboxListItem>
        <div className={classes.listItemWrapper}>
          <p className={classes.listItemHeading}>
            Headliner and Door Jams Cleaning
          </p>
          <p className={classes.listItemDescription}>
            Thorough cleaning of headliners and door jams for a complete
            interior refresh
          </p>
        </div>
      </CheckboxListItem>

      <CheckboxListItem>
        <div className={classes.listItemWrapper}>
          <p className={classes.listItemHeading}>
            Stain Removal and Steam Cleaning
          </p>
          <p className={classes.listItemDescription}>
            We tackle tough stains with steam cleaning, suitable for both vinyl
            and leather surfaces
          </p>
        </div>
      </CheckboxListItem>

      <CheckboxListItem>
        <div className={classes.listItemWrapper}>
          <p className={classes.listItemHeading}>Sanitized Air Vents</p>
          <p className={classes.listItemDescription}>
            Air vents are sanitized and cleaned to ensure a fresher, healthier
            cabin air
          </p>
        </div>
      </CheckboxListItem>
    </ul>
  </>
);
