import figlet from "figlet";

export function createBanner(text) {
  figlet(text, (err, data) => {
    if (err) {
      console.error("Error generating banner");
      process.exit(1);
    }
    console.log(data);
  });
}