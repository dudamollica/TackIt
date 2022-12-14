import LoginRegister from "../Components/LoginRegister"


export default function Register() {
    return (
        <>
            <LoginRegister
                inputs={["email", "senha","nome","foto"]}
                buttonText={"Cadastrar"}
                linkText="Já tem uma conta? Faça login!"
                linkpath="/"
                submitFunction
            />
        </>
    )
}