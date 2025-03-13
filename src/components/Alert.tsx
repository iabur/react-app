import { ReactNode } from "react";
interface AlertProps {
  children: ReactNode;
  onClose: () => void;
}

function Alert({ children, onClose }: AlertProps) {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button
        className="btn-close"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
}

export default Alert;
