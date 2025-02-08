import figlet from "figlet";


export function createBanner(text, fontStyle = "Standard", color = "blue") {
    return figlet.textSync(text, { font: fontStyle });
  }


export function listFonts() {
    console.log(`Available Fonts:\n${figlet.fontsSync().join(", ")}`)
}