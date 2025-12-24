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

// Replace these with your actual Stripe Payment Link URLs
export const STRIPE_PAYMENT_LINKS = {
  // Courses
  'filmmaking-masterclass': {
    price: 99.99,
    // Create this in Stripe Dashboard → Payment Links → New
    paymentLink: 'YOUR_STRIPE_PAYMENT_LINK_HERE', // e.g., https://buy.stripe.com/xxx
    priceId: '', // Optional: Stripe Price ID if using Checkout API
  },
  'creator-business-toolkit': {
    price: 19.99,
    paymentLink: 'YOUR_STRIPE_PAYMENT_LINK_HERE',
    priceId: '',
  },
  'ugc-starter-kit': {
    price: 24.99,
    paymentLink: 'YOUR_STRIPE_PAYMENT_LINK_HERE',
    priceId: '',
  },
  'hair-brand-outreach': {
    price: 14.99,
    paymentLink: 'YOUR_STRIPE_PAYMENT_LINK_HERE',
    priceId: '',
  },
  // Bundles
  'all-courses-bundle': {
    price: 149.99,
    paymentLink: 'YOUR_STRIPE_PAYMENT_LINK_HERE',
    priceId: '',
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

