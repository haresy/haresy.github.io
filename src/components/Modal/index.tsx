import React from "react";
import {Dialog, DialogOverlay, DialogContent, DialogHeader} from '../ui/dialog.tsx';

export interface ModalProps {
    children?: React.ReactNode;
    title: string;
    open?: boolean;
    onOpenChange?: (s: boolean) => void;
    className?: string;
}

const Modal = ({
                   children,
                   title,
                   open,
                   onOpenChange,
                   className,
               }: ModalProps) => {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogOverlay>
                <DialogContent className={className}>
                    <DialogHeader
                        title={title}
                    />
                    {children}
                </DialogContent>
            </DialogOverlay>
        </Dialog>
    );
};

export {Modal};
