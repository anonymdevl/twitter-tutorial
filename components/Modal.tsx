import { useCallback } from 'react';

interface ModalProps {
  isOpen?: boolean;
  title?: string;
  actionLabel?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  onClose: () => void;
  onSubmit: () => void;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  actionLabel,
  onSubmit,
  body,
  footer,
  disabled,
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    onClose();
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  if (!isOpen) {
    return null;
  }

  return <div></div>;
};

export default Modal;
