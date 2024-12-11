type LeftArrowProps = React.SVGProps<SVGSVGElement>;

export const LeftArrow: React.FC<LeftArrowProps> = ({ ...props }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <path
        d="M32 15H3.41l8.29-8.29-1.41-1.42-10 10a1 1 0 0 0 0 1.41l10 10 1.41-1.41L3.41 17H32z"
        data-name="4-Arrow Left"
      />
    </svg>
  );
};
