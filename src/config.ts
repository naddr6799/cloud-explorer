// The three photo booth looks - see CONFIG.photoBoothMode below.
export type CameraMode = "vintage" | "modern" | "polaroid";

/* ============================================================
   CONFIG - edit these values to make the badge your own!
   ============================================================ */
export const CONFIG = {
  // 2–4 hex colors. The background will drift smoothly between them.
  // Visit https://coolors.co/palettes/trending for colors!
  // Colors must start with #
  gradientColors: ["#050002", "#8b2f2f", "#aebbaf"] , 

  // Your name (or nickname) as a plain string. Shows on the badge and sets
  // the initials in the avatar circle.
  name: "nader ",

  // One short sentence, shown under "Fun fact" on the badge. Keep it to
  // a single line - long text will wrap and may get cramped.
  funFact: "I own 7 cats.",

  // true if you're running/deploying this from a cloud VM, false if it's
  // just running on your own laptop. Only changes the "My Laptop 💻" vs
  // "Alibaba Cloud ☁️" text on the badge - purely cosmetic.
  isOnCloud: false,

  // true/false. Lets students flip the card and take a photo with their
  // front camera. Turn off if the device/browser running this has no
  // camera, or you'd rather ship the badge without it.
  enablePhotoBooth: true,

  // The photo booth's look, baked into every shot you take. Only matters
  // if enablePhotoBooth is true above. One of these exact strings:
  //   "vintage"  - black & white film, light leaks, dust and scratches
  //   "modern"   - sharp and punchy, medium-high contrast
  //   "polaroid" - soft focus, warm and faded, like an instant camera
  photoBoothMode: "polaroid" as CameraMode,

  // The movie/game/show/anime shown in the poster frame on the badge.
  favorite: {
    // Which word appears in "My favorite ___ is..." on the badge. One of
    // these exact strings: "movie" | "game" | "tv show" | "anime"
    category: "movie",
    // The title, shown as plain text under the poster.
    title: "Interstellar",
    // A direct image URL (or a local file like ./posters/mine.jpg) for the
    // poster/cover art. Go to Google -> search the title -> right-click
    // the poster -> "Copy Image Address" -> paste it in here.
    posterUrl:
      "data:image/jpeg;base64,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",
  },
};
