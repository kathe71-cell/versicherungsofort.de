import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication disabled for public access
export const base44 = createClient({
  appId: "68d8f19805a5cbecff3bb5b0", 
  requiresAuth: false 
});
