// This is a mock API service. In a real application, this would make actual API calls.

export const registerUser = async (userData) => {
  // Simulate an API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate a successful registration
      if (userData.email && userData.password) {
        resolve({ success: true, message: "User registered successfully" });
      } else {
        reject({ success: false, message: "Registration failed" });
      }
    }, 1000); // Simulate network delay
  });
};

export const createPost = async (postData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newPost = {
        id: Date.now(),
        ...postData,
        createdAt: new Date().toISOString(),
      };
      resolve({ success: true, post: newPost });
    }, 1000);
  });
};