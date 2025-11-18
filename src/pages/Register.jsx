import React, { useState } from "react";
import { Navbar, Logo, Title, Input, Button, AuthSwitch } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { signUp } from "../services/authService";
import "./Login.css";

export function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErro("");
        try {
         //   console.log("name: " + name)
            await signUp(name, email, senha);
            navigate("/login");
        } catch (err) {
            setErro(err.message);
        }
    };

    return (
        <div className="login-background">
            <AuthSwitch/>
            <div className="login-card">

                <div className="login-logo">
                    <Logo />
                </div>

                <div className="login-title">
                    <Title title="Criar conta" />
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="pb-4">
                        <Input label="Nome" placeholder="Digite seu nome..." />
                    </div>

                    <div className="pb-4">
                        <Input label="Email" placeholder="Digite seu email..." />
                    </div>

                    <div className="pb-4">
                        <Input label="Senha" placeholder="Digite sua senha..." />
                    </div>

                    <div className="text-center pt-4">
                        <Button type="submit">Cadastrar</Button>
                    </div>
                </form>

                <div className="login-footer">
                    Já tem cadastro? <Link to="/login">Entre agora</Link>
                </div>

            </div>
        </div>
    );
}
