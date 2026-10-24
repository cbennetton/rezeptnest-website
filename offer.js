// Only the date is checked locally; no analytics, requests or browser storage.
if (Date.now() >= Date.parse('2027-01-01T00:00:00+01:00')) {
  document.getElementById('launch-offer').hidden = true;
  document.getElementById('launch-banner').hidden = true;
  document.getElementById('regular-price').hidden = false;
}
