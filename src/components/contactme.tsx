import Textspin from "./textloop";
const TEXTS=[
    <a aria-aria-label="linkedin"
    target="_blank"
    rel="noreferrer"
    href="https://www.linkedin.com/in/vishnunk-59124/">
        {"Linkedin "}
    </a>,
    <a aria-label="github"
    target="_blank"
    rel="noreferrer"
    href="https://github.com/visnkmr"
    >
        {"Github "}
    </a>,
    <a aria-label="youtube"
    target="_blank"
    rel="noreferrer"
    href="https://youtube.com/@vishnunk">
        {"Youtube "}
    </a>,
    <a aria-label="telegram"
    target="_blank"
    rel="noreferrer"
    href="https://vishnunkmr.t.me/">
        {"Telegram "}
    </a>,
];
export default function Contactme(){
    return(
        <div className="mb-10">
        <h1 className="text-gray-900 text-center font-bold font-heading leading-tighter tracking-tighter xl:px-0 xl:text-[3.48rem] px-4 text-2xl sm:text-5xl dark:text-white ">
                {/* Our products have featured on most media outlets around the world, in most languages.  */}
                Find me on <Textspin text={TEXTS} direction={"down"} interval={1000}/>
                <noscript>
                Find me on {...TEXTS}.
                </noscript>
        </h1>
        </div>
    );
}