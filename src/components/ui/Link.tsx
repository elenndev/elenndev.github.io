type ILinkVariant = 'primary';
type ILinkFor = 'github' | 'figma' | 'deploy';
type ILinkSize = 'full' | 'fit' | 'custom'

interface LinkProps extends React.LinkHTMLAttributes<HTMLLinkElement> {
  children: React.ReactNode;
  variant: ILinkVariant;
  linkFor?: ILinkFor;
  size?: ILinkSize
}

export const Link: React.FC<LinkProps> = ({
  children,
  className,
  variant, linkFor,
  size = 'fit'
}) => {
  return (
    <a className={`${size !== 'custom' && `w-${size}`} ${className} 
    flex flex-row px-2
    hover:bg-link-hover
    bg-link text-black border-2 border-link-border uppercase rounded-md shadow-solid`}>
      {children}
    </a >
  )
}
