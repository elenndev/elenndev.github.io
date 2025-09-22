import { forwardRef } from "react";
import { IconContext } from "react-icons";
import { RiGlobalLine } from "react-icons/ri";


type ISectionVariant = 'default' | 'welcome';

interface sectionProps {
  variant?: ISectionVariant;
  children: React.ReactNode;
  id: string;
  title: string;
}


export const Section = forwardRef<HTMLElement, sectionProps>(({ variant = 'default', children, id, title }, ref) => {
  const welcomeSectionHeaderClasses = 'bg-red-theme text-white'
  const iconColor = variant === 'default' ? 'var(--color-secondary)' : 'white'

  return (
    <section ref={ref} id={id} className="min-h-[500px] h-fit w-[95vw] text-text">
      <div className="bg-body relative z-[1] border-1 border-border-default">
        <div className='section-header py-2 border-b-1 border-b-border-default flex flex-row items-center justify-center relative'>
          <div className="flex flex-row gap-1 sm:gap-[10px] absolute w-fit top-1/2 left-3 -translate-y-1/2">
            <span className="w-[13px] h-[13px] rounded-full bg-text"></span>
            <span className="w-[13px] h-[13px] rounded-full bg-text"></span>
          </div>
          <span className={`${variant === 'welcome' && welcomeSectionHeaderClasses}
          flex flex-row gap-2 px-3 py-1 md:py-2 justify-center w-3/5 sm:w-2/3 relative items-center uppercase rounded-3xl border-1 border-border-default`}>
            <IconContext.Provider value={{ style: { color: iconColor }, size: '1.5rem', className: 'hover:cursor-pointer sm:absolute sm:top-1/2 sm:left-3 sm:-translate-y-1/2' }}>
              <RiGlobalLine />
            </IconContext.Provider>

            <span>
              <p>{title}</p>

            </span>

          </span>
        </div>
        {children}
      </div>

    </section>
  )
}
)
