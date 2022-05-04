import React, { FC, ReactElement } from "react";

import {
  AlertDialog as _AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

interface AlertDialogProps {
  title: string;
  subtitle?: string;
  button: ReactElement;
  btnPri: Partial<{
    colorSchema: string;
    label: string;
    onClick(): void;
  }>;
  btnSec?: Partial<{
    colorSchema: string;
    label: string;
    onClick(): void;
  }>;
  isDisabled?: boolean;
}

export const AlertDialog: FC<AlertDialogProps> = ({
  button,
  subtitle,
  title,
  btnPri,
  btnSec,
  isDisabled,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);

  return (
    <>
      <div onClick={isDisabled ? undefined : () => setIsOpen(true)}>
        {button}
      </div>
      <_AlertDialog
        isCentered
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay rounded="sm">
          <AlertDialogContent rounded="sm">
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {title}
            </AlertDialogHeader>

            <AlertDialogBody>{subtitle}</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                {btnSec?.label}
              </Button>
              <Button
                colorScheme={btnPri.colorSchema}
                onClick={() => {
                  btnPri.onClick && btnPri.onClick();
                  onClose();
                }}
                ml={3}
              >
                {btnPri.label}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </_AlertDialog>
    </>
  );
};

AlertDialog.defaultProps = {
  title: "",
  subtitle: "Estás seguro que deseas realizar esta acción?",
  btnPri: {
    label: "Aceptar",
  },
  btnSec: {
    label: "Cancelar",
  },
};

/* import React, { FC } from "react";

import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  MenuItem,
  chakra,
} from "@chakra-ui/react";
import { Trash2 } from "react-feather";
import { useUser } from "@/contexts";

interface AlertDialogProps {
  userId: number;
}

export const AlertDialogProps: FC<AlertDialogProps> = ({ userId }) => {
  const { deleteUser } = useUser();
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  const cancelRef = React.useRef(null);

  return (
    <>
      <MenuItem
        color="red.600"
        icon={<Trash2 size="1.25rem" />}
        onClick={() => setIsOpen(true)}
      >
        <chakra.b>Eliminar</chakra.b>
      </MenuItem>
      <AlertDialog
        isCentered
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay rounded="sm">
          <AlertDialogContent rounded="sm">
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Eliminar Usuario
            </AlertDialogHeader>

            <AlertDialogBody>
              
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button
                colorScheme="red"
                onClick={() => {
                  deleteUser(userId);
                  setIsOpen(false);
                }}
                ml={3}
              >
                Eliminar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};
 */
