export const checkValidation = (email, password) => {
  const isEmailValid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(email);
  const isPasswordValid = /^(?=.*[0-9])(?=.*[a-zA-Z]).{3,30}$/.test(password);

  console.log("isEmailValid:", isEmailValid);
  console.log("isPasswordValid:", isPasswordValid);

  if (!isEmailValid) return "Email ID is not valid";
  if (!isPasswordValid) return "Password is not valid";

  return null;
};
