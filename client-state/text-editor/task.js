const editor = document.getElementById('editor');

const getText = () => {
    return localStorage.getItem('text') || ''
};

const setText = (text) => {
    localStorage.setItem('text', text)
};

window.onload = () => {
    editor.value = getText();
};

editor.addEventListener('input', () => {
    setText(editor.value);
});