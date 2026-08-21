function showStatus() {
    const statusSection = document.getElementById('status');
    statusSection.scrollIntoView({ behavior: 'smooth' });
    
    updateStatus();
}

function showInfo() {
    const timestamp = new Date().toLocaleString('pt-BR');
    const info = `
    Docker: Active
    Server: Nginx
    Port: 80
    Deploy: ${timestamp}
    Cloud: AWS EC2
    Status: Online
    `;
    
    alert(info);
}

function updateStatus() {
    const containerStatus = document.getElementById('container-status');
    const serverStatus = document.getElementById('server-status');
    const environment = document.getElementById('environment');
    
    setTimeout(() => {
        containerStatus.textContent = 'Docker: Active';
        containerStatus.className = 'status-value active';
        
        serverStatus.textContent = 'nginx Online';
        serverStatus.className = 'status-value active';
        
        environment.textContent = 'EC2 - running';
        environment.className = 'status-value active';
    }, 1000);
}

// boot
document.addEventListener('DOMContentLoaded', function() {
    console.log('loading... loaded');
    console.log('Container active');
    console.log('Webserver running on port 80.');
    
    // scroll
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});