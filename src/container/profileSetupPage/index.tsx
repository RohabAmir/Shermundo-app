"use client";
import React, { useState } from "react";
import styles from "./profileSetupPage.module.scss";
import Logo from "@/src/assets/icons/Logo";
import ImageAdd from "@/src/assets/icons/ImageAdd";
import Button from "@/src/components/Button/button";
import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { formFields, FormField } from "../../utils/index";
import RenderTextInput from "@/src/components/RenderedTextInput/renderedTextInput";

export interface ProfileFormInputs {
  title: string;
  name: string;
  surname: string;
  company: string;
  registrationNo: string;
  address: string;
  postCode: string;
  town: string;
  country: string;
  telephoneNo: string;
  mobileNo: string;
  email: string;
  website: string;
  taxReferenceNumber: string;
  bankName: string;
  IBAN: string;
  BIC: string;
  bankAddress: string;
  sharemundoAccountEmail: string;
  password: string;
}

const ProfileSetupPage: React.FC = () => {
  const methods = useForm<ProfileFormInputs>({
    defaultValues: {
      title: "",
      name: "",
      surname: "",
      company: "",
      registrationNo: "",
      address: "",
      postCode: "",
      town: "",
      country: "",
      telephoneNo: "",
      mobileNo: "",
      email: "",
      website: "",
      taxReferenceNumber: "",
      bankName: "",
      IBAN: "",
      BIC: "",
      bankAddress: "",
      sharemundoAccountEmail: "",
      password: "",
    },
  });

  const { handleSubmit, formState } = methods;
  const [isDirty, setIsDirty] = useState(false);

  const onSubmit: SubmitHandler<ProfileFormInputs> = async (data) => {
    console.log("Form Data:", data);
  };

  const handleInputChange = () => {
    setIsDirty(true);
  };

  return (
    <>
      <div className={styles.header}>
        <Logo />
      </div>
      <div className={styles.profilePage}>
        <div className={styles.heroSection}>
          <h1>Welcome to Sharemundo</h1>
          <p>
            To get started and set up your dashboard, we need a few details
            about your company. Please fill out the information below.
          </p>
          <div className={styles.uploadContainer}>
            <div className={styles.uploadIcon}>
              <ImageAdd />
            </div>
            <Button name="Upload Image" padding="12px 26px" />
          </div>
        </div>
        <form
          className={styles.profileFormContainer}
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormProvider {...methods}>
            <div className={styles.profileForm}>
              {formFields.slice(0, formFields.findIndex(field => field.name === "sharemundoAccountEmail")).map((field: FormField) => (
                <React.Fragment key={field.name}>
                  <RenderTextInput
                    name={field.name}
                    label={field.label}
                    required={field.required}
                    type={field.type}
                    onChange={handleInputChange}
                  />
                  {field.name === "bankAddress" && (
                    <hr className={styles.divider} />
                  )}
                </React.Fragment>
              ))}
            </div>
            <div className={styles.profileFormBelowDivider}>
              {formFields.slice(formFields.findIndex(field => field.name === "sharemundoAccountEmail")).map((field: FormField) => (
                <RenderTextInput
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  required={field.required}
                  type={field.type}
                  onChange={handleInputChange}
                />
              ))}
            </div>
            <div className={styles.submitBtn}>
              <Button name="Submit" padding="10px 100px" borderRadius="32px" isSubmit />
            </div>
          </FormProvider>
        </form>
      </div>
    </>
  );
};

export default ProfileSetupPage;
