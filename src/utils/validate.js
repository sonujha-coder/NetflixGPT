export const checkValidate = (email, password, fullName) => {
  const isEmailValid = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
      password
    );
  //   const isFullNameValid = /^[a-zA-Z\\s]*$/.test(fullName);
  if (!isEmailValid) return "Email is not Valid";
  if (!isPasswordValid) return "Password is not Valid";
  //   if (!isFullNameValid) return "Please enter valid name";
  return null;
};
