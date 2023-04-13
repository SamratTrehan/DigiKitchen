
function addcomment(){
    const textarea = document.getElementById('comment');
    const text = textarea.value;
    const output = document.getElementById('comments');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = text;
    output.appendChild(newParagraph);
};
