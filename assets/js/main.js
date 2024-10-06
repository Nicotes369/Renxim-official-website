// Copy Contract Address Function
function copyAddress() {
    const address = document.getElementById('contract-address').innerText.split(': ')[1];
    navigator.clipboard.writeText(address).then(() => {
        alert('Contract address copied to clipboard!');
    }).catch(err => {
        alert('Failed to copy address.');
        console.error('Error copying text: ', err);
    });
}
