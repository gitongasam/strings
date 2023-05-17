function protect_email(email) {
    const atIndex = email.indexOf('@');
    if (atIndex !== -1) {
      const username = email.substring(0, atIndex);
      const domain = email.substring(atIndex + 1);
      const hiddenUsername = username.substring(0, 4) + '...';
      return hiddenUsername + '@' + domain;
    }
    return email;
  }
  
  console.log(protect_email("robin_singh@example.com")); 