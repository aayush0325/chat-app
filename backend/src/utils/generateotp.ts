// Generate a random 6-digit code
export const generateVerificationCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};
