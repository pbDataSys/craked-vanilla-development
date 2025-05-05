const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    mobileMenu.classList.add('hidden');

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});
mobileMenuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
//navigation bar functionality 3nd
//
// --- Copy IP button functionality
const copyIpButton = document.getElementById('copyIp');
copyIpButton.addEventListener('click', () => {
  navigator.clipboard.writeText('crackedvanilla.aternos.me');

  const originalText = copyIpButton.innerHTML;
  copyIpButton.innerHTML = '<i class="fas fa-check mr-1"></i> Copied!';
  copyIpButton.classList.remove('bg-blue-600', 'hover:bg-blue-700');
  copyIpButton.classList.add('bg-green-600', 'hover:bg-green-700');

  setTimeout(() => {
    copyIpButton.innerHTML = originalText;
    copyIpButton.classList.remove('bg-green-600', 'hover:bg-green-700');
    copyIpButton.classList.add('bg-blue-600', 'hover:bg-blue-700');
  }, 2000);
});

setTimeout(() => {
  const statusIndicator = document.getElementById('statusIndicator');
  const statusText = document.getElementById('statusText');

  const isOnline = Math.random() > 0.3;

  if (isOnline) {
    statusIndicator.classList.remove('bg-gray-500');
    statusIndicator.classList.add('bg-green-500');
    statusText.textContent = 'Idk lol';
  } else {
    statusIndicator.classList.remove('bg-gray-500');
    statusIndicator.classList.add('bg-red-500');
    statusText.textContent = 'Idk lol';
  }
}, 1500);
