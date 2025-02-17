<template>
  <div class="form-container">

    <!-- Etapa 1 - Início -->
    <div v-if="step === 1">
      <span>Etapa <b class="current-step-text">1</b> de 4</span>
      <h2>Seja bem vindo(a)</h2>
        <div>
          <label>
            Endereço de e-mail
            <input type="email" v-model="formData.email" required class="registration-input">
            <span v-if="errors.email" class="error">{{ errors.email }}</span>
          </label>
        </div>
        <div class="option-input">
          <label>
            <input type="radio" value="pf" v-model="formData.userType">
            Pessoa física
          </label>
          <label>
            <input type="radio" value="pj" v-model="formData.userType">
            Pessoa jurídica
          </label>
        </div>
        <div>
          <button type="button" @click="nextStep" class="flat-button full-button">Continuar</button>
        </div>
    </div>

    <!-- Etapa 2 - Pessoa Física -->
    <div v-if="step === 2 && formData.userType == UserType.physic">
      <span>Etapa <b class="current-step-text">2</b> de 4</span>
      <h2>Pessoa Física</h2>
        <div>
          <label>
            Nome
            <input type="text" v-model="formData.name" required class="registration-input">
            <span v-if="errors.name" class="error">{{ errors.name }}</span>
          </label>
        </div>
        <div>
          <label>
            CPF
            <input type="text" v-model="formData.cpf" v-maska="'###.###.###-##'" required class="registration-input">
            <span v-if="errors.cpf" class="error">{{ errors.cpf }}</span>
          </label>
        </div>
        <div>
          <label>
            Data de nascimento
            <input type="date" v-model="formData.birthDate" required class="registration-input">
            <span v-if="errors.birthDate" class="error">{{ errors.birthDate }}</span>
          </label>
        </div>
        <div>
          <label>
            Telefone
            <input type="tel" v-model="formData.phone" v-maska="'(##) #####-####'" required class="registration-input">
            <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
          </label>
        </div>
        <div class="buttons-container">
          <button type="button" @click="prevStep" class="stroked-button">Voltar</button>
          <button type="button" @click="nextStep" class="flat-button split-button">Continuar</button>
        </div>
    </div>

    <!-- Etapa 2 - Pessoa Jurídica -->
    <div v-if="step === 2 && formData.userType == UserType.juridic">
      <span>Etapa <b class="current-step-text">2</b> de 4</span>
      <h2>Pessoa Jurídica</h2>
  
      <form>
        <div>
          <label>
            Razão social
            <input type="text" v-model="formData.companyName" required class="registration-input">
            <span v-if="errors.companyName" class="error">{{ errors.companyName }}</span>
          </label>
        </div>
        <div>
          <label>
            CNPJ
            <input type="text" v-model="formData.cnpj" v-maska="'##.###.###/####-##'" required class="registration-input">
            <span v-if="errors.cnpj" class="error">{{ errors.cnpj }}</span>
          </label>
        </div>
        <div>
          <label>
            Data de abertura
            <input type="date" v-model="formData.openDate" required class="registration-input">
            <span v-if="errors.openDate" class="error">{{ errors.openDate }}</span>
          </label>
        </div>
        <div>
          <label>
            Telefone
            <input type="tel" v-model="formData.phone" v-maska="'(##) #####-####'" required class="registration-input">
            <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
          </label>
        </div>
        <div class="buttons-container">
          <button type="button" @click="prevStep" class="stroked-button">Voltar</button>
          <button type="button" @click="nextStep" class="flat-button split-button">Continuar</button>
        </div>
      </form>
    </div>

    <!-- Etapa 3 - Senha de acesso -->
    <div v-if="step === 3">
      <span>Etapa <b class="current-step-text">3</b> de 4</span>
      <h2>Senha de acesso</h2>
      <form>
        <div>
          <label>
            Sua senha
            <input type="password" v-model="formData.password" required class="registration-input">
            <span v-if="errors.password" class="error">{{ errors.password }}</span>
          </label>
        </div>
        <div class="buttons-container">
          <button type="button" @click="prevStep" class="stroked-button">Voltar</button>
          <button type="button" @click="nextStep" class="flat-button split-button">Continuar</button>
        </div>

      </form>
    </div>

    <!-- Etapa 4 - Revisar informações -->
    <div v-if="step === 4">
      <span>Etapa <b class="current-step-text">4</b> de 4</span>
      <h2>Revise suas informações</h2>
  
      <form>
        <div>
          <label>
            Endereço de e-mail
            <input type="email" v-model="formData.email" required class="registration-input">
            <span v-if="errors.email" class="error">{{ errors.email }}</span>
          </label>
        </div>

        <template v-if="formData.userType == UserType.physic">
          <div>
            <label>
              Nome
              <input type="text" v-model="formData.name" required class="registration-input">
              <span v-if="errors.name" class="error">{{ errors.name }}</span>
            </label>
          </div>
          <div>
            <label>
              CPF
              <input type="text" v-model="formData.cpf" v-maska="'###.###.###-##'" required class="registration-input">
              <span v-if="errors.cpf" class="error">{{ errors.cpf }}</span>
            </label>
          </div>
          <div>
            <label>
              Data de nascimento
              <input type="date" v-model="formData.birthDate" required class="registration-input">
              <span v-if="errors.birthDate" class="error">{{ errors.birthDate }}</span>
            </label>
          </div>
        </template>

        <template v-else>
          <div>
          <label>
            Razão social
            <input type="text" v-model="formData.companyName" required class="registration-input">
            <span v-if="errors.companyName" class="error">{{ errors.companyName }}</span>
          </label>
        </div>
        <div>
          <label>
            CNPJ
            <input type="text" v-model="formData.cnpj" v-maska="'##.###.###/####-##'" required class="registration-input">
            <span v-if="errors.cnpj" class="error">{{ errors.cnpj }}</span>
          </label>
        </div>
        <div>
          <label>
            Data de abertura
            <input type="date" v-model="formData.openDate" required class="registration-input">
            <span v-if="errors.openDate" class="error">{{ errors.openDate }}</span>
          </label>
        </div>
        </template>

        <div>
          <label>
            Telefone
            <input type="tel" v-model="formData.phone" v-maska="'(##) #####-####'" required class="registration-input">
            <span v-if="errors.phone" class="error">{{ errors.phone }}</span>
          </label>
        </div>
        <div>
          <label>
            Senha
            <input type="password" v-model="formData.password" required class="registration-input">
            <span v-if="errors.password" class="error">{{ errors.password }}</span>
          </label>
        </div>
        <div class="buttons-container">
          <button type="button" @click="prevStep" class="stroked-button">Voltar</button>
          <button type="button" @click="submitForm" class="flat-button split-button">Cadastrar</button>
        </div>
        <div>
          <label>
            <input type="checkbox" v-model="formData.isError">
            Caso queira simular a resposta de erro da api, marque esta opção
          </label>
        </div>
      </form>
    </div>
  </div>

  <!-- Modal com mensagens de retorno -->
  <div class="return-messages-container modal-overlay" style="max-width: 100%;" v-if="isModalOpen" @click="closeModal">
    <div class="modal-content" @click.stop>
      <span class="close-button" @click="closeModal">&times;</span>

      <template v-if="successMessage">
        <div class="return-message" >
          <img src="/src/assets/check.png" alt="icone de sucesso">
          <h3>Sucesso</h3>
        </div>
        <span>{{ successMessage }}</span>
      </template>

      <template v-else-if="errorMessage">
        <div class="return-message" >
          <img src="/src/assets/mark.png" alt="icone de sucesso">
          <h3>Ops..</h3>
        </div>
        <span>{{ errorMessage }}</span>
      </template>
      <button @click="closeModal" class="flat-button full-button">Fechar</button>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { ValidationsInput } from '../utils/validations';
import UserType from '../enums/user-type.enum';
import { register } from '../services/registration-api';

// Instância com as validações utilizadas nos inputs
const validations = new ValidationsInput();

// Variável de abertura do modal;
const isModalOpen = ref(false);

// Erros
const errors = reactive({});

// Dados do formulário
const formData = reactive({
  email: '',
  userType: 'pf',
  name: '',
  cpf: '',
  cnpj: '',
  companyName: '',
  birthDate: '',
  openDate: '',
  phone: '',
  password: '',
  isError: false
});

// Estado da etapa
const step = ref(1);

// Mensagens de retorno da requisição
const errorMessage = ref("");
const successMessage = ref("");

// Validador de etapas
const validateStep = () => {
  errors.email = validations.validateEmail(formData.email);
  
  if (step.value === 2 || step.value === 4) {
    errors.phone = validations.validatePhone(formData.phone);
    
    // Caso seja pessoa física
    if(formData.userType === UserType.physic) {
      errors.name = validations.validateName(formData.name);
      errors.cpf = validations.validateCPF(formData.cpf);
      errors.birthDate = validations.validateDate(formData.birthDate);
    }
    // Caso seja pessoa jurídica
    else if(formData.userType === UserType.juridic) {
      errors.companyName = validations.validateCompanyName(formData.companyName);
      errors.cnpj = validations.validateCNPJ(formData.cnpj);
      errors.openDate = validations.validateDate(formData.openDate);
    }
  } 
  
  if (step.value === 3 || step.value === 4) {
    errors.password = validations.validatePassword(formData.password);
  }

  return !Object.values(errors).some((err) => err)
};

// Próxima etapa
const nextStep = () => {
  if (validateStep()) step.value++;
};

// Etapa anterior
const prevStep = () => {
  if (step.value > 1) step.value--;
}

// Enviar formulário
const submitForm = async () => {
  if(validateStep()){
    try {
      successMessage.value = "";
      errorMessage.value = "";

      const response = await register(formData);
      successMessage.value = response.message;

      if(successMessage) clearForm();

      openModal();
    } catch (error) {
      errorMessage.value = error.message;
      openModal();
    }
  }
}

const clearForm = () => {
  step.value = 1;

  const clearFormData = {
    email: '',
    userType: 'pf',
    name: '',
    cpf: '',
    cnpj: '',
    companyName: '',
    birthDate: '',
    openDate: '',
    phone: '',
    password: '',
    isError: false
  };

  Object.assign(formData, {...clearFormData});
}

const closeModal = () => {
  isModalOpen.value = false;
}

const openModal = () => {
  isModalOpen.value = true;
}
</script>

<style scoped>
div {
  gap: 10px;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
}

h2 {
  margin: 0 0 20px 0;
}

.current-step-text {
  color: #FF9900;
  font-weight: 100;
}

/* Inputs */
.registration-input {
  width: 94%;
  padding: 8px;
  margin: 10px 0;
  border-radius: 5px;
  border: 1px solid black;
}

.option-input {
  display: flex;
  flex-direction: row;
}

/* Mensagens de erro */
.error {
  color: red;
  font-size: 12px;
  font-weight: bold;
}

/* Botões */
.buttons-container {
  display: flex;
  margin: 15px 0px;
  flex-direction: row;
  justify-content: space-between;
}

button {
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

.stroked-button {
  width: 45%;
  color: #FF9900;
  background-color: white;
  border: #FF9900 solid 1px;
}

.flat-button {
  border: none;
  color: white;
  background-color: #FF9900;
}

.split-button {
  width: 50%;
}

.full-button {
  width: 100%;
}

/* Modal de retorno das mensagens */
.return-message {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.return-message h3 {
  font-size: 20px;
}

.return-message img {
  width: 24px;
  height: 24px;
}

/* Estilo do overlay (fundo escuro) */
.modal-overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
}

/* Estilo do conteúdo do modal */
.modal-content {
  width: 100%;
  padding: 20px;
  max-width: 310px;
  border-radius: 8px;
  text-align: center;
  position: relative;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Estilo do botão de fechar */
.close-button {
  top: 10px;
  right: 10px;
  color: #888;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
}

/* Animação ao passar o mouse sobre botão de fechar */
.close-button:hover {
  color: #333;
}
</style>
