import type { PlasmoCSConfig } from "plasmo"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"],
  all_frames: true
}

const scrapeContent = () => {
  const title = document.title;
  const url = window.location.href;
  console.log(`Scraped content: Title - ${title}, URL - ${url}`);
};


window.addEventListener("load", () => {
  console.log(
    "Be one, then be noone. Be noone, then be everyone. Be everyone, then be any one"
  )
  scrapeContent();
})

