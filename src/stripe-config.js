// Stripe Configuration for IT Girl Academy
// 
// HOW TO SET UP STRIPE PAYMENT LINKS:
// 1. Go to https://dashboard.stripe.com/payment-links
// 2. Click "New" to create a payment link for each course
// 3. Set the product name, price, and description
// 4. Copy the payment link URL and paste it below
// 5. Add ?client_reference_id={course-id} to track which course was purchased
//
// Example: https://buy.stripe.com/abc123?client_reference_id=creator-business-toolkit

// PRE-ORDER PRICING (until January 1st, 2025)
// After launch, update to regular prices

// Stripe Payment Links - LIVE!
export const STRIPE_PAYMENT_LINKS = {
  // Courses - PRE-ORDER PRICES (early bird discount!)
  'filmmaking-masterclass': {
    price: 99.99,
    preorderPrice: 79.99,
    paymentLink: 'https://buy.stripe.com/test_00weVe5vQcm97iEeR383C00',
  },
  'creator-business-toolkit': {
    price: 19.99,
    preorderPrice: 14.99,
    paymentLink: 'https://buy.stripe.com/test_3cI5kE6zU85T32o10d83C01',
  },
  'ugc-starter-kit': {
    price: 24.99,
    preorderPrice: 19.99,
    paymentLink: 'https://buy.stripe.com/test_3cI14oaQacm98mIgZb83C02',
  },
  'hair-brand-outreach': {
    price: 14.99,
    preorderPrice: 9.99,
    paymentLink: 'https://buy.stripe.com/test_bJe14o9M65XL46s7oB83C03',
  },
  // Bundles - THE BEST DEAL!
  'all-courses-bundle': {
    price: 159.97,
    preorderPrice: 99.99,
    paymentLink: 'https://buy.stripe.com/test_7sY7sM1fA1Hv8mIcIV83C04',
  },
};

// Success/Cancel URLs (where users go after payment)
export const STRIPE_URLS = {
  successUrl: window.location.origin + '/academy?purchase=success',
  cancelUrl: window.location.origin + '/academy?purchase=cancelled',
};

// Helper function to redirect to Stripe Payment Link
export function redirectToCheckout(courseId) {
  const config = STRIPE_PAYMENT_LINKS[courseId];
  
  if (!config || !config.paymentLink || config.paymentLink === 'YOUR_STRIPE_PAYMENT_LINK_HERE') {
    // Demo mode - simulate purchase
    console.log('Demo mode: Simulating purchase for', courseId);
    return { demo: true, courseId };
  }
  
  // Add client reference ID to track the purchase
  const url = new URL(config.paymentLink);
  url.searchParams.set('client_reference_id', courseId);
  
  // Redirect to Stripe
  window.location.href = url.toString();
  return { demo: false };
}

// Check if returning from successful Stripe payment
export function checkPurchaseSuccess() {
  const params = new URLSearchParams(window.location.search);
  const purchaseStatus = params.get('purchase');
  const sessionId = params.get('session_id');
  
  if (purchaseStatus === 'success') {
    // In production, you'd verify the session with your backend
    // For now, we'll trust the redirect
    return { success: true, sessionId };
  }
  
  if (purchaseStatus === 'cancelled') {
    return { cancelled: true };
  }
  
  return null;
}

export default STRIPE_PAYMENT_LINKS;

