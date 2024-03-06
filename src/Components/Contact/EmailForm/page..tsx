import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import swal from "sweetalert2";

function EmailForm() {
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    initialValues: {
      name: "",
      telephone: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Nome é obrigatório"),
      telephone: Yup.string(),
      email: Yup.string()
        .email("Email inválido")
        .required("Email é obrigatório"),
      message: Yup.string().required("Mensagem é obrigatória"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      try {
        setLoading(true);

        const api_key = "480aa8978db7c5ce8cb3598ab209b3f0-29b7488f-a985b7c9";
        const domain = "mg.sistemansa.com";
        const auth = {
          username: "api",
          password: api_key,
        };

        const from = "VigorTech<no-reply@vigortech.com>";
        const to = "contato@vigortech.io";
        const subject = "Novo Contato!";
        const html = `        
                <h1>O cliente, ${values.name}, entrou em contato!</h1>
                <hr>
                <strong>Mensagem:</strong><p>${values.message}</p>
                <hr>
                <h2>Informações do cliente:</h2>
                <ul>
                  <li>
                    <p>
                      <strong>Nome:</strong>
                      ${values.name}
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Email:</strong>
                      ${values.email}
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>Telefone:</strong>
                      ${values.telephone || "-"}
                    </p>
                  </li>
                </ul> 
              `;

        const mailData = {
          from,
          to,
          subject,
          html,
        };

        await axios.post(
          `https://api.mailgun.net/v3/${domain}/messages`,
          mailData,
          {
            auth,
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );

        await swal.fire({
          title: "Mensagem enviada com sucesso!",
          text: "Entraremos em contato em breve.",
          icon: "success",
          confirmButtonColor: "#00CBA9",
          confirmButtonText: "Ok",
        });

        setLoading(false);
        resetForm();
      } catch (error) {
        console.error("Erro ao enviar o email:", error);

        setLoading(false);

        await swal.fire({
          title: "Erro",
          text: "Um erro aconteceu, tente novamente mais tarde.",
          icon: "error",
          confirmButtonColor: "#FF0000",
          confirmButtonText: "Ok",
        });
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="grid grid-cols-2 w-[40rem] h-[30rem] gap-x-7 gap-y-5 py-8  max-xl:w-[30rem]  max-xl:h-[30rem]  px-10">
        <div className="w-full col-span-2">
          <input
            className="bg-[#E8E8E8] rounded w-full col-span-2 h-16 pl-8 placeholder:text-text placeholder:text-lg"
            type="text"
            placeholder="Nome Completo"
            {...formik.getFieldProps("name")}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="w-full">
          <input
            className="bg-[#E8E8E8] rounded w-full h-16 pl-8 placeholder:text-text placeholder:text-lg"
            type="text"
            placeholder="e-mail"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="w-full">
          <input
            className="bg-[#E8E8E8] rounded w-full h-16 pl-8 placeholder:text-text placeholder:text-lg"
            type="text"
            placeholder="Telefone"
            {...formik.getFieldProps("telephone")}
          />
        </div>

        <div className="w-full col-span-2">
          <textarea
            className="bg-[#E8E8E8] rounded w-full col-span-2 resize-none h-32 px-8 pt-5 placeholder:text-text placeholder:text-lg"
            placeholder="Mensagem"
            {...formik.getFieldProps("message")}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-500">{formik.errors.message}</div>
          ) : null}
        </div>
        <button
          className="bg-[#04D6B2] rounded w-full col-span-2 h-16"
          type="submit"
          disabled={formik.isSubmitting}
        >
          <p className="text-poppins-bold text-[#FFFFFF]">
            {formik.isSubmitting ? "Enviando..." : "ENVIAR"}
          </p>
        </button>
      </div>
    </form>
  );
}

export default EmailForm;
