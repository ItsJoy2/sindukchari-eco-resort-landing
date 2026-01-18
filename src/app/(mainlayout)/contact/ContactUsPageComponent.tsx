"use client";

import { SubmitButton } from "@/components/Form/fields/SubmitButton";
import { TextareaField } from "@/components/Form/fields/TextAreaField";
import { TextField } from "@/components/Form/fields/TextField";
import { GenericForm, GenericFormRef } from "@/components/Form/GenericForm";
import MainContainer from "@/components/shared/container/MainContainer";
import HeadingOne from "@/components/shared/heading/HeadingOne";
import HeadingTwo from "@/components/shared/heading/HeadingTwo";
import axiosInstance from "@/lib/axios/AxiosInstance";
import { contactUsSchema } from "@/schema/contactUs/contactUs";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRef } from "react";
import toast from "react-hot-toast";
import { z } from "zod";

type contactUsFormType = z.infer<typeof contactUsSchema>;

const initialValues: contactUsFormType = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactUsPageComponent() {
  const formRef = useRef<GenericFormRef<contactUsFormType>>(null);

  const { mutate, isPending } = useMutation({
    mutationFn: async (
      data: contactUsFormType | React.FormEvent<HTMLFormElement>,
    ) => {
      const response = await axiosInstance.post<any>(`/contact-form`, data);
      return response.data;
    },
    onSuccess: (data: any) => {
      if (data.success === true) {
        formRef.current?.reset();
        toast.success(data.message || "Successfully send message", {
          position: "top-center",
          style: {
            width: "fit-content",
          },
        });
      }
    },
    onError: (err: AxiosError<{ message: string }>) => {
      toast.error(err.message || "Something went wrong");
    },
  });

  const handleSubmit = (
    data: contactUsFormType | React.FormEvent<HTMLFormElement>,
  ) => {
    if ("preventDefault" in data) return;
    const payload = {
      ...data,
    };
    if (!payload.email) {
      delete payload.email;
    }
    toast.success("Message Sent Succefully!");
    formRef.current?.reset();
    return;
    mutate(payload);
  };

  return (
    <section className="py-12">
      <MainContainer>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <div>
            <GenericForm
              schema={contactUsSchema}
              initialValues={initialValues}
              onSubmit={handleSubmit}
              ref={formRef}
            >
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                  <TextField
                    name="name"
                    label="Full Name"
                    placeholder="Enter Name"
                    inputClass="contactus_form"
                  />{" "}
                  <TextField
                    name="phone"
                    label="Mobile Number"
                    type="number"
                    countryLog={true}
                    placeholder="Enter Phone"
                    inputClass="w-full pl-12"
                  />
                </div>
                <TextField
                  name="email"
                  label="Email"
                  placeholder="Enter your email"
                  inputClass="contactus_form"
                />
                <TextareaField
                  name="message"
                  label="Message"
                  placeholder="Enter message"
                  // inputClass="contactus_form"
                />
                <SubmitButton
                  className="bg-[#2563EB]"
                  label={isPending ? "Sending..." : "Submit Now"}
                  width="auto"
                />{" "}
              </div>
            </GenericForm>
          </div>
          <div className="flex items-center h-full">
            <div className="space-y-2">
              <HeadingOne text="Get Free Support Analysis" />
              <HeadingTwo
                className="font-normal text-gray-500"
                text="Call Us For First Support To This Number"
              />

              <a
                href="tel:+8801817643422"
                className="mt-2 inline-block text-lg font-normal hover:underline"
              >
                +880 01817 643 422
              </a>
            </div>
          </div>
        </div>
      </MainContainer>
    </section>
  );
}
