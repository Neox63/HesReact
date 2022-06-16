import { ReactNode } from "react";

const Layout = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`flex flex-col gap-4 p-8 bg-white dark:bg-gray-800 rounded-lg shadow ${className}`}
    >
      {children}
    </div>
  );
};

export default Layout;
