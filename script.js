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
