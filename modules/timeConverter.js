export default function timeConverter(from, to, time) {
    let ms;
    switch (from) {
        case "ms":
            ms = time;
            break;
        case "s":
            ms = time * 1000;
            break;
        case "m":
            ms = time * 60 * 1000;
            break;
        case "h":
            ms = time * 60 * 60 * 1000;
            break;
        case "d":
            ms = time * 24 * 60 * 60 * 1000;
            break;
    }

    switch (to) {
        case "ms":
            return ms;
        case "s":
            return ms / 1000;
        case "m":
            return ms / 60 / 1000;
        case "h":
            return ms / 60 / 60 / 1000;
        case "d":
            return ms / 24 / 60 / 60 / 1000;
    }
}
