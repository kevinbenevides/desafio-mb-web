export class ValidationsInput {
    validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email) ? "" : "E-mail inválido";
    };
      
    validateName = (name) => {
        return name.trim() ? "" : "Nome é obrigatório";
    };
      
    validateCPF = (cpf) => {
        return cpf.length === 14 ? "" : "CPF inválido";
    };
      
    validateCNPJ = (cnpj) => {
        return cnpj.length === 18 ? "" : "CNPJ inválido";
      };
      
    validateCompanyName = (companyName) => {
        return companyName.trim() ? "" : "Razão Social é obrigatória";
    };
      
    validatePhone = (phone) => {
        return phone.length >= 14 ? "" : "Telefone inválido";
    };
      
    validatePassword = (password) => {
        return password.length >= 6 ? "" : "A senha deve ter pelo menos 6 caracteres";
    };
      
    validateDate = (sendDate) => {
        return new Date(sendDate) <= new Date() ? "" : "A data deve ser igual ou inferior a data de hoje"
    }
}