import { LayoutComponents } from "../../components/LayoutComponents";
import { LoginContextProvider } from "../../contexts/LoginContext";
import { FormLogin } from "../../components/Template/FormLogin";

export const Login = () => {

  return (
    <LoginContextProvider>
      <LayoutComponents>
        <FormLogin />
      </LayoutComponents>
    </LoginContextProvider>
  );
};
