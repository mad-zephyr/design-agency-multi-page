import { BlocksContent } from '@strapi/blocks-react-renderer';
import { FC } from 'react';

import { FormBuilder, FormWrapper, TFormBuilder } from '@/common/forms';

import styles from './styles.module.sass';

type TContactSection = {
  formDescription?: BlocksContent;
  form: TFormBuilder;
};

export const ContactSection: FC<TContactSection> = ({
  form,
  formDescription,
}) => {
  return (
    <section className={styles.section}>
      <FormWrapper description={formDescription}>
        <FormBuilder fields={form.fields} submitButtons={form.submitButtons} />
      </FormWrapper>
    </section>
  );
};
