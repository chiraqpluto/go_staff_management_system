// --- NOTIFICATIONS ---
function showToast(message) {
    // Create toast element dynamically
    const toast = document.createElement('div');
    toast.className = 'fixed bottom-6 right-6 bg-slate-900 text-white px-6 py-4 rounded-xl shadow-2xl z-[70] flex items-center gap-3 transition-all duration-300 transform translate-y-24 opacity-0';
    toast.innerHTML = `<i class="fa-solid fa-circle-check text-green-400 text-xl"></i><span class="font-bold text-sm">${message}</span>`;
    
    document.body.appendChild(toast);

    // Animate in
    setTimeout(() => {
        toast.classList.remove('translate-y-24', 'opacity-0');
    }, 10);

    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.add('translate-y-24', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// --- AUTHENTICATION & REDIRECTS ---

function handleLogin(e) {
    e.preventDefault(); // Stop form from reloading page
    
    const role = document.getElementById('login-role').value;
    
    showToast(`Logging in as ${role === 'admin' ? 'Administrator' : 'Staff'}...`);
    
    // REDIRECT LOGIC: This sends the user to the correct file
    setTimeout(() => {
        if (role === 'admin') {
            window.location.href = 'admin-dashboard.html';
        } else {
            window.location.href = 'staff-dashboard.html';
        }
    }, 1000);
}

function handleSignup(e) {
    e.preventDefault();
    showToast("Account Created! Redirecting to Login...");
    
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1500);
}

function logout() {
    showToast("Logging Out...");
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 800);
}

// --- HELPER FOR ADMIN TABS ---
function switchAdminTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.admin-tab').forEach(el => el.style.display = 'none');
    // Show target tab
    const target = document.getElementById(`tab-${tabName}`);
    if(target) target.style.display = 'block';
    
    // Update Title
    const title = document.getElementById('admin-page-title');
    if(title) {
        if(tabName === 'overview') title.innerText = 'Overview';
        if(tabName === 'workers') title.innerText = 'Staff List';
        if(tabName === 'requests') title.innerText = 'Leave Requests';
    }
}