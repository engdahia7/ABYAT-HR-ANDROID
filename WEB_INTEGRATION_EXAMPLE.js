// يمكن إضافته لصفحة HR عند الحاجة
function abyatBiometric() {
  if (window.ABYATHR?.requestBiometric) window.ABYATHR.requestBiometric();
}

function abyatNotify(title, body) {
  if (window.ABYATHR?.showNotification) window.ABYATHR.showNotification(title, body);
}

window.addEventListener('abyatBiometricSuccess', () => {
  console.log('Native biometric success');
});
