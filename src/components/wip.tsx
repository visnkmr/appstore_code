import React from "react";

export default function Workinp(){
    return (
        <>
        <div className="p-2 flex flex-col items-center m-20">
        <div className='font-bold mb-4 leading-tighter tracking-tighter md:px-0 md:text-[2.48rem] px-4 text-5xl m-5'>Recent Projects</div>

        <div className="mb-8 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
        >
            <h2 className={`mb-3 text-2xl font-semibold`}>
            Iomer{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
            </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            File explorer made using rust and tauri. Support multi-window, tabs, fzf like search, swift folder size compute, hot reload for markdown, html.
            </p>
        </a>

        <a
            href=""
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
        >
            <h2 className={`mb-3 text-2xl font-semibold`}>
            Prefstore{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
            </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Rust lib to save preferences with one line of code.
            </p>
        </a>
        </div>
        </div>

        </>

    );
}