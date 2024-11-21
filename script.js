function copyToClipboard(button) {
    const codeBox = button.previousElementSibling; 
    const textToCopy = codeBox.innerText;

    
    navigator.clipboard.writeText(textToCopy).then(() => {
        button.innerText = "Copiado!";
        setTimeout(() => (button.innerText = "Copiar"), 2000); // Volta ao texto original após 2 segundos
    });
}
