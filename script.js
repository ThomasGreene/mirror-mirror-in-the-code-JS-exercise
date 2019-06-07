let inputText = document.querySelector("#message");
let textBox1 = document.querySelector("#article1");
let textBox2 = document.querySelector("#article2");
inputText.addEventListener('keyup', (event) => {
    textBox1.innerHTML = event.target.value
    console.log(event);
});
inputText.addEventListener('keyup', (event) => textBox2.textContent = event.target.value);