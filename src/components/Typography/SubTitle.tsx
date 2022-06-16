import { ReactNode } from "react";

const SubTitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <span className={`text-lg font-bold dark:text-gray-200 ${className}`}>
      {children}
    </span>
  );
};

export default SubTitle;
