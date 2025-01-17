import { Dialog, Portal } from '@chakra-ui/react';
import { CloseButton } from './close-button';
import * as React from 'react';

interface DialogContentProps extends Dialog.ContentProps {
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
  backdrop?: boolean;
}

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<DialogContentProps>
>(function DialogContent(props, ref) {
  const {
    children,
    portalled = true,
    portalRef,
    backdrop = true,
    ...rest
  } = props;

  return (
    <Portal disabled={!portalled} container={portalRef}>
      {backdrop && <Dialog.Backdrop />}
      <Dialog.Positioner>
        <div ref={ref} {...rest}>
          {children}
        </div>
      </Dialog.Positioner>
    </Portal>
  );
});

export const DialogCloseTrigger = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<Dialog.CloseTriggerProps>
>(function DialogCloseTrigger(props, ref) {
  return (
    <button
      ref={ref}
      className="absolute top-2 right-2"
      type="button"
      {...props}
    >
      <CloseButton size="sm">{props.children}</CloseButton>
    </button>
  );
});

export const DialogRoot = Dialog.Root;
export const DialogFooter = Dialog.Footer;
export const DialogHeader = Dialog.Header;
export const DialogBody = Dialog.Body;
export const DialogBackdrop = Dialog.Backdrop;
export const DialogTitle = Dialog.Title;
export const DialogDescription = Dialog.Description;
export const DialogTrigger = React.forwardRef<
  HTMLButtonElement,
  React.PropsWithChildren<Dialog.TriggerProps>
>(function DialogTrigger(props, ref) {
  const { children, ...rest } = props;
  return (
    <button ref={ref} {...rest}>
      {children}
    </button>
  );
});
export const DialogActionTrigger = Dialog.ActionTrigger;
