// api.ts

export async function loginUser(email: string, password: string) {
    try {
      const response = await fetch("http://localhost:50051/user/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("There was an error!", error);
      throw error;
    }
  }
  
  export async function signupUser(name: string, email: string, password: string) {
    try {
      const response = await fetch("http://localhost:50051/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("There was an error!", error);
      throw error;
    }
  }

  export async function addArticle(article_text: string, user_id: string) {
    try {
      const response = await fetch("http://localhost:50052/article", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 'article_text': article_text, 'user_id': user_id }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("There was an error!", error);
      throw error;
    }
  }