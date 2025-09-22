type ILinkVariant = 'primary' | 'project';
type ILinkSize = 'full' | 'fit' | 'custom'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: ILinkVariant;
  size?: ILinkSize;
  download?: string | boolean
}

export const Link: React.FC<LinkProps> = ({
  children,
  className,
  variant = 'primary',
  size = 'fit',
  ...props
}) => {

  const backgroundAndTextColors = () => {
    switch (variant) {
      case 'primary':
        return 'bg-link text-black hover:bg-link-hover';

      case 'project':
        return 'bg-white text-black hover:bg-link-hover';

    }
  }
  return (
    <a {...props} className={`${size !== 'custom' && `w-${size}`} ${className} 
    ${backgroundAndTextColors()}
    flex flex-row px-2
    border-2 border-link-border uppercase rounded-md shadow-solid`}>
      {children}
    </a >
  )
}
