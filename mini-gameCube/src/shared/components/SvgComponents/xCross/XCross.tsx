import './XCross.css';

type XCrossProps = {
   onClick: () => void;
};

export const XCross = ({ onClick }: XCrossProps) => {
   return (
      <div onClick={onClick}>
         <svg
            className="xCross"
            width="14.594971"
            height="14.000000"
            viewBox="0 0 14.595 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
         >
            <defs />
            <path
               id="Vector"
               d="M14.59 1.4L13.12 0L7.29 5.59L1.46 0L0 1.4L5.82 7L0 12.59L1.46 14L7.29 8.4L13.12 14L14.59 12.59L8.76 7L14.59 1.4Z"
               fillOpacity="1.000000"
               fillRule="nonzero"
            />
         </svg>
      </div>
   );
};
