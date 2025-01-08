'use client';

import { Label, Separator } from '@radix-ui/react-dropdown-menu';
import { CheckIcon } from '@radix-ui/react-icons';
import { useLenis } from 'lenis/react';
import { useLocale, useTranslations } from 'next-intl';

import { Dropdown } from '@/common/ui';
import { Link, routing, usePathname } from '@/i18n/routing';

import styles from './styles.module.sass';

export const LangSwitcher = () => {
  const locale = useLocale();
  const pathname = usePathname();
  const { locales } = routing;
  const t = useTranslations('language');

  const languageOptions = locales.map((item) => ({
    key: item,
    title: item,
  }));

  const lenis = useLenis();

  const handleOnOpenChange = (isOpen: boolean) => {
    if (!lenis) {
      return;
    }

    if (isOpen) {
      lenis.stop();
    } else {
      lenis.start();
    }
  };

  return (
    <Dropdown title={locale} onOpenChange={handleOnOpenChange}>
      {languageOptions.map((option, i) => (
        <div key={i}>
          <Link
            href={pathname}
            locale={option.key}
            className={styles.wrapper}
            scroll={false}
          >
            {locale === option.key && (
              <span className={styles.checked}>
                <CheckIcon />
              </span>
            )}
            <Label className={styles.label}>{t(option.title)}</Label>
          </Link>
          <Separator className={styles.separator} />
        </div>
      ))}
    </Dropdown>
  );
};
