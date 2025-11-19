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
                        <Input
                            label="Nome"
                            placeholder="Digite seu nome..."
                            type="text"
                            required
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>

                    <div className="pb-4">
                        <Input
                            label="Email"
                            placeholder="Digite seu email..."
                            type="email"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="pb-4">
                        <Input
                            label="Senha"
                            placeholder="Digite sua senha..."
                            type="password"
                            required
                            value={senha}
                            onChange={e => setSenha(e.target.value)}
                        />
                    </div>

                    {erro && <p style={{ color: "red" }}>{erro}</p>}

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
