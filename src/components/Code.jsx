import { useState, useEffect } from "react";

import { BiSolidCopyAlt } from "react-icons/bi";
import { BsFileEarmarkCheckFill } from "react-icons/bs";

const Code = ({ children }) => {
    const [isCopied, setCopied] = useState(false);

    const handleCopy = () => {
        const textToCopy = children.props.children;

        navigator.clipboard.writeText(textToCopy);
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            setCopied(false);
        }, 3000);

        return () => clearTimeout(timeout);
    }, [isCopied]);

    return (
        <div className="w-full md:min-w-[35rem] mx-auto border-[1.5px] border-[#ffffff15] rounded-lg overflow-hidden backdrop-blur-lg z-40">
            <div className="px-3 flex justify-between items-center bg-slate-800 p-1 text-xl text-slate-400">
                <code className="text-sm">Code</code>
                {isCopied ? (
                    <BsFileEarmarkCheckFill />
                ) : (
                    <BiSolidCopyAlt
                        onClick={() => {
                            setCopied(true);
                            handleCopy();
                        }}
                    />
                )}
            </div>
            <pre className="px-2 py-4 text-slate-400 overflow-auto">
                {children}
            </pre>
        </div>
    );
};

export default Code;
