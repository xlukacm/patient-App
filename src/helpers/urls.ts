import IPatients from "../models/patients";

export interface patientParams {
  patient: IPatients;
}

export const urls = {
  home: "/",
  login: "/login",
  notFound: "/not-found",
  detail: {
    pattern: "/detail/:patientId",
    withParams: (params: patientParams): string => `${params.patient.id}`,
  },
};
