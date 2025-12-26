document.getElementById('btn').addEventListener('click', async () => {
    const url = document.getElementById('url').value;
    if (!url) return;
    
    try {
        const resp = await fetch('http://localhost:5000/api/convert', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ url })
        });
        
        const data = await resp.json();
        let html = '<div class="result"><strong>' + data.original.song + '</strong></div>';
        
        if (data.alternatives) {
            for (let [p, info] of Object.entries(data.alternatives)) {
                html += '<a href="' + info.url + '" target="_blank" class="result">' + p + ': ' + info.title + '</a>';
            }
        }
        
        document.getElementById('results').innerHTML = html;
    } catch (e) {
        document.getElementById('results').innerHTML = '<div class="result" style="color:red">Ошибка: ' + e.message + '</div>';
    }
});
