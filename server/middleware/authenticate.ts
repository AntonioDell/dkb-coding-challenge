export default defineEventHandler((event) => {
  /* FIXME: 
    This would realistically check a secure HTTP Only cookie or similar authentication methods.
    For the purpose of this exercise we will allow all requests.
   */
  const isAuthenticationValid = true;
  if (!isAuthenticationValid) {
    sendRedirect(event, "/login", 401);
    return;
  }
});
