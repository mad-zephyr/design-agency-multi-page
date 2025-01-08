'use client';

import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer';
import { FC, useState } from 'react';

import { FormWrapper } from '@/common/forms';
import { FormBuilder, TFormBuilder } from '@/common/forms/formBuilder';
import { Modal } from '@/common/modules';
import { GenericButton, Htag } from '@/common/ui';
import { TButton } from '@/common/ui/button/button.types';
import { Maybe } from '@/types/types';

import { PatternSix } from '../components';
import styles from './styles.module.sass';

type TGetinTouchSection = {
  title?: Maybe<string>;
  content: BlocksContent;
  button?: TButton;
  form: TFormBuilder;
  formDescription?: BlocksContent;
};

export const GetinTouchSection: FC<TGetinTouchSection> = ({
  title,
  content,
  button,
  form,
  // formTitle,
  formDescription,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.main}>
          <div className={styles.content}>
            {title && <Htag type="h2" content={title} />}
            {content && <BlocksRenderer content={content} />}
          </div>
          {button && (
            <GenericButton
              data={{ ...button, onClick: () => handleOpenModal() }}
            />
          )}
          <PatternSix />
        </div>
      </div>

      <Modal
        rootId="contact-form"
        onClose={handleOpenModal}
        isOpen={isModalOpen}
      >
        <FormWrapper description={formDescription}>
          <FormBuilder
            fields={form.fields}
            submitButtons={form.submitButtons}
          />
        </FormWrapper>
      </Modal>
    </section>
  );
};
