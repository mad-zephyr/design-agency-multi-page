import { FC } from 'react';

import { Section } from '../components';
import { ServiceCard, TServiceCard } from './components';
import styles from './styles.module.sass';

type TServiceSection = {
  columnOne: TServiceCard[];
  columnTwo: TServiceCard[];
};

export const ServiceSection: FC<TServiceSection> = ({
  columnOne,
  columnTwo,
}) => {
  return (
    <Section>
      <div className={styles.content}>
        <div className={styles.column}>
          {columnOne.map((item, i) => (
            <ServiceCard
              key={i}
              image={item.image}
              title={item.title}
              link={item.link}
            />
          ))}
        </div>
        <div className={styles.column}>
          {columnTwo.map((item, i) => (
            <ServiceCard
              key={i}
              image={item.image}
              title={item.title}
              link={item.link}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};
