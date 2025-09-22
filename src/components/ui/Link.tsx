type ILinkVariant = 'primary';
type ILinkSize = 'full' | 'fit' | 'custom'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: ILinkVariant;
  size?: ILinkSize;
}

export const Link: React.FC<LinkProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'fit',
  ...props
}) => {
  return (
    <a {...props} className={`${size !== 'custom' && `w-${size}`} ${className} 
    flex flex-row px-2
    hover:bg-link-hover
    bg-link text-black border-2 border-link-border uppercase rounded-md shadow-solid`}>
      {children}
    </a >
  )
}
