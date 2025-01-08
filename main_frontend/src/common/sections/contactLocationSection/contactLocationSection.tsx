import { FC } from 'react';

import { Section } from '../components';
import { ContactWithLocation, TContactWithLocation } from './components';
import styles from './styles.module.sass';

type TContactLocationSection = {
  data: TContactWithLocation[];
};

export const ContactLocationSection: FC<TContactLocationSection> = ({
  data,
}) => {
  return (
    <Section noPaddingFor="480px">
      <div className={styles.wrapper}>
        {data.map((item, i) => (
          <ContactWithLocation
            key={i}
            data={item.data}
            map={item.map}
            mapPlacement={item.mapPlacement}
          />
        ))}
      </div>
    </Section>
  );
};
