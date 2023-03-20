import { CheckIcon, XMarkIcon } from "@heroicons/react/20/solid";

const Badge = ({ Badgecross, Badgetick ,BadgeCompelte,sucesstext}) => {
  return (
    <>
      {Badgecross ? (
        <div className="bg-red-50 w-6 h-6 rounded-full flex items-center justify-center">
          <XMarkIcon className="w-4 text-red-500" />
        </div>
      ) : (
        <></>
      )}
      {Badgetick ? (
        <div className="bg-green-50 w-6 h-6 rounded-full flex items-center justify-center">
          <CheckIcon className="w-4 text-green-500" />
        </div>
      ) : (
        <></>
      )}

      {BadgeCompelte ?<div className='bg-green-50 rounded flex items-center justify-center px-2 py-1'>
                    <p className='text-green-500 text-sm'>{sucesstext}</p>
                  </div>:<></>

      }
    </>
  );
};

export default Badge;
