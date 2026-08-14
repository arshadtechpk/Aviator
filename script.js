const SUPABASE_URL = 'https://twhgyqzidkclntfbcadw.supabase.co';
const SUPABASE_KEY = 'EyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR3aGd5cXppZGtjbG50ZmJjYWR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY3MjAyNzAsImV4cCI6MjEwMjI5NjI3MH0.HdjdKwvmWwGusIbzECWxyN8JzjAIhhMheskPp0gzogg';

let supabase = null;
let currentUser = null;

document.addEventListener('DOMContentLoaded', () => {
  if (window.supabase) {
    supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  }

  // DOM Elements
  const modal = document.getElementById('auth-modal');
  const loginBtn = document.getElementById('login-btn');
  const closeModal = document.getElementById('close-modal');

  const tabDepBtn = document.getElementById('tab-dep-btn');
  const tabWitBtn = document.getElementById('tab-wit-btn');
  const depForm = document.getElementById('deposit-form');
  const witForm = document.getElementById('withdraw-form');

  const tabLoginBtn = document.getElementById('tab-login-btn');
  const tabSignupBtn = document.getElementById('tab-signup-btn');
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');

  // Modal Open/Close Event Listeners
  if (loginBtn) loginBtn.onclick = () => modal.style.display = 'flex';
  if (closeModal) closeModal.onclick = () => modal.style.display = 'none';

  // Tab Switchers
  if (tabDepBtn) {
    tabDepBtn.onclick = () => {
      depForm.style.display = 'block';
      witForm.style.display = 'none';
      tabDepBtn.classList.add('active');
      tabWitBtn.classList.remove('active');
    };
  }

  if (tabWitBtn) {
    tabWitBtn.onclick = () => {
      depForm.style.display = 'none';
      witForm.style.display = 'block';
      tabWitBtn.classList.add('active');
      tabDepBtn.classList.remove('active');
    };
  }

  if (tabLoginBtn) {
    tabLoginBtn.onclick = () => {
      loginForm.style.display = 'block';
      signupForm.style.display = 'none';
      tabLoginBtn.classList.add('active');
      tabSignupBtn.classList.remove('active');
    };
  }

  if (tabSignupBtn) {
    tabSignupBtn.onclick = () => {
      loginForm.style.display = 'none';
      signupForm.style.display = 'block';
      tabSignupBtn.classList.add('active');
      tabLoginBtn.classList.remove('active');
    };
  }

  // Signup Submit
  signupForm.onsubmit = async (e) => {
    e.preventDefault();
    const username = document.getElementById('signup-username').value;
    const phone = document.getElementById('signup-phone').value;
    const password = document.getElementById('signup-password').value;

    const { data, error } = await supabase
      .from('users')
      .insert([{ username, phone, password, balance: 0 }]);

    if (error) {
      alert('Signup Error: ' + error.message);
    } else {
      alert('Account Created Successfully! Please Login.');
      tabLoginBtn.click();
    }
  };

  // Login Submit
  loginForm.onsubmit = async (e) => {
    e.preventDefault();
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
      modal.style.display = 'none';
      document.getElementById('auth-section').style.display = 'none';
      document.getElementById('user-section').style.display = 'block';
      document.getElementById('balance').innerText = Number(data.balance).toFixed(2);
      alert('Welcome ' + data.username + '!');
    }
  };

  // Deposit Submit
  depForm.onsubmit = async (e) => {
    e.preventDefault();
    const username = document.getElementById('dep-username').value;
    const amount = document.getElementById('dep-amount').value;
    const payment_method = document.getElementById('dep-method').value;
    const tid = document.getElementById('dep-tid').value;

    const { data, error } = await supabase
      .from('deposits')
      .insert([{ username, amount, payment_method, tid, status: 'pending' }]);

    if (error) {
      alert('Deposit Error: ' + error.message);
    } else {
      alert('Deposit Request Submitted Successfully!');
      depForm.reset();
    }
  };
});
