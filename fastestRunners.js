function downloadArchive() {
    // Временная ссылка, обновите после загрузки архива
    const archiveUrl = 'https://raw.githubusercontent.com/glizxgod/download-site/main/Tasks.rar';
    const link = document.createElement('a');
    link.href = archiveUrl;
    link.download = 'Tasks.rar';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
document.addEventListener('DOMContentLoaded', function() {
    const downloadButton = document.getElementById('downloadButton');
    downloadButton.addEventListener('click', downloadArchive);
});