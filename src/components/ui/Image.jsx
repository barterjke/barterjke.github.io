export function Image(props) {
    let alt = props.alt;
    let dimensionsInd = alt.search(/\|\d+(?:x\d+)?$/)
    if (dimensionsInd != -1) {
        const dimensions = alt.substring(dimensionsInd + 1);
        const [width, height = "auto"] = dimensions.split('x');
        alt = alt.substring(0, dimensionsInd);
        let style = { ...props.style, height: height + 'px' };
        props = { ...props, style, width, height };
    }
    props = { ...props, className: "mx-auto", alt, title: props.title || props.alt };
    let inside = <img {...props} />;
    if (props.src.startsWith("https://www.youtube.com")) {
        inside = <iframe {...props} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
    }
    return (
        <div className={"relative bg-opacity-40 bg-black py-4 " + (alt ? "pb-8" : "")}>
            {inside}
            <p className="absolute w-full text-center left-0 -bottom-2rem">{props.alt}</p>
        </div>
    )
}