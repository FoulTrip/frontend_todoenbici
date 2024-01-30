"use client";

import React, { FormEvent, useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";
import { useRouter } from "next/navigation";

interface UserTypes {
  username: string;
  firstName: string,
  lastName: string,
  avatar: string;
  password: string;
  email: string;
  token: string;
}

function Signup() {
  const route = useRouter();

  const [data, setData] = useState<UserTypes>({
    username: "",
    firstName: "",
    lastName: "",
    avatar: "",
    password: "",
    email: "",
    token: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/signup", data);

      if (response.data.message == "Usuario creado Exitosamente") {
        console.log(data);
        toast.success(response.data.message);

        setTimeout(() => {
          route.push("/stream");
        }, 3000);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error al crear usuario");
    }
  };

  return (
    <>
      <Toaster richColors />
      <form onSubmit={handleSubmit} id="signupForm">
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={data.username}
        />
        <input
          type="text"
          name="firstName"
          placeholder="Nombre"
          onChange={handleChange}
          value={data.username}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Apellidos"
          onChange={handleChange}
          value={data.username}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={data.password}
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={data.email}
          onChange={handleChange}
        />

        <button type="submit">Registrarse</button>
      </form>
    </>
  );
}

export default Signup;
