import imageUrlBuilder from '@sanity/image-url';
import client from "./client";

const urlForThumbnail = (source) => {
    return imageUrlBuilder(client).image(source).width(300).url();
}

export { urlForThumbnail };