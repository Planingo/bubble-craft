type ButtonProps = {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  className?: string
}