/* eslint-disable react/prop-types */
import Icons from "../Icons/Icons";

export default function Buttons({type, children}) {
    return (
        <>
          { type === 'outline-btn' &&
            <button className="inline-flex items-center justify-center gap-4 px-8 py-4 text-lg font-sm tracking-wide transition duration-300 border rounded-full focus-visible:outline-none whitespace-nowrap border-btn-primary text-white hover:bg-btn-primary hover:text-primary">
              <span>{children}</span>
              <Icons style={'text-primary text-lg'} type="arrow-right"/>
            </button>
          }
          { type === 'bg-btn' &&
            <button className="inline-flex items-center justify-center gap-4 px-8 py-4 rounded-full text-lg font-medium tracking-wide text-primary transition duration-300 bg-btn-primary hover:bg-primary hover:border-2 hover:border-white uppercase">
              <span>{children}</span>
              <Icons style={'text-primary text-lg'} type="arrow-right"/>
            </button>
          }
        </>
      );
}
