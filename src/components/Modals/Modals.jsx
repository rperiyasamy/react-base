import { React } from "react";

export default function Modal({ body, footer, title ,showmodal,setshowmodal, size}) {
  const modalSize = size ? `max-w-full max-h-full ${size}` : "max-w-5xl"; // use custom size if provided, otherwise use default

  return (
    <>
      {showmodal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className={`relative w-auto my-6 mx-auto ${modalSize}`}>
              {/*content of the modal*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header of the modal*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{title}</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setshowmodal(false)}
                  >
                    <span className=" text-dark h-6 w-6 text-2xl block outline-none focus:outline-none ">
                      X
                    </span>
                  </button>
                </div>
                {/*body of the modal*/}
                <div className="relative p-6 flex-auto">{body}</div>
                {/*footer of the modal*/}
                <div className="p-5 border-t border-solid border-slate-200 rounded-b">
                  {footer}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
