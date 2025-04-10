export function Page(text, btntext, img) {
  const title = document.createElement("h1");
  const button = document.createElement("button");
  const image = document.createElement("img");
  title.textContent = text;
  button.textContent = btntext;
  image.src = img;
  document.body.appendChild(title);
  document.body.appendChild(button);
  document.body.appendChild(image);
}
