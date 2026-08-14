// Deposit / Withdrawal Switcher
function switchTab(tab) {
  const depositForm = document.getElementById('deposit-form');
  const withdrawForm = document.getElementById('withdraw-form');
  const btnDeposit = document.getElementById('btn-tab-deposit');
  const btnWithdraw = document.getElementById('btn-tab-withdraw');

  if (tab === 'deposit') {
    depositForm.style.display = 'block';
    withdrawForm.style.display = 'none';
    btnDeposit.classList.add('active');
    btnWithdraw.classList.remove('active');
  } else {
    depositForm.style.display = 'none';
    withdrawForm.style.display = 'block';
    btnDeposit.classList.remove('active');
    btnWithdraw.classList.add('active');
  }
}

// Login / Signup Toggle Box
function toggleAuthForm() {
  const authBox = document.getElementById('auth-box');
  if (authBox.style.display === 'none' || authBox.style.display === '') {
    authBox.style.display = 'block';
  } else {
    authBox.style.display = 'none';
  }
}

// Switch between Login and Signup Tab
function switchAuth(type) {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const tabLogin = document.getElementById('tab-login');
  const tabSignup = document.getElementById('tab-signup');

  if (type === 'login') {
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
    tabLogin.classList.add('active');
    tabSignup.classList.remove('active');
  } else {
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
    tabLogin.classList.remove('active');
    tabSignup.classList.add('active');
  }
}

// Simulate Login
function handleAuth(event) {
  event.preventDefault();
  document.getElementById('auth-box').style.display = 'none';
  document.getElementById('auth-btn').style.display = 'none';
  document.getElementById('wallet-badge').style.display = 'inline-block';
}
