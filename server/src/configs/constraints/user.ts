const constraints = {
  username: {
    minLength: 4,
    maxLength: 20,
  },
  email: {
    minLength: 4,
    maxLength: 100,
  },
  password: {
    minLength: 8,
    maxLength: 100,
  },
};

export default constraints;
