document.addEventListener('DOMContentLoaded', () => {
    const notepadContent = document.querySelector('.notepad-content');
    const clearButton = document.getElementById('clearButton');
    const uppercaseButton = document.getElementById('uppercaseButton');
    const lowercaseButton = document.getElementById('lowercaseButton');
    const saveButton = document.getElementById('saveButton');
    const downloadButton = document.getElementById('downloadButton'); 
    

    // Clear button
    clearButton.addEventListener('click', () => {
        notepadContent.textContent = '';
    });

    // Uppercase button
    uppercaseButton.addEventListener('click', () => {
        const currentText = notepadContent.textContent;
        notepadContent.textContent = currentText.toUpperCase();
    });

    // Lowercase button
    lowercaseButton.addEventListener('click', () => {
        const currentText = notepadContent.textContent;
        notepadContent.textContent = currentText.toLowerCase();
    });

    // Save button
    saveButton.addEventListener('click', () => {
        const noteContent = notepadContent.textContent;

        // You can customize the save functionality here
        // For example, you can save it to a file or a database
        // In this example, we'll simply display an alert
        alert("Note saved:\n" + noteContent);
    });

    // Download button
    downloadButton.addEventListener('click', () => {
        const noteContent = notepadContent.textContent;
        const blob = new Blob([noteContent], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'note.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    });

    
    

});
