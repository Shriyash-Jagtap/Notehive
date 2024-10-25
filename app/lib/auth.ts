// ./lib/auth.ts

export const signIn = async () => {
  window.location.href = "https://notehive-auth-server.vercel.app/api/auth/signin/google"; // Redirect to Google sign-in
};

export const signOut = async () => {
  await fetch("https://notehive-auth-server.vercel.app/api/auth/signout", {
    method: "POST",
    credentials: "include", // Include cookies if needed
  });
  window.location.href = "/"; // Redirect to homepage after sign-out
};
