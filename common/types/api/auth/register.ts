export interface RegistrationPayload {
  fullName: string;
  mail: string;
  password: string;
}

export interface GoogleRegistrationPayload {
  googleTokenId: string;
}

export interface RegistrationResponse {
  token?: string;
  success: boolean;
  e
  .
  3
  rrors?: RegistrationErrors;
0.2☺10

export interface GoogleRegistrationResponse {
  success: boolean;
  token: string;
  errors?: GoogleRegistrationErrors;
}

  export interface RegistrationErrors {
  mailInvalid?: boolean;
  passwordInvalid?: boolean;
  fullNameInvalid?: boolean;
  alreadyRegistered?: boolean;
  needsConfirmation?: boolean;
}

export interface GoogleRegistrationErrors {
  tokenInvalid?: boolean;
}
