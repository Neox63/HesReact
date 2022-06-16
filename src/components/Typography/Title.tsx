import { ReactNode } from "react";

type Level = 1 | 2 | 3 | 4 | 5 | 6;
type Tag = `h${Level}`;

const Title = ({
  level,
  children,
  className,
}: {
  level: Level;
  children: ReactNode;
  className?: string;
}) => {
  const Tag: Tag = `h${level}`;

  return (
    <Tag className={`text-3xl font-bold dark:text-gray-200 ${className}`}>
      {children}
    </Tag>
  );
};

export default Title;
