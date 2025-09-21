import { forwardRef } from "react";
import { Svg } from "./Svg";

type ISectionVariant = 'default' | 'welcome';

interface sectionProps {
  variant?: ISectionVariant;
  children: React.ReactNode;
  id: string;
  title: string;
}


export const Section = forwardRef<HTMLElement, sectionProps>(({ variant = 'welcome', children, id, title }, ref) => {
  const welcomeSectionHeaderClasses = 'bg-red-theme text-white'

  return (
    <section ref={ref} id={id} className="min-h-fit w-[95%] bg-body">
      <div className="bg-body relative z-[1] border-1 border-border-default">
        <div className='section-header py-2 border-b-1 border-b-border-default flex flex-row items-center justify-center relative'>
          <div className="flex flex-row gap-1 sm:gap-[10px] absolute w-fit top-1/2 left-3 -translate-y-1/2">
            <span className="w-[13px] h-[13px] rounded-full bg-text"></span>
            <span className="w-[13px] h-[13px] rounded-full bg-text"></span>
          </div>
          <span className={`${variant === 'welcome' && welcomeSectionHeaderClasses}
          flex flex-row gap-2 px-3 py-1 md:py-2 justify-center w-3/5 sm:w-2/3 relative items-center uppercase rounded-3xl border-1 border-border-default`}>
            <Svg icon="website" className="w-6 md:w-8 sm:absolute sm:top-1/2 sm:left-3 sm:-translate-y-1/2" />
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
