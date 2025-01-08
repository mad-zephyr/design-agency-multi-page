import cn from 'classnames';
import { FC } from 'react';

import { Contacts, TContacts } from '../contacts/contacts';
import { MapLocation, TMapLocation } from '../mapLocation/mapLocation';
import styles from './styles.module.sass';

export type TContactWithLocation = {
  data: TContacts;
  mapPlacement: 'left' | 'right';
  map: TMapLocation;
};

export const ContactWithLocation: FC<TContactWithLocation> = ({
  mapPlacement,
  data,
  map,
}) => {
  return (
    <div
      className={cn(styles.wrapper, {
        [styles.mapLeft]: mapPlacement === 'left',
        [styles.mapRight]: mapPlacement === 'right',
      })}
    >
      <Contacts {...data} />
      <MapLocation {...map} />
    </div>
  );
};
