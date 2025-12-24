// Email Collection Utilities for IT Girl Content
// Run these functions in browser console to manage subscribers

// View all collected emails
export function viewSubscribers() {
  const subscribers = JSON.parse(localStorage.getItem('vip_subscribers') || '[]');
  console.log('📧 VIP Subscribers:', subscribers.length);
  console.table(subscribers);
  return subscribers;
}

// Export subscribers as CSV
export function exportSubscribersCSV() {
  const subscribers = JSON.parse(localStorage.getItem('vip_subscribers') || '[]');
  if (subscribers.length === 0) {
    console.log('No subscribers yet!');
    return;
  }
  
  const csv = 'Email,Date Subscribed\n' + 
    subscribers.map(s => `${s.email},${s.date}`).join('\n');
  
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `vip-subscribers-${new Date().toISOString().split('T')[0]}.csv`;
  a.click();
  URL.revokeObjectURL(url);
  
  console.log(`✅ Exported ${subscribers.length} subscribers to CSV!`);
}

// Copy all emails to clipboard
export function copyEmails() {
  const subscribers = JSON.parse(localStorage.getItem('vip_subscribers') || '[]');
  const emails = subscribers.map(s => s.email).join('\n');
  navigator.clipboard.writeText(emails);
  console.log(`✅ Copied ${subscribers.length} emails to clipboard!`);
  return emails;
}

// Clear all subscribers (use with caution!)
export function clearSubscribers() {
  if (confirm('Are you sure you want to delete all subscribers?')) {
    localStorage.removeItem('vip_subscribers');
    console.log('🗑️ All subscribers cleared');
  }
}

// Add these to window for easy console access
if (typeof window !== 'undefined') {
  window.emailUtils = {
    viewSubscribers,
    exportSubscribersCSV,
    copyEmails,
    clearSubscribers
  };
  console.log('📧 Email utils loaded! Use window.emailUtils.viewSubscribers() to see subscribers');
}

export default { viewSubscribers, exportSubscribersCSV, copyEmails, clearSubscribers };

