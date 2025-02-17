const API_URL = "http://localhost:3001";

export async function register(formData) {
    try {
      const response = await fetch(`${API_URL}/registration`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || "Erro ao cadastrar");
      }
  
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }