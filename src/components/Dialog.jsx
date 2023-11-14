import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon, ClipboardIcon } from "@radix-ui/react-icons";

const DonateDialog = () => {
  const [isCopied, setIsCopied] = useState(false);
  const btcAddress = "bc1qtdewft3rz7pyk2fjpjhjpp2gum5p2czapknvlq";
  const handleCopyClick = () => {
    navigator.clipboard.writeText(btcAddress);
    setIsCopied(true);

    // Reset the "Copied" state after a few seconds
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button href="#" className="donate-btn ">
          Donate Now
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/50 backdrop-blur-sm   data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className=" text-center m-0 text-[17px]  font-medium">
            Thanks for your Donation!! 😁
            <p className="mt-2">
              Please send Bitcoin(BTC) to the address below
            </p>
          </Dialog.Title>
          <Dialog.Description className="text-mauve11 mt-[10px] text-center mb-5 text-[15px] leading-normal">
            <p className="text-lg overflow-hidden truncate text-medium bg-gray-200 border mt-4 rounded p-3">
              {" "}
              {btcAddress}
            </p>
            <button
              onClick={handleCopyClick}
              className="ml-2 text-violet11 px-4 py-2 bg-myDarkRed text-white mt-4 focus:shadow-violet7 inline-flex items-center  rounded-md focus:outline-none"
            >
              {isCopied ? "Copied" : "Copy address"}
              {isCopied ? null : <ClipboardIcon className="ml-1 w-4 h-4" />}
            </button>
          </Dialog.Description>
          <p className="text-center mt-4 font-medium">
            {" "}
            You just made a child smile
          </p>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DonateDialog;
