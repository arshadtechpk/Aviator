// Supabase Database Config
const SUPABASE_URL = 'https://twhgyqzidkclntfbcadw.supabase.co';
const SUPABASE_KEY = 'Sb_publishable_PQEgFp8leGVzvbD16SjmQQ_EVWtIc6R';

let supabase = null;

// Initialize Supabase safely
window.addEventListener('DOMContentLoaded', () => {
  if (window.supabase) {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  }
});

let currentUser = null;

// Modal Control Functions
function openAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) {
    modal.style.display = 'flex';
  }
}

function closeAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) {
    modal.style.display = 'none';
  }
}

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

// Tab Switcher Functions
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

// User Signup System
async function handleSignup(event) {
  event.preventDefault();
  if (!supabase) return alert('Database connecting... Please try again in 3 seconds');

  const username = document.getElementById('signup-username').value;
  const phone = document.getElementById('signup-phone').value;
  const password = document.getElementById('signup-password').value;

  const { data, error } = await supabase
    .from('users')
    .insert([{ username, phone, password, balance: 0 }]);

  if (error) {
    alert('Signup Failed: ' + error.message);
  } else {
    alert('Account Created Successfully! Please Login.');
    switchAuth('login');
  }
}

// User Login System
async function handleLogin(event) {
  event.preventDefault();
  if (!supabase) return alert('Database connecting... Please try again in 3 seconds');

  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('username', username)
    .eq('password', password)
    .single();

  if (error || !data) {
    alert('Invalid Username or Password!');
  } else {
    currentUser = data;
    closeAuthModal();
    document.getElementById('auth-btn').style.display = 'none';
    document.getElementById('wallet-badge').style.display = 'inline-block';
    document.getElementById('balance').innerText = Number(data.balance).toFixed(2);
    alert('Welcome back, ' + data.username + '!');
  }
}

// Submit Deposit System
async function handleDepositSubmit(event) {
  event.preventDefault();
  if (!supabase) return alert('Database connecting... Please try again in 3 seconds');

  const username = document.getElementById('dep-username').value;
  const amount = document.getElementById('dep-amount').value;
  const payment_method = document.getElementById('dep-method').value;
  const tid = document.getElementById('dep-tid').value;

  const { data, error } = await supabase
    .from('deposits')
    .insert([{ username, amount, payment_method, tid, status: 'pending' }]);

  if (error) {
    alert('Error submitting deposit: ' + error.message);
  } else {
    alert('Deposit Submitted Successfully! Admin approval pending.');
    event.target.reset();
  }
}

function handleWithdrawSubmit(event) {
  event.preventDefault();
  alert('Withdrawal Request Submitted!');
  event.target.reset();
}

function placeBet() {
  if (!currentUser) {
    alert('Please Login first to place a bet!');
    openAuthModal();
    return;
  }
  alert('Bet Placed Successfully!');
}
